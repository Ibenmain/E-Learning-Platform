# authe/utils.py
from django.core.mail import send_mail

def send_verification_email(email, code):
    send_mail(
        'Verify your email',
        f'Your verification code is: {code}',
        'no-reply@yourdomain.com',
        [email],
        fail_silently=False,
    )
    return {"message": "Verification code sent successfully!"}