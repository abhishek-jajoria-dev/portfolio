from django.db import models
from django.core.validators import RegexValidator

# Base Model class
class Model(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True,
         validators=[RegexValidator(r'^[a-zA-Z ]*$')]
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract=True
        ordering = ('-created_at',)

    def __str__(self):
        return self.name
