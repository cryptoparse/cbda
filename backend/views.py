
from rest_framework import generics,views,status
from rest_framework.response import Response
from .serializers import EventUserSerializer, Phase1Serializer
from .models import EventUser, Group, Phase1
from django.forms.models import model_to_dict
from .phase1  import getGroups
import pandas as pd
# Create your views here.
from django.utils.crypto import get_random_string
class EventUserViewSet(generics.ListCreateAPIView):
    queryset = EventUser.objects.all()
    serializer_class = EventUserSerializer

class EventUserView(views.APIView):
    EventUser.objects.all().delete()
    def post(self,request):
        userData = request.data
        sessionTk =  get_random_string(length=32)
        while True:
            try:
                    sessObj = EventUser.objects.get(auth = sessionTk)
            except EventUser.DoesNotExist:
                    sessObj = None
            if sessObj:
                sessionTk =  get_random_string(length=32)
            else:
                break
        userData["auth"] = sessionTk
        
        serializer = EventUserSerializer(data=userData)
        if serializer.is_valid():
            serializer.save()
            return Response({'bootstrapId':sessionTk}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetUserDetailsView(views.APIView):
    serializer_class = EventUserSerializer
    def post(self,request):
        authdata = request.data
        authtok = authdata["auth"]
        try:
            sessObj = EventUser.objects.get(auth = authtok)
            obj = model_to_dict(sessObj)
            return Response({'userData':obj},status=status.HTTP_200_OK)
        except EventUser.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)



class EventStatusView(views.APIView):
    def get(self, request):
        countusers = EventUser.objects.all().count()

        return Response({'userstatus':{
                'registeredCount':countusers}}, status=status.HTTP_200_OK)


class Phase1View(views.APIView):
    def post(self,request):
        p1response = request.data
        serializer = Phase1Serializer(data=p1response)
        if serializer.is_valid():
            serializer.save()
            return Response({'Response':'Successful'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AllGroupData(views.APIView):
    def post(self,request):
        
        grouplist = getGroups(15)
        grouplistJSON = grouplist.to_dict()
        return Response({'GroupList':grouplistJSON},status=status.HTTP_200_OK)


class GetGroupNumber(views.APIView):
    def post(self,request):
        user = Group.objects.get(email = request)
        print(type)

class CreateGroups(views.APIView):
    def post(self,request):
        allGroups = pd.DataFrame(list(Phase1.objects.all()))
        groups = getGroups(15,allGroups)
        for index,row in groups.iterrows():
            objs = myGroup()
        