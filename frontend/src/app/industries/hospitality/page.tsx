import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Sparkles,
  Utensils,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hospitality & HoReCa Hygiene Solutions",
  description:
    "Professional hygiene, cleaning, housekeeping, laundry and facility solutions for hotels, restaurants and hospitality environments from Auston.",
  alternates: {
    canonical: "/industries/hospitality",
  },
};

const solutions = [
  {
    icon: Sparkles,
    title: "Housekeeping & Room Care",
    description:
      "Cleaning and room-care solutions supporting consistent housekeeping standards across guest rooms and common areas.",
  },
  {
    icon: Droplets,
    title: "Bathroom & Floor Care",
    description:
      "Professional solutions for maintaining clean, presentable and hygienic floors, bathrooms and high-use surfaces.",
  },
  {
    icon: Utensils,
    title: "Kitchen Hygiene",
    description:
      "Cleaning and hygiene products suited to professional kitchens, food-service areas and back-of-house operations.",
  },
  {
    icon: BedDouble,
    title: "Laundry Care",
    description:
      "Professional laundry-care products supporting hospitality linen and fabric-care requirements.",
  },
];

const productAreas = [
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
];

const hospitalityNeeds = [
  "Guest room cleaning",
  "Bathroom hygiene",
  "Floor maintenance",
  "Kitchen and food-service hygiene",
  "Laundry and linen care",
  "Public-area cleaning",
  "Guest amenities",
  "Facility maintenance",
];

export default function HospitalityPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071B35]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#F7C600]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#123B63]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#F7C600]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7C600]">
                Hospitality & HoReCa
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hygiene solutions for{" "}
              <span className="text-[#F7C600]">
                hospitality environments.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              From guest rooms and bathrooms to kitchens, public areas and
              laundry operations, Auston provides professional hygiene
              solutions for hospitality and HoReCa environments.
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

      {/* Introduction */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
              Hospitality Hygiene
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
              Clean spaces support better guest experiences.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Hospitality environments have diverse cleaning requirements
              across guest rooms, bathrooms, restaurants, kitchens, public
              spaces and back-of-house operations.
            </p>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Auston&apos;s portfolio brings together professional products
              that can support these different hygiene and facility-care
              requirements.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#F7F9FC] p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071B35]">
              <Sparkles
                aria-hidden="true"
                className="h-7 w-7 text-[#F7C600]"
              />
            </div>

            <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#071B35]">
              One hygiene portfolio for multiple hospitality needs.
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              From everyday housekeeping to specialised cleaning requirements,
              solutions can be selected according to the needs of each
              hospitality environment.
            </p>

            <div className="mt-7 h-1.5 w-20 rounded-full bg-[#F7C600]" />
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-[#F7F9FC] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
              Hospitality Solutions
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
              Supporting every area of hospitality hygiene.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Our product portfolio covers key areas involved in maintaining
              clean, hygienic and well-managed hospitality environments.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className="rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#F7C600] hover:shadow-xl hover:shadow-[#071B35]/[0.06]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071B35]">
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6 text-[#F7C600]"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#071B35]">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {solution.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hospitality Needs */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                Operational Areas
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
                Solutions aligned with hospitality operations.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Every hospitality property has different workflows and
                priorities. Auston supports a broad range of routine cleaning
                and hygiene requirements.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {hospitalityNeeds.map((need) => (
                <div
                  key={need}
                  className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-[#F7C600]"
                  />
                  <span className="text-sm font-semibold text-[#071B35]">
                    {need}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Areas */}
      <section className="bg-[#071B35] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7C600]">
                Product Portfolio
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Professional products for hospitality teams.
              </h2>

              <p className="mt-5 text-base leading-7 text-white/65">
                Explore product categories covering housekeeping, floor care,
                kitchen hygiene, laundry, guest amenities and facility
                maintenance.
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
              {productAreas.map((product) => (
                <div
                  key={product}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5"
                >
                  <div className="h-2 w-2 shrink-0 rounded-full bg-[#F7C600]" />
                  <span className="text-sm font-medium text-white/85">
                    {product}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
              Working With Auston
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
              From requirement to hygiene solution.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Tell us about your environment and requirements, and explore
              products suited to your professional hygiene needs.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Understand",
                description:
                  "Identify the environment, cleaning requirements and operational needs.",
              },
              {
                number: "02",
                title: "Explore",
                description:
                  "Review suitable product categories and professional hygiene solutions.",
              },
              {
                number: "03",
                title: "Connect",
                description:
                  "Speak with Auston about your requirements and next steps.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="rounded-3xl border border-gray-200 p-7"
              >
                <span className="text-sm font-black text-[#F7C600]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#071B35]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F7F9FC] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
            Hospitality & HoReCa
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
            Looking for professional hospitality hygiene solutions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            Explore our products or contact Auston to discuss your
            hospitality, housekeeping, laundry or facility-care requirements.
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