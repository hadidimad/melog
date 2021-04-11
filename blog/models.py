from django.db import models
from django.core.validators import MinLengthValidator


class Post(models.Model):
    title = models.CharField(max_length=150)
    excerpt = models.CharField(max_length=200)
    date = models.DateField(auto_now=True)
    author = models.CharField(max_length=200)
    content = models.TextField(validators=[MinLengthValidator(10)])

    def __str__(self):
        return self.title


class Comment(models.Model):
    text = models.TextField(validators=[MinLengthValidator(10)])
    author = models.CharField(max_length=200)
    email = models.EmailField(max_length=254)
    post = models.models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name='comments')
