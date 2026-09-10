from rest_framework import viewsets

from .models import Product, Category, Brand, Industry
from .serializers import (
    ProductSerializer,
    CategorySerializer,
    BrandSerializer,
    IndustrySerializer,
)


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = (
        Product.objects
        .filter(active=True)
        .select_related("category", "brand")
        .prefetch_related("industries")
    )
    serializer_class = ProductSerializer


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.filter(active=True)
    serializer_class = CategorySerializer


class BrandViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Brand.objects.filter(active=True)
    serializer_class = BrandSerializer


class IndustryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Industry.objects.filter(active=True)
    serializer_class = IndustrySerializer