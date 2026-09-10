from django.contrib import admin

from .models import Product, Category, Brand, Industry


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