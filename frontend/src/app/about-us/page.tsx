import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Droplets,
  Leaf,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Auston and our approach to delivering professional hygiene, cleaning and facility solutions for hospitality, healthcare, food and beverage, commercial and institutional environments.",
  alternates: {
    canonical: "/about-us",
  },
};

const industries = [
  "Hospitality & HoReCa",
  "Healthcare",
  "Food & Beverages",
  "Facility Management",
  "Institutions",
  "Dairy & Poultry",
  "Life Science",
];

const capabilities = [
  {
    icon: Droplets,
    title: "Professional Hygiene Solutions",
    description:
      "Auston brings together professional cleaning and hygiene solutions designed for demanding commercial and institutional environments.",
  },
  {
    icon: Building2,
    title: "Industry-Focused Approach",
    description:
      "Our solutions are aligned with the practical requirements of hospitality, healthcare, food service, facility management and other professional environments.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Product Portfolio",
    description:
      "From cleaning chemicals and laundry care to janitorial tools, machinery, dispensers and hospitality essentials, Auston supports complete hygiene operations.",
  },
  {
    icon: Users,
    title: "Customer-Centred Service",
    description:
      "We focus on understanding operational requirements and helping customers identify suitable products and hygiene solutions for their environments.",
  },
];

const solutionAreas = [
  "Floor Care Chemicals",
  "Kitchen Care Chemicals",
  "Laundry Care Products",
  "Janitorial Tools",
  "Cleaning Machineries",
  "Hotel Amenities",
  "Paper Products",
  "Dispensers",
  "Air Fresheners",
  "Room Essentials",
  "Chemical Dilution Machines",
];

export default function AboutUsPage() {
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
                About Auston
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional hygiene solutions for{" "}
              <span className="text-[#F7C600]">better environments.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Auston delivers professional hygiene, cleaning and facility
              solutions for businesses and institutions where cleanliness,
              efficiency and dependable service matter.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7C600] px-6 py-3.5 text-sm font-bold text-[#071B35] transition hover:bg-[#FFD83D]"
              >
                Explore Our Solutions
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Talk to Auston
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
              Who We Are
            </span>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
              More than products. A complete approach to hygiene.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-7 text-gray-600">
              <p>
                Auston is focused on providing professional hygiene and
                cleaning solutions for a wide range of commercial,
                institutional and specialised environments.
              </p>

              <p>
                Our portfolio brings together cleaning chemicals, laundry
                solutions, janitorial tools, cleaning machinery, hotel
                amenities, paper products, dispensers and other hygiene
                essentials.
              </p>

              <p>
                By bringing products and professional hygiene requirements
                together, Auston aims to make it easier for businesses to
                maintain clean, efficient and well-managed environments.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] bg-[#F5F7FA] p-8 sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071B35]">
                <Sparkles
                  aria-hidden="true"
                  className="h-8 w-8 text-[#F7C600]"
                />
              </div>

              <h3 className="mt-7 text-2xl font-bold tracking-tight text-[#071B35]">
                We Deliver Hygiene
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Our approach combines professional products, industry
                understanding and customer-focused service to support hygiene
                operations across different sectors.
              </p>

              <div className="mt-7 h-1.5 w-20 rounded-full bg-[#F7C600]" />
            </div>

            <div className="absolute -bottom-5 -right-3 hidden h-24 w-24 rounded-2xl border border-[#F7C600]/30 bg-[#F7C600]/10 lg:block" />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-[#F7F9FC] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
              What We Do
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
              Built around professional hygiene requirements.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Auston supports organisations with products and solutions
              covering everyday cleaning, hygiene, housekeeping, laundry and
              facility-care requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#F7C600] hover:shadow-xl hover:shadow-[#071B35]/[0.06]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071B35]">
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6 text-[#F7C600]"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#071B35]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                Industries We Serve
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
                Hygiene solutions across multiple industries.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Different environments require different hygiene practices.
                Auston&apos;s product portfolio is positioned to support a
                variety of professional sectors.
              </p>

              <Link
                href="/contact-us"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#0B2A4A] transition hover:text-[#F59E0B]"
              >
                Discuss your requirements
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-[#F7C600]"
                  />
                  <span className="text-sm font-semibold text-[#071B35]">
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="bg-[#071B35] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7C600]">
                Our Portfolio
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Complete hygiene essentials under one roof.
              </h2>

              <p className="mt-5 text-base leading-7 text-white/65">
                From daily cleaning requirements to specialised facility-care
                needs, our portfolio covers a broad range of professional
                hygiene products.
              </p>

              <Link
                href="/products"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#F7C600] px-5 py-3 text-sm font-bold text-[#071B35] transition hover:bg-[#FFD83D]"
              >
                View Product Catalogue
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {solutionAreas.map((solution) => (
                <div
                  key={solution}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5"
                >
                  <div className="h-2 w-2 shrink-0 rounded-full bg-[#F7C600]" />
                  <span className="text-sm font-medium text-white/85">
                    {solution}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-[#F7F9FC]">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
              <div className="flex min-h-[300px] items-center justify-center bg-[#0B2A4A] p-10">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#F7C600]/30 bg-[#F7C600]/10">
                  <Leaf
                    aria-hidden="true"
                    className="h-14 w-14 text-[#F7C600]"
                  />
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-14">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                  Responsible Hygiene
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
                  Cleaner environments. More responsible choices.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
                  Auston recognises the importance of responsible hygiene
                  practices and supports the use of sustainable and
                  material-friendly alternatives where appropriate.
                </p>

                <div className="mt-7 flex items-start gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#F7C600]"
                  />
                  <p className="text-sm leading-6 text-gray-600">
                    Solutions can be selected according to operational,
                    performance and sustainability requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F7F9FC] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
            Let&apos;s Work Together
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl lg:text-5xl">
            Looking for the right hygiene solution?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            Tell us about your requirements and explore professional products
            suited to your environment.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#071B35] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0B2A4A]"
            >
              Request a Quote
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-bold text-[#071B35] transition hover:border-[#F7C600]"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}