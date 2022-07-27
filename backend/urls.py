from django.urls import path
from . import views

urlpatterns = [
    path('eventuserview/', views.EventUserViewSet.as_view() ),
    path('eventuser/', views.EventUserView.as_view() ),
    path('eventuserstatus/', views.EventStatusView.as_view() ),
    path('getUserDetails/',views.GetUserDetailsView.as_view())
    # Last
    
]
