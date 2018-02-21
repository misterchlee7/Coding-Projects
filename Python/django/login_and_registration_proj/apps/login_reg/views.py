from django.shortcuts import render, redirect, HttpResponse
from models import User
from django.contrib import messages
import bcrypt

def index(request):
    return render(request, "login_reg/index.html")

def process(request):
    errors = User.objects.validate(request.POST)
    if len(errors):
        for error in errors.iteritems():
            messages.error(request, error[1])
        return redirect(index)
    else:
        hashed = bcrypt.hashpw(request.POST["password"].encode(), bcrypt.gensalt())
        user = User.objects.create(first_name=request.POST["first_name"],last_name=request.POST["last_name"],email=request.POST["email"],password=hashed)
        request.session["user_id"] = user.id
        request.session["logged_email"] = user.email
        return redirect(splash)

def login(request):
    login_email = request.POST["email_login"]
    if User.objects.filter(email=login_email):
        if bcrypt.checkpw(request.POST["pw_login"].encode(), User.objects.get(email=login_email).password.encode()):
            request.session["logged_email"] = login_email
            return redirect(splash)
        else:
            return redirect(index)
    else:
        messages.error(request, "Login Email or Password incorrect")
        return redirect(index)
    

def splash(request):
    if not "user_id" in request.session:
        return HttpResponse("You're not logged in!")
    else: 
        context = {
            "user_name" : User.objects.get(email=request.session["logged_email"]).first_name
        }
        return render(request, "login_reg/splash.html", context)