from django.urls import re_path
from .views import ContactMixinView

urlpatterns = [
    re_path('', ContactMixinView.as_view()), # this single url can create and show list of contacts
    re_path(r'<pk>/', ContactMixinView.as_view()) # this single url can show details of single contact
]