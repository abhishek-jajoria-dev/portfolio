from django.contrib import admin
from contact.models import Contact

class ContactAdmin(admin.ModelAdmin):
    list_display  = ('id','name','phone','email','created_at')

admin.site.register(Contact, ContactAdmin)
