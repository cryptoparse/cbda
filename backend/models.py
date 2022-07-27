from django.db import models

# Create your models here.
class EventUser(models.Model):
    username = models.CharField(max_length=60)
    email = models.CharField(max_length=60,primary_key=True)
    phone = models.IntegerField()
    auth = models.CharField(max_length=32)
    
    def __str__(self):
        return self.email


class Phase1(models.Model):
    email = models.CharField(max_length=32, primary_key=True)
    q1 = models.CharField(max_length=5)
    q2 = models.CharField(max_length=5)
    q3 = models.CharField(max_length=5)
    q4 = models.CharField(max_length=5)
    q5 = models.CharField(max_length=5)
    q6 = models.CharField(max_length=5)
    q7 = models.CharField(max_length=5)
    q8 = models.CharField(max_length=5)
    q9 = models.CharField(max_length=5)
    q10 = models.CharField(max_length=5)
    q11 = models.CharField(max_length=5)

    def __str__(self):
        return self.email
    
class Group(models.Model):
    email = models.CharField(max_length=32,primary_key=True)
    group = models.CharField(max_length=12)
    filter1 = models.CharField(max_length=32)
    filter2 = models.CharField(max_length=32)
    filter3 = models.CharField(max_length=32)
    
    def __str__(self):
        return self.email

class Phase2(models.Model):
    group = models.CharField(max_length=12)
    totalscore = models.FloatField()
    logicalscore = models.FloatField()
    excelscore = models.FloatField()
    mathscore = models.FloatField()
    analyticalscore = models.FloatField()
    
    def __str__(self):
        return self.group