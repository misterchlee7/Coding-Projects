from __future__ import unicode_literals
from django.db import models
import bcrypt
import re

class ReviewMgr(models.Manager):
    def reg_validator(self, postData):
        errors = {}
        if len(postData["name"]) < 3:
            errors["name"] = "Name must be at least 3 characters long"
            if len(postData["name"]) < 1:
                errors["name"] = "Name is a REQUIRED field"
        if len(postData["alias"]) < 2:
            errors["alias"] = "Alias must be at least 2 characters long"
            if len(postData["alias"]) < 1:
                errors["alias"] = "Alias is a REQUIRED field"
        if not re.match(r"^[A-Za-z0-9\.\+_-]+@[A-Za-z0-9\._-]+\.[a-zA-Z]*$", postData["email"]):
            errors["email"] = "Email must be in proper format"
            if len(postData["email"]) < 1:
                errors["email"] = "Email is a REQUIRED field"
        if len(postData["password"]) < 8:
            errors["password"] = "Password must be at least 8 characters long"
            if len(postData["password"]) < 1:
                errors["password"] = "Password is a REQUIRED field"
        if postData["password"] != postData["confirm_pw"]:
            errors["confirm_pw"] = "Password and Confirm PW does NOT match"
        return errors
    
    def log_validator(self, postData):
        errors = {}
        if not User.objects.filter(email=postData["log_email"]):
            errors["log_email"] = "Email or PW incorrect. Try again or please register above"
        if User.objects.filter(email=postData["log_email"]):
            if not bcrypt.checkpw(postData["log_pw"].encode(), User.objects.get(email=postData["log_email"]).password.encode()):
                errors["log_pw"] = "Email or PW incorrect. Try again or please register above"
        return errors

    def book_validator(self, postData):
        errors = {}
        if len(postData["book_title"]) < 3:
            errors["book_title"] = "Book title must be at least 2 characters long"
        if len(postData["author"]) < 3:
            errors["author"] = "Author must be at least 2 characters long"
        if len(postData["review"]) < 3:
            errors["review"] = "Review must be at least 2 characters long"
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
    objects = ReviewMgr()

class Review(models.Model):
    review = models.TextField()
    stars = models.IntegerField()
    book = models.ForeignKey(Book,related_name="reviews")
    user = models.ForeignKey(User,related_name="reviewer")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)