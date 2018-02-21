from django.shortcuts import render, redirect, HttpResponse
from .models import User

def users(request):
    context = {
        "all_users" : User.objects.all(),
    }
    return render(request, "semirestfulusers/users.html", context)

def new(request):
    return render(request, "semirestfulusers/new.html")

def show(request, user_id):
    context = {
        "user" : User.objects.get(id=user_id),
        "id" : User.objects.get(id=user_id).id,
    }
    return render(request, "semirestfulusers/show.html", context)

def edit(request, user_id):
    context = {
        "user" : User.objects.get(id=user_id),
        "id" : User.objects.get(id=user_id).id,
    }
    return render(request, "semirestfulusers/edit.html", context)

def create(request):
    User.objects.create(first_name = request.POST["first_name"], last_name = request.POST["last_name"], email = request.POST["email"])
    return redirect(users)

def update(request, user_id):
    user = User.objects.get(id=user_id)
    user.first_name = request.POST["first_name"]
    user.last_name = request.POST["last_name"]
    user.email = request.POST["email"]
    user.save()
    return redirect(users)

def destroy(request, user_id):
    User.objects.get(id=user_id).delete()
    return redirect(users)