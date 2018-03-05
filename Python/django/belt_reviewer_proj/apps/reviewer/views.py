from django.shortcuts import render, redirect, HttpResponse
from models import User, Book, Review
from django.contrib import messages
from django.db.models import Count
import bcrypt

# load signup page
def index(request):
    # if not "logged_in" in request.session:
    #     request.session["logged_in"] = True
    return render(request, "reviewer/index.html")

# load home page
def books(request):
    context = {
        "alias" : User.objects.get(id=request.session["user_id"]).alias,
        "books" : Book.objects.order_by("-created_at").all()[:3],
        "reviews" : Review.objects.order_by("-created_at").all()[:3],
        "all_books" : Book.objects.order_by("-created_at").all(),
    }
    return render(request, "reviewer/books.html", context)

# load add_book page
def book_reviews(request, book_id):
    sum = ""
    for i in range(0, Review.objects.get(book__id=book_id).stars):
        sum += "*"
    context = {
        "book" : Book.objects.get(id=book_id),
        "stars" : sum,
        "reviews" : Review.objects.order_by("-created_at").all()[:3],
    }
    return render(request, "reviewer/review.html", context)

# load add_book page
def add_book(request):
    return render(request, "reviewer/add.html")

# process new user
def reg_user(request):
    err = User.objects.reg_validator(request.POST)
    if len(err):
        for key, error in err.iteritems():
            messages.error(request, error)
        return redirect(index)
    else:
        hashed = bcrypt.hashpw(request.POST["password"].encode(), bcrypt.gensalt())

        user = User.objects.create(name=request.POST["name"], alias=request.POST["alias"], email=request.POST["email"], password=hashed)

        request.session["user_id"] = user.id

        if not "logged_in" in request.session:
            request.session["logged_in"] = True
        return redirect(books)

# process user login
def log_user(request):
    err = User.objects.log_validator(request.POST)
    if len(err):
        for key, error in err.iteritems():
            messages.error(request, error)
        return redirect(index)
    else:
        request.session["user_id"] = User.objects.get(email=request.POST["email_login"]).id

        if not "logged_in" in request.session:
            request.session["logged_in"] = True
        return redirect(books)

# process add review
def add_review(request):
    book = Book.objects.create(title=request.POST["title"], author=request.POST["author_list"])

    review = Review.objects.create(review=request.POST["review"], stars=request.POST["rating"], book=book, reviewer=User.objects.get(id=request.session["user_id"]))

    request.session["book_id"] = book.id

    return redirect(book_reviews, request.session["book_id"])

# load user page
def user(request, user_id):
    context = {
        "user" : User.objects.get(id=user_id),
        "rev_count" : Review.objects.values("reviewer_id").filter(reviewer__id=user_id).annotate(review_count=Count("reviewer_id")).values_list("review_count",flat=True)[0],
        "also_reviewed" : Review.objects.filter(reviewer__id=user_id),
    }
    return render(request, "reviewer/user.html", context)

# reset sessions
def reset(request):
    for key in request.session.keys():
        del request.session[key]
    return redirect(index)