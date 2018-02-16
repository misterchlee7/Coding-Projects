from django.shortcuts import render, redirect, HttpResponse

def surveys(request):
    display = "placeholder to display all the surveys created"
    return HttpResponse(display)

def new(request):
    display = "placeholder for users to add a new survey"
    return HttpResponse(display)