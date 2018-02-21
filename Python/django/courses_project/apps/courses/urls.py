from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^add$', views.add),
    url(r'^delete/(?P<course_id>\d+)$', views.del_confirm),
    url(r'^destroy/(?P<course_id>\d+)$', views.destroy),
]