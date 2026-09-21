import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";

const brands = [
  {
    name: "Diversey",
    description: "Professional hygiene and cleaning solutions",
  },
  {
    name: "TASKI",
    description: "Cleaning chemicals and professional equipment",
  },
  {
    name: "CREW",
    description: "Professional hospitality cleaning solutions",
  },
  {
    name: "CLAX",
    description: "Professional laundry care solutions",
  },
  {
    name: "Schevaran",
    description: "Professional cleaning and hygiene solutions",
  },
  {
    name: "Cleanfix",
    description: "Professional cleaning machinery and equipment",
  },
  {
    name: "Roots",
    description: "Janitorial tools and cleaning accessories",
  },
  {
    name: "Biotique",
    description: "Hotel and guest-room amenity solutions",
  },
  {
    name: "Just Herbs",
    description: "Premium hotel amenity solutions",
  },
  {
    name: "Jade",
    description: "Tissue and dispensing solutions",
  },
] as const;

export default function TrustedBrands() {
  return (
    <section
      aria-labelledby="trusted-brands-heading"
      className="relative overflow-hidden bg-[#071B35] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#123B63]/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#F7C600]/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-9 bg-[#F7C600]"
            />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F7C600]">
              Trusted Brands
            </span>

            <span
              aria-hidden="true"
              className="h-px w-9 bg-[#F7C600]"
            />
          </div>

          <h2
            id="trusted-brands-heading"
            className="text-3xl font-black tracking-[-0.025em] sm:text-4xl lg:text-5xl"
          >
            Professional solutions from
            <span className="block text-white/65">
              trusted industry brands.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            Auston brings together established brands across hygiene,
            housekeeping, laundry, equipment, amenities and facility care.
          </p>
        </div>

        {/* Brand grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 overflow-hidden rounded-3xl border border-white/[0.1] bg-white/[0.035] sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((brand, index) => (
            <Link
              key={brand.name}
              href={`/brands/${brand.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative flex min-h-36 flex-col items-center justify-center border-white/[0.08] px-5 py-7 text-center transition-all duration-300 hover:bg-white/[0.06] sm:min-h-40 sm:px-6"
            >
              {/* Grid separators */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.08] lg:hidden"
              />

              <span
                aria-hidden="true"
                className="absolute right-0 top-0 hidden h-full w-px bg-white/[0.08] sm:block"
              />

              {/* Temporary logo treatment */}
              <div className="flex h-12 items-center justify-center">
                <span className="text-xl font-black tracking-[-0.04em] text-white/90 transition-colors duration-300 group-hover:text-[#F7C600] sm:text-2xl">
                  {brand.name}
                </span>
              </div>

              <span className="mt-3 max-w-[150px] text-[10px] font-medium leading-4 text-white/35 transition-colors duration-300 group-hover:text-white/50">
                {brand.description}
              </span>

              <ArrowRight
                aria-hidden="true"
                className="mt-4 h-3.5 w-3.5 text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#F7C600]"
              />

              {/* Small index */}
              <span className="absolute right-3 top-3 text-[9px] font-bold tracking-[0.15em] text-white/15">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-white/[0.1] bg-white/[0.035] p-6 sm:flex-row sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F7C600]">
              <BadgeCheck
                aria-hidden="true"
                className="h-5 w-5 text-[#071B35]"
              />
            </div>

            <div>
              <p className="text-sm font-bold text-white">
                Looking for a specific brand?
              </p>

              <p className="mt-1 text-sm text-white/45">
                Explore our complete brand portfolio or contact our team.
              </p>
            </div>
          </div>

          <Link
            href="/brands"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#F7C600] px-6 py-3 text-sm font-bold text-[#071B35] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD83D]"
          >
            <span>View All Brands</span>

            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}