
import email
from rest_framework import generics,views,status
from rest_framework.response import Response
from yaml import serialize
from .serializers import ActionStageSerializer, EventUserSerializer, Phase1Serializer, Phase2Serializer, gpSerialiser
from .models import ActionStage, EventUser, Group, Phase1, Phase2
from django.forms.models import model_to_dict
from .phase1  import getGroups
import pandas as pd
from django.conf import settings
# Create your views here.
#
from django.utils.crypto import get_random_string
#
from itertools import chain


class EventUserViewSet(views.APIView):
    def post(self,request):
        allusrs = EventUser.objects.all()
        userlistJSON = allusrs.to_dict()
        return Response({'UserList':userlistJSON},status=status.HTTP_200_OK)
#
class EventUserView(views.APIView):
    
    def post(self,request):
        userData = request.data
        sessionTk =  get_random_string(length=32)
        if EventUser.objects.filter(email=userData['email']).exists():
            user = EventUser.objects.get(email=userData["email"])
            userret = model_to_dict(user)
            return Response({'bootstrapId':userret['auth'],'exists':True}, status=status.HTTP_200_OK)                    
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
            return Response({'bootstrapId':sessionTk,'exists':False}, status=status.HTTP_200_OK)
        else:
            return Response({'bootstrapId':sessionTk}, status=status.HTTP_200_OK)
#
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


#
class EventStatusView(views.APIView):
    def get(self, request):
        countusers = EventUser.objects.all().count()

        return Response({'userstatus':{
                'registeredCount':countusers}}, status=status.HTTP_200_OK)

