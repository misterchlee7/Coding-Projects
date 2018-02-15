from django.shortcuts import render, HttpResponse, redirect, HttpResponseRedirect
from django.utils.crypto import get_random_string

def index(request):
    if not "counter" in request.session:
        request.session["counter"] = 0
    return render(request, "randomWordGen/index.html")

def random_word(request):
    random_string = {
        "random_str" : get_random_string(length=14)
    }
    request.session["counter"] += 1
    return render(request, "randomWordGen/index.html", random_string)

def reset(request):
    for key in request.session.keys():
        del request.session[key]
    return redirect(index)