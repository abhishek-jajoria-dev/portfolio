from rest_framework import generics, mixins, permissions, authentication
from contact.models import Contact
from .serializers import ContactSerializer
from django.shortcuts import redirect
from django.urls import reverse

class ContactMixinView(
        # mixins.ListModelMixin,
        # mixins.RetrieveModelMixin,    
        mixins.CreateModelMixin,
        generics.GenericAPIView
    ):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'pk'
    
    def get(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        if pk is not None:
            return self.retrieve(request, *args, **kwargs)
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        self.create(request, *args, **kwargs)
        url = reverse("home") + "contact?submit=true"
        return redirect(url)

