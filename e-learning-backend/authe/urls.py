from __future__ import annotations
from django.urls import path
from .views import LoginView
from .views import RegisterView
from .views import GithubLogin
from .views import ResendCodeView
from .views import GoogleLogin
from .views import VerifyCodeView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('google/', GoogleLogin.as_view(), name='google-auth'),
    path('github/', GithubLogin.as_view(), name='github-auth'),
    path('verify/', VerifyCodeView.as_view(), name='verify_code'),
    path('resend-code/', ResendCodeView.as_view(), name='resend_code'),
]
