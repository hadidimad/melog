from django.urls import path
from .views import post_list, post_details, comment_details

urlpatterns = [
    path('post', post_list),
    path('post/<int:pk>', post_details),
    path('comment/<int:pk>', comment_details)
]
