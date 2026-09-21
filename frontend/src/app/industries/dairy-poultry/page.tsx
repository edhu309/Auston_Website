import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Factory,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dairy & Poultry Hygiene Solutions",
  description:
    "Professional cleaning, hygiene and facility-care solutions for dairy and poultry environments from Auston.",
  alternates: {
    canonical: "/industries/dairy-poultry",
  },
};

const solutions = [
  {
    icon: Droplets,
    title: "Cleaning & Surface Care",
    description:
      "Professional cleaning solutions supporting routine maintenance of floors, surfaces and operational areas.",
  },
  {
    icon: ShieldCheck,
    title: "Facility Hygiene",
    description:
      "Products supporting consistent cleaning and hygiene routines across demanding dairy and poultry environments.",
  },
  {
    icon: Factory,
    title: "Operational Area Care",
    description:
      "Solutions for maintaining clean and well-managed production, service and facility spaces.",
  },
  {
    icon: Sparkles,
    title: "Janitorial Support",
    description:
      "Professional tools, equipment and cleaning essentials for everyday facility-care operations.",
  },
];

const operationalNeeds = [
  "Production-area cleaning",
  "Floor maintenance",
  "Surface cleaning",
  "Washroom hygiene",
  "Facility maintenance",
  "Janitorial operations",
  "Cleaning equipment",
  "Routine hygiene care",
];

const productAreas = [
  "Floor Care Chemicals",
  "Kitchen Care Chemicals",
  "Janitorial Tools",
  "Cleaning Machineries",
  "Paper Products",
  "Dispensers",
  "Air Fresheners",
  "Chemical Dilution Machines",
];

export default function DairyPoultryPage() {
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
                Dairy & Poultry
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional hygiene solutions for{" "}
              <span className="text-[#F7C600]">
                dairy & poultry environments.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Auston provides professional cleaning, hygiene and facility-care
              solutions to support routine maintenance across dairy, poultry
              and related operational environments.
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
              Dairy & Poultry Hygiene
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
              Supporting clean and well-maintained operational environments.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Dairy and poultry environments involve demanding operational
              spaces that require regular cleaning, maintenance and hygiene
              routines.
            </p>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Auston provides a professional product portfolio supporting
              routine facility cleaning, surface care, floor maintenance and
              janitorial requirements.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#F7F9FC] p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071B35]">
              <Factory
                aria-hidden="true"
                className="h-7 w-7 text-[#F7C600]"
              />
            </div>

            <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#071B35]">
              A practical hygiene portfolio for demanding facilities.
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              From operational areas and floors to washrooms and general
              facility spaces, professional cleaning products can support
              consistent hygiene routines.
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
              Industry Solutions
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
              Supporting everyday dairy and poultry hygiene.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Auston&apos;s professional hygiene portfolio supports different
              cleaning and facility-care requirements across these operational
              environments.
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

      {/* Operational Areas */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                Operational Areas
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
                Solutions aligned with operational requirements.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Different dairy and poultry facilities have different
                workflows and cleaning requirements. Auston supports a broad
                range of routine hygiene needs.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {operationalNeeds.map((need) => (
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

      {/* Product Portfolio */}
      <section className="bg-[#071B35] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7C600]">
                Product Portfolio
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Professional products for dairy and poultry facilities.
              </h2>

              <p className="mt-5 text-base leading-7 text-white/65">
                Explore cleaning chemicals, janitorial tools, machinery,
                dispensers and other professional hygiene categories.
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

      {/* Hygiene Workflow */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
              A Practical Approach
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
              Supporting teams from requirement to solution.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Auston focuses on understanding the operating environment and
              helping customers explore suitable professional hygiene
              products.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                icon: ClipboardCheck,
                title: "Understand",
                description:
                  "Identify the facility areas, workflows and routine cleaning requirements.",
              },
              {
                number: "02",
                icon: Droplets,
                title: "Explore",
                description:
                  "Review suitable cleaning, janitorial and facility-care product categories.",
              },
              {
                number: "03",
                icon: CheckCircle2,
                title: "Connect",
                description:
                  "Discuss your requirements with Auston and identify suitable solutions.",
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="rounded-3xl border border-gray-200 p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-[#F7C600]">
                      {step.number}
                    </span>

                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5 text-[#0B2A4A]"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#071B35]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F7F9FC] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
            Dairy & Poultry
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
            Looking for professional dairy and poultry hygiene solutions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            Explore the Auston product portfolio or contact our team to
            discuss your cleaning and facility-care requirements.
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