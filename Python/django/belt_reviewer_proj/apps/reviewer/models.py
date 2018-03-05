from __future__ import unicode_literals
from django.db import models
import re
import bcrypt

class ReviewMgr(models.Manager):
    def reg_validator(self, postData):
        errors = {}
        if len(postData["name"]) < 3:
            errors["name"] = "Name must be longer than 2 characters"
            if len(postData["name"]) < 1:
                errors["name"] = "You MUST input name"
        if len(postData["alias"]) < 3:
            errors["alias"] = "Alias must be longer than 2 characters"
            if len(postData["alias"]) < 1:
                errors["alias"] = "You MUST input an alias"
        if not re.match(r'[\w\.-]+@[\w\.-]+(\.[\w]+)+',postData["email"]):
            errors["email"] = "Email must be in proper format"
            if len(postData["email"]) < 1:
                errors["alias"] = "You MUST input an email address"
        if len(postData["password"]) < 8:
            errors["password"] = "Password must be longer than 8 characters"
            if len(postData["password"]) < 1:
                errors["password"] = "You MUST input a password"
        if postData["password"] != postData["confirm_pw"]:
            errors["confirm_pw"] = "Your password and confirm password does not match"
        return errors
    
    def log_validator(self, postData):
        errors = {}
        if User.objects.filter(email=postData["email_login"]):
            if not bcrypt.checkpw(postData["pw_login"].encode(), User.objects.get(email=postData["email_login"]).password.encode()):
                errors["pw_login"] = "Login information invalid. Try again"
        if not User.objects.filter(email=postData["email_login"]):
            errors["email_login"] = "Login information invalid. Try again"
        return errors

class User(models.Model):
    name = models.CharField(max_length=255)
    alias = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ReviewMgr()

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Review(models.Model):
    stars = models.IntegerField()
    review = models.TextField()
    book = models.ForeignKey(Book, related_name="reviews")
    reviewer = models.ForeignKey(User, related_name="review_by")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)