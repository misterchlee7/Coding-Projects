from django.shortcuts import render, redirect, HttpResponse
import datetime

def index(request):
    if not "log" in request.session:
        request.session["log"] = []
    return render(request, "sessionWords/index.html")

def process(request):
    request.session["word_input"] = request.POST["word_input"]
    request.session["time"] = str(datetime.datetime.now())
    
    try:
        request.session["color_choice"] = request.POST["color_choice"]
    except:
        request.session["color_choice"] = "black"
    try:
        request.session["big_font"] = request.POST["big_font"]
    except:
        request.session["big_font"] = "normal"

    old_log = request.session["log"]
    old_log.insert(0, (request.session["color_choice"], request.session["big_font"], request.session["word_input"], request.session["time"]))
    request.session["log"] = old_log

    return redirect(index)

def reset(request):
    for key in request.session.keys():
        del request.session[key]
    return redirect(index)
