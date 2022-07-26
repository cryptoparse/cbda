from rest_framework import serializers
from .models import EventUser
from django.utils.crypto import get_random_string

class EventUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = EventUser
        fields = ('username','email','phone','auth')
    
    