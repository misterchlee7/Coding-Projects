from django.shortcuts import render, redirect, HttpResponse
from models import User, Book, Review
from django.contrib import messages
import bcrypt

def index(request):
    request.session["logged"] = False
    return render(request, "reviewer/index.html")

def reg_process(request):
    errors = User.objects.reg_validator(request.POST)
    if len(errors):
        for key, error in errors.iteritems():
            messages.error(request, error)
        return redirect(index)
    else:
        hashed = bcrypt.hashpw(request.POST["password"].encode(), bcrypt.gensalt())

        user = User.objects.create(name=request.POST["name"], alias=request.POST["alias"],email=request.POST["email"],password=hashed)

        request.session["user_id"] = user.id
        request.session["logged"] = True
        return redirect(home)

def log_process(request):
    errors = User.objects.log_validator(request.POST)
    if len(errors):
        for key, error in errors.iteritems():
            messages.error(request, error)
        return redirect(index)
    else:
        request.session["user_id"] = User.objects.get(email=request.POST["log_email"]).id
        request.session["logged"] = True
        return redirect(home)

def home(request):
    if request.session["logged"] == False:
        return HttpResponse("You must be logged in to enter")
    else:
        context = {
            "alias" : User.objects.get(id=request.session["user_id"]).name,
            "reviews" : Review.objects.all()[:3],
        }
        return render(request, "reviewer/books.html", context)

def add_book(request):
    if request.session["logged"] == False:
        return HttpResponse("You must be logged in to enter")
    return render(request, "reviewer/add.html")

def rev_process(request):
    errors = Book.objects.book_validator(request.POST)
    if len(errors):
        for key, error in errors.iteritems():
            messages.error(request, error)
        return redirect(add_book)
    else:
        book = Book.objects.create(title=request.POST["book_title"],author=request.POST["author"])

        review = Review.objects.create(review=request.POST["review"], stars=request.POST["stars"],book=book,user=User.objects.get(id=request.session["user_id"]))

        request.session["book_id"] = book.id
        return redirect(add_review, request.session["book_id"])

def add_review(request, book_id):
    if request.session["logged"] == False:
        return HttpResponse("You must be logged in to enter")
    context = {
        "reviews" : Review.objects.order_by("-created_at").all()[:3],
        "books" : Book.objects.get(id=book_id),
        "logged_id" : request.session["user_id"],
    }
    return render(request, "reviewer/review.html", context)

def logout(request):
    for key in request.session.keys():
        del request.session[key]
    return redirect(index)