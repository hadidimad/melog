from django.contrib import admin
from .models import Post, Comment


class PostAdmin(admin.ModelAdmin):
    list_filter = ("author", "date")
    list_display = ("title", "author", "date")


class CommentAdmin(admin.ModelAdmin):
    list_display = ("author", "email", "date_time")
    list_filter = ("date_time", "author")


admin.site.register(Post, PostAdmin)
admin.site.register(Comment, CommentAdmin)
