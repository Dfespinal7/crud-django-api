from django.db import models

# Create your models here.
class Producto(models.Model):
    
    nombre=models.CharField(max_length=150)
    descripcion=models.TextField()
    cantidad=models.IntegerField()
    precio=models.DecimalField(max_digits=50,decimal_places=2)