# Generated by Django 4.0.6 on 2022-07-25 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_eventuser_auth_delete_usersession'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventuser',
            name='auth',
            field=models.CharField(max_length=32),
        ),
    ]
