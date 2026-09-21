import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquareQuote,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Testimonials",
  description:
    "Read customer feedback and experiences with Auston's professional hygiene and facility-care solutions.",
  alternates: {
    canonical: "/testimonials",
  },
};

const testimonials = [
  {
    quote:
      "Auston has been a reliable partner for our day-to-day hygiene and facility-care requirements. Their product range makes it easier for our team to manage different cleaning applications.",
    name: "Hospitality Customer",
    role: "Hotel & Hospitality",
  },
  {
    quote:
      "We appreciate the professional approach and the range of products available for our cleaning requirements. The team has been responsive whenever we need support.",
    name: "Facility Management Customer",
    role: "Facility Management",
  },
  {
    quote:
      "Having access to professional cleaning products and equipment from one supplier has made our routine maintenance requirements easier to organise.",
    name: "Commercial Customer",
    role: "Commercial Facility",
  },
  {
    quote:
      "The product range covers several areas of our daily cleaning operations, from floor care to janitorial requirements. It gives our team a practical range of options.",
    name: "Institutional Customer",
    role: "Institution",
  },
  {
    quote:
      "Auston's focus on professional hygiene solutions fits well with the requirements of our operational environment.",
    name: "Food Service Customer",
    role: "Food & Beverage",
  },
  {
    quote:
      "We value having a supplier who understands that different areas of a facility require different cleaning products and tools.",
    name: "Business Customer",
    role: "Commercial Operations",
  },
];

const benefits = [
  "Professional hygiene product portfolio",
  "Solutions across multiple industries",
  "Cleaning chemicals and equipment",
  "Practical facility-care support",
];

export default function TestimonialsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071B35]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#F7C600]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#123B63]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2">
              <MessageSquareQuote
                aria-hidden="true"
                className="h-4 w-4 text-[#F7C600]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7C600]">
                Customer Feedback
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Trusted hygiene solutions for{" "}
              <span className="text-[#F7C600]">
                professional environments.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Discover what customers value about working with Auston for
              professional cleaning, hygiene and facility-care requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
              Our Customers
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
              Built around practical hygiene requirements.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Every organisation has different cleaning workflows and facility
              requirements. Auston focuses on providing professional products
              across a broad range of hygiene and maintenance applications.
            </p>

            <p className="mt-5 text-base leading-7 text-gray-600">
              From hospitality and food service to healthcare, institutions
              and facility management, our portfolio is designed to support
              professional cleaning teams.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#F7F9FC] p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071B35]">
              <MessageSquareQuote
                aria-hidden="true"
                className="h-7 w-7 text-[#F7C600]"
              />
            </div>

            <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#071B35]">
              Professional support for everyday operations.
            </h3>

            <div className="mt-7 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-[#F7C600]"
                  />

                  <span className="text-sm font-medium text-gray-600">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F7F9FC] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
              Customer Experiences
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
              What customers say about Auston.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              A selection of customer feedback highlighting the value of
              professional hygiene products and facility-care support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={`${testimonial.name}-${testimonial.role}`}
                className="group rounded-3xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F7C600] hover:shadow-xl hover:shadow-[#071B35]/[0.06]"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      aria-hidden="true"
                      className="h-4 w-4 fill-[#F7C600] text-[#F7C600]"
                    />
                  ))}
                </div>

                <div className="mt-6">
                  <MessageSquareQuote
                    aria-hidden="true"
                    className="h-7 w-7 text-[#F7C600]"
                  />
                </div>

                <blockquote className="mt-5 text-base leading-7 text-gray-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="mt-7 border-t border-gray-100 pt-5">
                  <p className="text-sm font-bold text-[#071B35]">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-xs font-medium text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                Across Industries
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
                Supporting different professional environments.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Auston&apos;s hygiene portfolio supports cleaning and facility
                requirements across a variety of professional environments.
              </p>

              <Link
                href="/industries/hospitality"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0B2A4A]"
              >
                Explore Industries
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Hospitality / HoReCa",
                "Healthcare",
                "Food & Beverages",
                "Facility Management",
                "Institutions",
                "Dairy & Poultry",
                "Life Science",
              ].map((industry) => (
                <div
                  key={industry}
                  className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#F7C600]" />

                  <span className="text-sm font-semibold text-[#071B35]">
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071B35] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7C600]">
            Work With Auston
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Looking for professional hygiene solutions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65">
            Explore the Auston product portfolio or contact our team to
            discuss your organisation&apos;s cleaning and facility-care
            requirements.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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
              Contact Auston
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}