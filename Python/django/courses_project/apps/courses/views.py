from django.shortcuts import render, redirect, HttpResponse
from models import Course
from django.contrib import messages

def index(request):
    context = {
        "courses" : Course.objects.all()
    }
    return render(request, "courses/index.html", context)

def add(request):
    errors = Course.objects.len_validator(request.POST)
    if len(errors):
        for error in errors.iteritems():
            messages.error(request, error[1])
    else:
        Course.objects.create(course_name = request.POST["name"], desc = request.POST["desc"])
    return redirect(index)

def del_confirm(request, course_id):
    context = {
        "course" : Course.objects.get(id=course_id),
        "id" : course_id,
    }
    return render(request, "courses/del.html", context)

def destroy(request, course_id):
    del_course = Course.objects.filter(id=course_id)
    del_course.delete()
    return redirect(index)
