from __future__ import annotations

import requests
from .models import CustomUser
from django.contrib.auth import get_user_model
from .serializers import UserRegistrationSerializer

from rest_framework import status
from rest_framework.views import APIView
from .utils import send_verification_email
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()

# User Registration View
class RegisterView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        user_email = request.data.get('email')
        user = CustomUser.objects.filter(email=user_email).exists()
        if user:
            return Response({'message': 'User with this email already exists!'}, status=status.HTTP_409_CONFLICT)
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            code = user.generate_verification_code()
            send_verification_email(user.email, code)
            return Response({'message': 'Verification code sent'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# User Login View
class LoginView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        user_email = request.data.get('email')
        password = request.data.get('password')

        if not user_email or not password:
            return Response(
                {'error': 'Email and password are required!', 'status': 400},
                status=status.HTTP_400_BAD_REQUEST,
            )

        user = CustomUser.objects.filter(email=user_email).first()

        if user is None:
            return Response(
                {'error': 'User with this email does not exist!', 'status': 404},
                status=status.HTTP_404_NOT_FOUND,
            )

        if not user.check_password(password):
            return Response(
                {'error': 'Incorrect password!', 'status': 401},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        request.session['access_token'] = str(access_token)

        return Response(
            {
                'refresh_token': str(refresh),
                'access_token': str(access_token),
                'status': 200,
            }, status=status.HTTP_200_OK,
        )

# Google Login View
class GoogleLogin(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        email = request.data.get('email')
        name = request.data.get('name')

        if not email or not name:
            return Response({'error': 'Missing email or name'}, status=status.HTTP_400_BAD_REQUEST)

        user, created = CustomUser.objects.get_or_create(email=email, defaults={'username': name})
        if created:
            user.set_unusable_password()
            user.save()
        else:
            user.username = name
            user.save()

        refresh = RefreshToken.for_user(user)
        return Response({
            'access_token': str(refresh.access_token),
            'refresh_token': str(refresh),
        }, status=status.HTTP_200_OK)


# Github Login View
class GithubLogin(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        code = request.data.get("code")
        if not code:
            return Response({"detail": "code missing"}, status=400)

        # 1) Exchange code for access token
        token_resp = requests.post(
            "https://github.com/login/oauth/access_token",
            headers={"Accept": "application/json"},
            data={
                "client_id": 'Ov23liWm9A750OQg6mo1',
                "client_secret": '6590d1f3f830bc27c181a7bb8629e451cdfe8601',
                "code": code,
            },
        )
        token_data = token_resp.json()
        access_token = token_data.get("access_token")
        if not access_token:
            return Response({"detail": "Invalid code", "debug": token_data}, status=400)

        # 2) Get user data
        user_resp = requests.get(
            "https://api.github.com/user",
            headers={"Authorization": f"Bearer {access_token}"},
        )
        user_data = user_resp.json()

        login_name = user_data.get("login")
        if not login_name:
            return Response(
                {"detail": "GitHub response missing login", "github_response": user_data},
                status=400,
            )

        email = user_data.get("email")
        if not email:
            emails_resp = requests.get(
                "https://api.github.com/user/emails",
                headers={"Authorization": f"Bearer {access_token}"},
            )
            if emails_resp.status_code == 200:
                emails = emails_resp.json()
                email = next(
                    (e["email"] for e in emails if e.get("primary") and e.get("verified")),
                    None,
                )

        if not email:
            email = f"{login_name}@github.com"

        user, created = CustomUser.objects.get_or_create(email=email, defaults={"username": login_name})
        if created:
            user.set_unusable_password()
            user.save()
        else:
            user.username = login_name
            user.save()

        refresh = RefreshToken.for_user(user)
        return Response({"access": str(refresh.access_token), "refresh": str(refresh)})


class VerifyCodeView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get("email")
        code = request.data.get("verification_code")
        if not email or not code:
            return Response({"error": "Email and verification code are required"}, status=status.HTTP_400_BAD_REQUEST)        
        try:
            user = CustomUser.objects.get(email=email)
        except CustomUser.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        if user.verification_code == code:
            user.is_verified = True
            user.verification_code = None
            user.save()
            return Response({"message": "Email verified successfully!"}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid verification code"}, status=status.HTTP_400_BAD_REQUEST)

class ResendCodeView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get("email")
        try:
            user = CustomUser.objects.get(email=email)
        except CustomUser.DoesNotExist:
            return Response({"error": "User not found"}, status=404)

        code = user.generate_verification_code()
        send_verification_email(user.email, code)
        return Response({"message": "Code resent"}, status=200)
