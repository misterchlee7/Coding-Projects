from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime
import datetime

# Create your views here.
def index(request):
    time = {
        "time_now": datetime.datetime.now()
    }
    return render(request, 'timedisplay/index.html', time)