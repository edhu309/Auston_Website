from django.contrib import admin

from .models import Product, Category, Brand, Industry, Banner, Blog, Testimonial, FAQ, Career, Enquiry


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "active", "created_at")
    list_filter = ("active",)
    search_fields = ("name",)
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ("name", "active", "created_at")
    list_filter = ("active",)
    search_fields = ("name",)
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Industry)
class IndustryAdmin(admin.ModelAdmin):
    list_display = ("name", "active", "created_at")
    list_filter = ("active",)
    search_fields = ("name",)
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
        "brand",
        "featured",
        "active",
        "created_at",
    )
    list_filter = (
        "category",
        "brand",
        "featured",
        "active",
    )
    search_fields = (
        "name",
        "short_description",
        "description",
    )
    prepopulated_fields = {"slug": ("name",)}
    filter_horizontal = ("industries",)
    
@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "order",
        "active",
        "created_at",
    )
    list_filter = ("active",)
    search_fields = ("title", "subtitle")
    ordering = ("order", "-created_at")


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "slug",
        "author",
        "published_at",
        "active",
    )
    list_filter = ("active",)
    search_fields = ("title", "excerpt", "content", "author")
    prepopulated_fields = {"slug": ("title",)}


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "company",
        "designation",
        "order",
        "active",
    )
    list_filter = ("active",)
    search_fields = ("name", "company", "message")
    ordering = ("order", "-created_at")


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = (
        "question",
        "order",
        "active",
        "created_at",
    )
    list_filter = ("active",)
    search_fields = ("question", "answer")
    ordering = ("order", "-created_at")


@admin.register(Career)
class CareerAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "location",
        "employment_type",
        "published_at",
        "active",
    )
    list_filter = ("active", "employment_type")
    search_fields = ("title", "location", "description", "requirements")
    prepopulated_fields = {"slug": ("title",)}


@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "email",
        "company",
        "subject",
        "created_at",
    )
    search_fields = (
        "name",
        "email",
        "phone",
        "company",
        "subject",
        "message",
    )
    readonly_fields = ("created_at",)