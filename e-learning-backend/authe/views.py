from __future__ import annotations

import os

from django.shortcuts import HttpResponse
from django.shortcuts import redirect
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from .models import CustomUser
from .serializers import UserLoginSerializer
from .serializers import UserRegistrationSerializer

class RegisterView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        if email is None or password is None:
            return Response(
                {'error': 'Email and password are required!'},
                status=status.HTTP_400_BAD_REQUEST,
            )
        user = CustomUser.objects.get(email=email)
        if user is None:
            return Response(
                {'error': 'User not found!'},
                status=status.HTTP_401_UNAUTHORIZED,
            )
        if not user.check_password(password):
            return Response(
                {'error': 'Incorrect password!'},
                status=status.HTTP_401_UNAUTHORIZED,
            )
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        frontend_origin_url = os.getenv('FRONTEND_ORIGIN_URL', 'http://localhost:3000')
        response = redirect(frontend_origin_url)
        response.set_cookie(
            key='auth_token',
            value=access_token,
            httponly=True,
        )
        return response
