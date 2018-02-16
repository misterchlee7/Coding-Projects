from django.shortcuts import render, redirect, HttpResponse
import random
import datetime

def index(request):
    if not "gold_total" in request.session:
        request.session["gold_total"] = 0
        request.session["log"] = []
    return render(request, "ninjagold/index.html")

def process_money(request, location):
    if location == "farm":
        gold = random.randint(10,20)
    if location == "cave":
        gold = random.randint(5,10)
    if location == "house":
        gold = random.randint(2,5)
    if location == "casino":
        gold = random.randint(-50,50)
    request.session["gold_total"] += gold
    old_log = request.session["log"]
    timestamp = datetime.datetime.now()
    if gold >= 0:
        old_log.insert(0,("green", "Earned {} golds from the {}! ({})".format(gold, location, timestamp)))
    if gold < 0:
        old_log.insert(0,("red", "Entered a {} and lost {} golds...Ouch. ({})".format(location, gold, timestamp)))
    request.session["log"] = old_log
    return redirect(index)

def reset(request):
    for key in request.session.keys():
        del request.session[key]
    return redirect(index)
