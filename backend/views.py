
from rest_framework import generics,views,status
from rest_framework.response import Response
from .serializers import EventUserSerializer
from .models import EventUser
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


class EventStatusView(views.APIView):
    def get(self, request):
        countusers = EventUser.objects.all().count();

        return Response({'userstatus':{
                'registeredCount':countusers}}, status=status.HTTP_200_OK)