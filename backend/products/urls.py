from rest_framework.routers import DefaultRouter

from .views import (
    ProductViewSet,
    CategoryViewSet,
    BrandViewSet,
    IndustryViewSet,
)


router = DefaultRouter()

router.register("products", ProductViewSet, basename="product")
router.register("categories", CategoryViewSet, basename="category")
router.register("brands", BrandViewSet, basename="brand")
router.register("industries", IndustryViewSet, basename="industry")


urlpatterns = router.urls