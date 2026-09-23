from rest_framework.routers import DefaultRouter

from .views import (
    ProductViewSet,
    CategoryViewSet,
    BrandViewSet,
    IndustryViewSet,
    BannerViewSet,
    BlogViewSet,
    TestimonialViewSet,
    FAQViewSet,
    CareerViewSet,
    EnquiryViewSet
    
    
)


router = DefaultRouter()

router.register("products", ProductViewSet, basename="product")
router.register("categories", CategoryViewSet, basename="category")
router.register("brands", BrandViewSet, basename="brand")
router.register("industries", IndustryViewSet, basename="industry")
router.register("banners", BannerViewSet, basename="banner")
router.register("blogs", BlogViewSet, basename="blog")
router.register("testimonials", TestimonialViewSet, basename="testimonial")
router.register("faqs", FAQViewSet, basename="faq")
router.register("careers", CareerViewSet, basename="career")
router.register("enquiries", EnquiryViewSet, basename="enquiry")

urlpatterns = router.urls