#
class Phase1View(views.APIView):
    def post(self,request):
        p1response = request.data
        if(Phase1.objects.filter(email=p1response["email"]).exists()):
            return Response({'Response':'Unsuccessful'}, status=status.HTTP_200_OK)
        serializer = Phase1Serializer(data=p1response)
        if serializer.is_valid():
            serializer.save()
            return Response({'Response':'Successful'}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
class AllGroupData(views.APIView):
    def post(self,request):     
        gp = Group.objects.all().order_by('email')
        
        serializer_class = gpSerialiser(gp,many=True)        
        data = serializer_class.data
        usr = EventUser.objects.all()
        for x in range(0,len(data)):
            usr = model_to_dict(EventUser.objects.get(email=data[x]["email"]))
            data[x]["email"] = usr['username']
        newlist = sorted(data, key=lambda d:d['email'])
        '''
        final = list({v['group']:v for v in newlist}.values())
        newlist = sorted(final, key=lambda d:d['group'])
        for a in newlist:
            del a['email']

        '''
        return Response({'GroupList':newlist},status=status.HTTP_200_OK)

class AllGroupDataF(views.APIView):
    def post(self,request):     
        gp = Group.objects.all().order_by('email')
        
        serializer_class = gpSerialiser(gp,many=True)        
        data = serializer_class.data
        usr = EventUser.objects.all()
        for x in range(0,len(data)):
            usr = model_to_dict(EventUser.objects.get(email=data[x]["email"]))
            data[x]["email"] = usr['username']
        newlist = sorted(data, key=lambda d:d['email'])
        
        final = list({v['group']:v for v in newlist}.values())
        newlist = sorted(final, key=lambda d:d['group'])
        for a in newlist:
            del a['email']

        
        return Response({'GroupList':newlist},status=status.HTTP_200_OK)


class AllResult(views.APIView):
    def post(self,request):
        res = Phase2.objects.all().order_by('totalscore')
        serializer_class = Phase2Serializer(res,many=True)                          
        return Response({'ResList':serializer_class.data},status=status.HTTP_200_OK)
#
class GetGroupNumber(views.APIView):
    def post(self,request):
        data = request.data             
        emailID =data["email"]        
        try:
            grouprow = Group.objects.get(email = emailID)
            group = grouprow.group              
            return Response({'groupno':group},status=status.HTTP_200_OK)
        except EventUser.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
#
class CreateGroups(views.APIView):
    def post(self,request):
        allGroups = pd.DataFrame.from_records(list(Phase1.objects.all().values()))
        groups = getGroups(6,allGroups)
        try:
            for index,row in groups.iterrows():
                groupsTable = Group()
                groupsTable.email = row['email']
                groupsTable.group = row['group']
                groupsTable.filter1 = row['filter1']
                groupsTable.filter2 = row['filter2']
                groupsTable.filter3 = row['filter3']
                groupsTable.save()
            settings.GROUPS_CREATED = True
            return Response({'Response':'Successful'}, status=status.HTTP_200_OK)
        except:
            return Response({'Response':'Error'}, status=status.HTTP_400_BAD_REQUEST)
        
            
#
class CheckStageView(views.APIView):
    def post(self,request):
        authdata = request.data
        authtok = authdata["auth"]
        try:
            sessObj = ActionStage.objects.get(auth = authtok)
            stage = sessObj.stage
            return Response({'stage':stage},status=status.HTTP_200_OK)
        except EventUser.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
#
class CreateStageView(views.APIView):
    def post(self,request):
        authdata = request.data
        serializer = ActionStageSerializer(data=authdata)
        if serializer.is_valid():
            serializer.save()
            return Response({'Response':'Successful'}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#
class Phase2View(views.APIView):
    def post(self,request):
        p2result = request.data
        serializer = Phase2Serializer(data=p2result)
        if serializer.is_valid():
            serializer.save()
            return Response({'Response':'Successful'}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
class CheckIfResults(views.APIView):
    def post(self,request):
        p2result = request.data        
        if(Phase2.objects.filter(group=p2result["group"]).exists()):            
            return Response({'Response':'YES'},status=status.HTTP_200_OK)        
        return Response({'Response':'NO'},status=status.HTTP_200_OK)


class GetResultView(views.APIView):
    def post(self,request):
        authdata = request.data
        authtok = authdata["auth"]
        try:
            sessObj = EventUser.objects.get(auth = authtok)            
            email = sessObj.email
            name = sessObj.username
            try:
                group = Group.objects.get(email = email)
                groupDict = model_to_dict(group)
                del groupDict['email']
                del groupDict['group']
                groupID = group.group
                    
                try:
                    p2 = Phase2.objects.get(group=groupID)
                    p2dict = model_to_dict(p2)
                    
                    del p2dict['group']
                    finalOut = {'email':email,'name':name,'group':groupID,'filter':groupDict,'score':p2dict}                    
                    return Response({'result':finalOut},status=status.HTTP_200_OK)
                except Phase2.DoesNotExist:
                    return Response({'msg':'Phase 2 answers Not Found'},status=status.HTTP_401_UNAUTHORIZED)        
            except Group.DoesNotExist:
                return Response({'msg':'Group Not Found'},status=status.HTTP_404_NOT_FOUND)        
        except EventUser.DoesNotExist:
            return Response({'msg':'User Not Found'},status=status.HTTP_400_BAD_REQUEST)

# admin
## --------------------------------------------- ##

class AdminLogin(views.APIView):
    def post(self,request):
        authdata = request.data
        uname = authdata["username"]
        passwd = authdata["password"]
        if(uname == 'cbda' and passwd == 'cbda@123'):
            return Response({'Access':'Access Granted'},status=status.HTTP_200_OK)
        else:
            return Response({'Access':'Access Denied'},status=status.HTTP_403_FORBIDDEN)
#
class DeleteAll(views.APIView):
    def post(self,request):
        authdata = request.data
        
        uname = authdata["username"]
        passwd = authdata["password"]
        
        if(uname == 'cryptoparse' and passwd == 'cbda@123'):
            EventUser.objects.all().delete()
            ActionStage.objects.all().delete()
            Phase1.objects.all().delete()
            Group.objects.all().delete()
            Phase2.objects.all().delete()    
            return Response({'Permission':'Request Granted'},status=status.HTTP_200_OK)
        else:
            return Response({'Permission':'Request Denied'},status=status.HTTP_403_FORBIDDEN)
        
class GetGroupingProgress(views.APIView):
    def post(self,request):
        data = request.data   
        
        if Group.objects.filter(email=data["email"]).exists():
            grouprow = Group.objects.get(email = data["email"])
            group = grouprow.group 
            
            return Response({'groupno':group,'Action':'YES'},status=status.HTTP_200_OK)
        return Response({'Action':'NO'},status=status.HTTP_200_OK)