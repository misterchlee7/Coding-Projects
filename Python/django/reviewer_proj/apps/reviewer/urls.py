from django.conf.urls import url
from . import views

urlpatterns = [
    # loads signup page
    url(r'^$', views.index),
    # processes new users from signup page
    url(r'^reg_process$', views.reg_process),
    # process existing users from signup page
    url(r'^log_process$', views.log_process),
    # loads home page
    url(r'^books$', views.home),
    # loads add-book page
    url(r'^books/add$', views.add_book),
    # process review from add-book page
    url(r'^rev_process$', views.rev_process),
    # loads add review page
    url(r'^books/(?P<book_id>\d+)$', views.add_review),
    # resets session
    url(r'^logout$', views.logout),
]