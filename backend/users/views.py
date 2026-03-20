from django.shortcuts import render

# Create your views here.


from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import RegisterSerializer

@api_view(['POST'])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User registered"})
    
    return Response(serializer.errors)

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile(request):
    return Response({
        "message": "Welcome to your profile",
        "user": request.user.username
    })