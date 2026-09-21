import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Brands",
  description:
    "Explore the professional hygiene, cleaning, housekeeping and facility-care brands available through Auston.",
  alternates: {
    canonical: "/brands",
  },
};

const brands = [
  {
    name: "Diversey",
    category: "Professional Hygiene",
    description:
      "Professional cleaning and hygiene solutions for demanding commercial and institutional environments.",
  },
  {
    name: "TASKI",
    category: "Cleaning Solutions",
    description:
      "Professional cleaning solutions and equipment supporting efficient facility-care operations.",
  },
  {
    name: "CREW",
    category: "Cleaning Chemicals",
    description:
      "Professional cleaning solutions designed for routine housekeeping and commercial hygiene requirements.",
  },
  {
    name: "CLAX",
    category: "Laundry Care",
    description:
      "Professional laundry-care solutions for commercial and hospitality laundry environments.",
  },
  {
    name: "Schevaran",
    category: "Cleaning & Hygiene",
    description:
      "Professional cleaning and housekeeping products for commercial and institutional applications.",
  },
  {
    name: "Cleanfix",
    category: "Cleaning Machinery",
    description:
      "Professional cleaning machinery and equipment for floor-care and facility-cleaning applications.",
  },
  {
    name: "Unger",
    category: "Janitorial Tools",
    description:
      "Professional tools supporting efficient window, surface and facility-cleaning operations.",
  },
  {
    name: "Roots",
    category: "Cleaning Solutions",
    description:
      "Professional cleaning and facility-care products supporting commercial hygiene requirements.",
  },
  {
    name: "Biotique",
    category: "Hospitality Amenities",
    description:
      "Personal-care and hospitality-focused products suitable for guest and room-care requirements.",
  },
  {
    name: "Just Herbs",
    category: "Hospitality Amenities",
    description:
      "Personal-care products suited to hospitality and guest amenity requirements.",
  },
  {
    name: "Jade",
    category: "Hospitality Solutions",
    description:
      "Products supporting professional hospitality and guest-care environments.",
  },
];

const categories = [
  "Cleaning Chemicals",
  "Laundry Care",
  "Cleaning Machinery",
  "Janitorial Tools",
  "Hospitality Amenities",
];

export default function BrandsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071B35]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F7C600]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#123B63]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#F7C600]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7C600]">
                Our Brands
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Trusted brands for{" "}
              <span className="text-[#F7C600]">professional hygiene.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Auston brings together a portfolio of professional brands
              covering cleaning chemicals, laundry care, machinery, janitorial
              tools and hospitality essentials.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7C600] px-6 py-3.5 text-sm font-bold text-[#071B35] transition hover:bg-[#FFD83D]"
              >
                Explore Products
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                Professional Portfolio
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
                The right brands for demanding environments.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Our brand portfolio is selected around the practical needs of
                professional cleaning, hygiene, housekeeping and facility-care
                operations.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#F7F9FC] p-8 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071B35]">
                <Sparkles
                  aria-hidden="true"
                  className="h-7 w-7 text-[#F7C600]"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#071B35]">
                One portfolio. Multiple hygiene requirements.
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                From housekeeping and laundry to floor care, cleaning
                machinery and hospitality amenities, Auston helps businesses
                access products suited to their operational requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Categories */}
      <section className="bg-[#F7F9FC] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
              Portfolio Areas
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
              Brands across key hygiene categories.
            </h2>
          </div>

          <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <div
                key={category}
                className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-[#0B2A4A] shadow-sm"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
              Featured Brands
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
              Brands available through Auston.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Explore the professional brands represented across our current
              product portfolio.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <article
                key={brand.name}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#F7C600] hover:shadow-xl hover:shadow-[#071B35]/[0.06]"
              >
                {/* Temporary brand mark */}
                <div className="flex h-24 items-center justify-center rounded-2xl bg-[#F7F9FC] px-6">
                  <span className="text-2xl font-black tracking-tight text-[#071B35] transition-colors duration-300 group-hover:text-[#123B63]">
                    {brand.name}
                  </span>
                </div>

                <div className="mt-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F59E0B]">
                    {brand.category}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-[#071B35]">
                    {brand.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {brand.description}
                  </p>

                  <Link
                    href={`/products?brand=${encodeURIComponent(brand.name)}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0B2A4A] transition hover:text-[#F59E0B]"
                  >
                    View products
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Logos Placeholder */}
      <section className="bg-[#071B35] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7C600]">
              Brand Partners
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Professional brands. Reliable solutions.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/60">
              Original brand logos and detailed brand information can be added
              once the final approved assets are supplied by the client.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {brands.slice(0, 10).map((brand) => (
              <div
                key={brand.name}
                className="flex min-h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-center"
              >
                <span className="text-sm font-bold text-white/80">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Portfolio */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                Why Our Portfolio Matters
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
                Solutions designed around real operating environments.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Professional hygiene is not one-size-fits-all. Different
                industries and facilities require different products,
                processes and equipment.
              </p>

              <Link
                href="/about-us"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#0B2A4A] transition hover:text-[#F59E0B]"
              >
                Learn more about Auston
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Professional cleaning",
                "Hospitality & housekeeping",
                "Commercial facilities",
                "Laundry operations",
                "Food service environments",
                "Institutional hygiene",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-gray-200 p-5"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-[#F7C600]"
                  />
                  <span className="text-sm font-semibold text-[#071B35]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F7F9FC] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
            Need a Product?
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
            Find the right solution for your business.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            Explore the Auston product portfolio or speak with our team about
            your specific hygiene requirements.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#071B35] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0B2A4A]"
            >
              Explore Products
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>

            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-bold text-[#071B35] transition hover:border-[#F7C600]"
            >
              Contact Auston
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}