from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index), # Loads welcome page
    url(r'^reset$', views.reset), # Reset sessions
    url(r'^books$', views.books), # Loads books home
    url(r'^books/(?P<book_id>\d+)$', views.book_reviews), # Loads add a review page
    url(r'^books/add$', views.add_book), # Loads add books page
    url(r'^reg_user$', views.reg_user), # Registers new user
    url(r'^log_user$', views.log_user), # Registers existing user
    url(r'^add_review$', views.add_review), # Registers new review
    url(r'^users/(?P<user_id>\d+)$', views.user), # Load user page
]