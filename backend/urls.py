from django.urls import path
from . import views

urlpatterns = [
    #adm
    path('clearFlush/',views.DeleteAll.as_view()), #
    path('adminGetAccess/', views.AdminLogin.as_view() ), #
    path('getallusers/', views.EventUserViewSet.as_view() ),#
    path('getallgroups/',views.AllGroupData.as_view()), #
    path('getallgroupsF/',views.AllGroupDataF.as_view()), #
    path('eventuserstatus/', views.EventStatusView.as_view() ),#
    path('makeGroups/',views.CreateGroups.as_view()), #
    #user
    ### General ###

    path('getUserDetails/',views.GetUserDetailsView.as_view()),#
    path('checkStage/',views.CheckStageView.as_view()),#
    path('setStage/',views.CreateStageView.as_view()),#
    ### Phase 1 ###
    path('eventuser/', views.EventUserView.as_view() ),#
    path('savePhase1/',views.Phase1View.as_view()),#
    path('checkGroupingDone/',views.GetGroupingProgress.as_view()), #

    ### Phase 2 ###    

    path('getGroupNumber/',views.GetGroupNumber.as_view()),  #  
    path('savePhase2Result/',views.Phase2View.as_view()),   #

    #result

    path('getResult/',views.GetResultView.as_view()), #
    path('getAllResult/',views.AllResult.as_view()), #
    path('checkIfResult/',views.CheckIfResults.as_view()),
    

    # Last
    
]
