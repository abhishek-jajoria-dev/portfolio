from django.db import models
from portfolio.models import Model
from django.core.validators import RegexValidator

# Contact Model
class Contact(Model):
    email = models.EmailField(max_length=100, blank=False, null=False)
    phone = models.CharField(
            null=False, 
            validators=[RegexValidator(r'^\+?1?\d{10,10}$')],
            max_length = 10
        )
    message = models.TextField(null=False, blank=False)

    class Meta(Model.Meta):
        pass
