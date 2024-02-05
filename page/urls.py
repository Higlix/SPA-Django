from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('game/<int:num>', views.game, name="game")
]