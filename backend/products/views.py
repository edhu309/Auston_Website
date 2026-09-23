from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from .models import Product, Category, Brand, Industry, Banner, Blog, Testimonial, FAQ, Career, Enquiry
from .serializers import (
    ProductSerializer,
    CategorySerializer,
    BrandSerializer,
    IndustrySerializer,
    BannerSerializer,
    BlogSerializer,
    TestimonialSerializer,
    FAQSerializer,
    CareerSerializer,
    EnquirySerializer
)
from .permissions import IsAdminUser, IsAdminOrCreateOnly


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
    serializer_class = ProductSerializer
    lookup_field = "slug"

    def get_queryset(self):
        queryset = (
            Product.objects
            .select_related("category", "brand")
            .prefetch_related("industries")
        )

        if self.request.user.is_authenticated and self.request.user.is_staff:
            return queryset

        return queryset.filter(active=True)

class CategoryViewSet(AdminWriteViewSet):
    queryset = Category.objects.filter(active=True)
    serializer_class = CategorySerializer


class BrandViewSet(AdminWriteViewSet):
    queryset = Brand.objects.filter(active=True)
    serializer_class = BrandSerializer


class IndustryViewSet(AdminWriteViewSet):
    queryset = Industry.objects.filter(active=True)
    serializer_class = IndustrySerializer
    
    
    
    
class BannerViewSet(AdminWriteViewSet):
    serializer_class = BannerSerializer

    def get_queryset(self):
        queryset = Banner.objects.all()

        if self.request.user.is_authenticated and self.request.user.is_staff:
            return queryset

        return queryset.filter(active=True)
    
class BlogViewSet(AdminWriteViewSet):
    serializer_class = BlogSerializer

    def get_queryset(self):
        queryset = Blog.objects.all()

        if self.request.user.is_authenticated and self.request.user.is_staff:
            return queryset

        return queryset.filter(active=True)
    
class TestimonialViewSet(AdminWriteViewSet):
    serializer_class = TestimonialSerializer

    def get_queryset(self):
        queryset = Testimonial.objects.all()

        if self.request.user.is_authenticated and self.request.user.is_staff:
            return queryset

        return queryset.filter(active=True)
    
class FAQViewSet(AdminWriteViewSet):
    serializer_class = FAQSerializer

    def get_queryset(self):
        queryset = FAQ.objects.all()

        if self.request.user.is_authenticated and self.request.user.is_staff:
            return queryset

        return queryset.filter(active=True)
    
class CareerViewSet(AdminWriteViewSet):
    serializer_class = CareerSerializer

    def get_queryset(self):
        queryset = Career.objects.all()

        if self.request.user.is_authenticated and self.request.user.is_staff:
            return queryset

        return queryset.filter(active=True)
    
class EnquiryViewSet(viewsets.ModelViewSet):
    queryset = Enquiry.objects.all()
    serializer_class = EnquirySerializer
    permission_classes = [IsAdminOrCreateOnly]