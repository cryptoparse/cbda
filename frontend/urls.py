
from django.urls import path
#from django.conf.urls import url
from . import views


urlpatterns = [
    path('', views.index ),
    path('studentRegister/', views.index ),
    path('excelAtExcel/', views.index ),
    path('iceBreaker/', views.index ),
    path('adminctrlpanel/', views.index ),
    path('groupReport/',views.index),
    path('waitingForGroup/',views.index),
    path('groupDisplay/',views.index),
    path('resultQR/',views.index),
    path('groupTable/',views.index),
    path('excelAtExcelDisplay/',views.index),
    path('allP2Result/',views.index),
    path('groupSort/',views.index),
]