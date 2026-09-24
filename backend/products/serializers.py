from rest_framework import serializers
from .models import Product, Category, Brand, Industry, Banner, Blog, Testimonial, FAQ, Career, Enquiry


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = "__all__"


class IndustrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Industry
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(
        source="category.name",
        read_only=True
    )

    brand_name = serializers.CharField(
        source="brand.name",
        read_only=True
    )

    industry_names = serializers.StringRelatedField(
        source="industries",
        many=True,
        read_only=True
    )

    class Meta:
        model = Product
        fields = [
    "id", "name", "slug", "category", "category_name",
    "brand", "brand_name", "industries", "industry_names",
    "short_description", "description",
    "seo_title", "seo_description",
    "image", "featured", "active",
    "created_at", "updated_at",
]
        
        
        
class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = "__all__"
        
class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = "__all__"
        
class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = "__all__"
        
class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = "__all__"
        

class CareerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Career
        fields = "__all__"
        

class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiry
        fields = "__all__"
        read_only_fields = ["created_at"]