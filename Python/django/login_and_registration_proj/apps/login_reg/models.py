from __future__ import unicode_literals
from django.db import models
import re

class Validation(models.Manager):
    def validate(self, postData):
        errors = {}
        if len(postData["first_name"]) < 3:
            errors["first_name"] = "First name MUST be longer than 2 characters"
            if len(postData["first_name"]) < 1:
                errors["first_name"] = "First name is a REQUIRED field"
        if len(postData["last_name"]) < 3:
            errors["last_name"] = "Last name MUST be longer than 2 characters"
            if len(postData["last_name"]) < 1:
                errors["last_name"] = "Last name is a REQUIRED field"
        if not re.match(r'[\w\.-]+@[\w\.-]+(\.[\w]+)+',postData["email"]):
            errors["email"] = "Email MUST be written in proper format (e.g. something@domain.com)"
            if len(postData["email"]) < 1:
                errors["email"] = "Email is a REQUIRED field"
        if len(postData["password"]) < 8:
            errors["password"] = "Password MUST be at least 8 characters long"
            if len(postData["password"]) < 1:
                errors["password"] = "Password is a REQUIRED field"
        if postData["password"] != postData["confirm_pw"]:
            errors["confirm_pw"] = "Confirm Password did NOT match Password" 
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    confirm_pw = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = Validation()
