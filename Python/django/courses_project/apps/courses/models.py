from __future__ import unicode_literals

from django.db import models

class Validator(models.Manager):
    def len_validator(self, postData):
        errors = {}
        if len(postData["name"]) < 6:
            errors["name"] = "Course title should be longer than 5 characters"
        if len(postData["desc"]) < 16:
            errors["desc"] = "Description should be longer than 15 characters"
        return errors

class Course(models.Model):
    course_name = models.CharField(max_length=255)
    desc = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)
    objects = Validator()
