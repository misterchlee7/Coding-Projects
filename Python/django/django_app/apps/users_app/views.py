from django.shortcuts import render, redirect, HttpResponse

def register(request):
    display = "placeholder for users to create a new user record"
    return HttpResponse(display)

def login(request):
    display = "placeholder for users to login"
    return HttpResponse(display)

def new(request):
    display = "placeholder for users to create a new user record"
    return redirect(register)

def users(request):
    display = "placeholder to later display all the list of users"
    return HttpResponse(display)
