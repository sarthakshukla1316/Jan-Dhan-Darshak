# Generated by Django 3.2.14 on 2022-08-25 05:31

from django.db import migrations, models
import jan_dhan_darshak.users.models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20220813_1535'),
    ]

    operations = [
        migrations.CreateModel(
            name='VoiceToText',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('voice', models.FileField(blank=True, upload_to=jan_dhan_darshak.users.models.voice_directory_path)),
            ],
        ),
    ]