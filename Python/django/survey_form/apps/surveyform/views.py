from django.shortcuts import render, redirect, HttpResponse

def index(request):
    return render(request, "surveyform/index.html")

def process(request):
    request.session["name"] = request.POST["name"]
    request.session["location"] = request.POST["location"]
    request.session["language"] = request.POST["language"]
    request.session["comment"] = request.POST["comment"]
    return redirect(result)

def result(request):
    return render(request, "surveyform/result.html")