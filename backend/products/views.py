from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from .models import Product, Category, Brand, Industry
from .serializers import (
    ProductSerializer,
    CategorySerializer,
    BrandSerializer,
    IndustrySerializer,
)
from .permissions import IsAdminUser


class AdminWriteViewSet(viewsets.ModelViewSet):
    """
    Public users can read.
    Staff/admin users can create, update, and delete.
    """

    def get_permissions(self):
        if self.action in [
            "create",
            "update",
            "partial_update",
            "destroy",
        ]:
            return [IsAdminUser()]

        return [AllowAny()]


class ProductViewSet(AdminWriteViewSet):
    queryset = (
        Product.objects
        .filter(active=True)
        .select_related("category", "brand")
        .prefetch_related("industries")
    )
    serializer_class = ProductSerializer


class CategoryViewSet(AdminWriteViewSet):
    queryset = Category.objects.filter(active=True)
    serializer_class = CategorySerializer


class BrandViewSet(AdminWriteViewSet):
    queryset = Brand.objects.filter(active=True)
    serializer_class = BrandSerializer


class IndustryViewSet(AdminWriteViewSet):
    queryset = Industry.objects.filter(active=True)
    serializer_class = IndustrySerializer