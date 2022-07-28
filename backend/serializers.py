from matplotlib.pyplot import cla
from rest_framework import serializers
from .models import ActionStage, EventUser, Group, Phase1, Phase2
from django.utils.crypto import get_random_string

class EventUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = EventUser
        fields = ('username','email','phone','auth')
    

class Phase1Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Phase1
        fields = ('email','q1','q2','q3','q4','q5','q6','q7','q8','q9','q10','q11')

class ActionStageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ActionStage
        fields = ('auth','stage')

class Phase2Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Phase2
        fields = ('group','totalscore','logicalscore','excelscore','mathscore','analyticalscore')

class gpSerialiser(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields =  ('email','group','filter1','filter2','filter3')
        