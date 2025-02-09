from __future__ import annotations

import os

from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.shortcuts import HttpResponse
from django.shortcuts import redirect
from google.auth.transport import requests
from google.oauth2 import id_token
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from .models import CustomUser
from .serializers import UserLoginSerializer
from .serializers import UserRegistrationSerializer

User = get_user_model()


class RegisterView(APIView):
    def post(self, request):
        user_email = request.data.get('email')
        user = CustomUser.objects.filter(email=user_email).exists()
        if user:
            return Response({'data': {'error': 'User with this email already exists!'}, 'status': 409})
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        user_email = request.data.get('email')
        password = request.data.get('password')

        # Validate required fields
        if not user_email or not password:
            return Response(
                {'error': 'Email and password are required!', 'status': 400},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Get the actual user object
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

        # Generate JWT tokens
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


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter

    def post(self, request):
        response = super().post(request)
        user = self.request.user
        user_data = {
            'email': user.email,
            'username': user.username,
        }
        return Response(user_data, status=status.HTTP_200_OK)
