from __future__ import annotations

from django.urls import path

from .views import GoogleLogin
from .views import LoginView
from .views import RegisterView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('google/', GoogleLogin.as_view(), name='google-auth'),
]
