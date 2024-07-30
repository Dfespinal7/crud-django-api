from rest_framework import viewsets
from .models import *
from .serializers import ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductSerializer
