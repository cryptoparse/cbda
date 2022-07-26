# Generated by Django 4.0.6 on 2022-07-25 19:32

from django.utils.crypto import get_random_string
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_remove_eventuser_auth_remove_eventuser_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='eventuser',
            name='auth',
            field=models.CharField(default=get_random_string(32), max_length=32,unique=True),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='UserSession',
        ),
    ]
