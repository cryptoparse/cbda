from django.db import models

# Create your models here.
class EventUser(models.Model):
    username = models.CharField(max_length=60)
    email = models.CharField(max_length=60,primary_key=True)
    phone = models.IntegerField()
    auth = models.CharField(max_length=32)
    
    def __str__(self):
        return self.email


