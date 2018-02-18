from django.shortcuts import render, redirect, HttpResponse

def index(request):
    print "hello"
    return redirect(index)

