import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import WhyChooseAuston from "@/components/home/WhyChooseAuston";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TrustedBrands from "@/components/home/TrustedBrands";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Professional Hygiene & Cleaning Solutions",
  description:
    "Auston delivers professional hygiene, cleaning and facility solutions for hospitality, healthcare, food & beverage, commercial and institutional environments.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Industries />
      <WhyChooseAuston />
      <FeaturedProducts />
      <TrustedBrands />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}