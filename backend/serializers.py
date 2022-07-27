from matplotlib.pyplot import cla
from rest_framework import serializers
from .models import EventUser, Phase1
from django.utils.crypto import get_random_string

class EventUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = EventUser
        fields = ('username','email','phone','auth')
    

class Phase1Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Phase1
        fields = ('email','q1','q2','q3','q4','q5','q6','q7','q8','q9','q10','q12')