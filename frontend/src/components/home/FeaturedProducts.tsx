import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  Sparkles,
  WashingMachine,
  SprayCan,
  Gauge,
  Package,
} from "lucide-react";

const featuredProducts = [
  {
    name: "Disinfectant Floor Cleaner",
    brand: "CREW",
    category: "Floor Care Chemicals",
    description:
      "Professional floor-cleaning and disinfecting solution designed for demanding hospitality environments.",
    icon: Droplets,
    accent: "yellow",
  },
  {
    name: "Bathroom Cleaner & Descaler",
    brand: "CREW",
    category: "Bathroom Care",
    description:
      "Professional bathroom cleaning solution designed to help remove scale, deposits and unpleasant odours.",
    icon: Sparkles,
    accent: "blue",
  },
  {
    name: "TASKI R1 Super",
    brand: "TASKI",
    category: "Housekeeping Solutions",
    description:
      "Professional housekeeping chemical from the TASKI range for routine cleaning applications.",
    icon: SprayCan,
    accent: "yellow",
  },
  {
    name: "Clax 100 L Crystal",
    brand: "CLAX",
    category: "Laundry Care",
    description:
      "Professional laundry detergent solution from the CLAX fabric-care portfolio.",
    icon: WashingMachine,
    accent: "blue",
  },
  {
    name: "All Kleen",
    brand: "Schevaran",
    category: "General Housekeeping",
    description:
      "General-purpose cleaning solution from Schevaran's professional housekeeping range.",
    icon: Package,
    accent: "orange",
  },
  {
    name: "RA 431",
    brand: "Cleanfix",
    category: "Cleaning Machinery",
    description:
      "Professional floor-cleaning machinery from the Cleanfix equipment portfolio.",
    icon: Gauge,
    accent: "blue",
  },
] as const;

function ProductVisual({
  brand,
  icon: Icon,
  accent,
}: {
  brand: string;
  icon: typeof Droplets;
  accent: "yellow" | "blue" | "orange";
}) {
  const accentClasses = {
    yellow: {
      glow: "bg-[#F7C600]/20",
      icon: "bg-[#F7C600] text-[#071B35]",
      line: "bg-[#F7C600]",
    },
    blue: {
      glow: "bg-[#123B63]/30",
      icon: "bg-[#123B63] text-white",
      line: "bg-[#F7C600]",
    },
    orange: {
      glow: "bg-[#F59E0B]/20",
      icon: "bg-[#F59E0B] text-[#071B35]",
      line: "bg-[#F59E0B]",
    },
  };

  const styles = accentClasses[accent];

  return (
    <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#F4F7FA]">
      <div
        aria-hidden="true"
        className={`absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl ${styles.glow}`}
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-[#071B35]/[0.04] blur-3xl"
      />

      {/* Temporary product presentation */}
      <div className="relative flex flex-col items-center">
        <div
          className={`flex h-20 w-20 items-center justify-center rounded-[1.5rem] shadow-lg ${styles.icon}`}
        >
          <Icon aria-hidden="true" className="h-9 w-9" />
        </div>

        <span className="mt-4 text-[10px] font-black uppercase tracking-[0.25em] text-[#071B35]/30">
          {brand}
        </span>

        <span
          aria-hidden="true"
          className={`mt-2 h-1 w-8 rounded-full ${styles.line}`}
        />
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section
      aria-labelledby="featured-products-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#F7C600]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0B2A4A]">
                Featured Products
              </span>
            </div>

            <h2
              id="featured-products-heading"
              className="text-3xl font-black tracking-[-0.025em] text-[#071B35] sm:text-4xl lg:text-5xl"
            >
              Professional products.
              <span className="block text-[#123B63]">
                Trusted brands.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Explore selected products from Auston's professional hygiene,
              cleaning, laundry and equipment portfolio.
            </p>
          </div>

          <Link
            href="/products"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#0B2A4A] transition-colors hover:text-[#071B35]"
          >
            <span>View all products</span>

            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Product grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => {
            const Icon = product.icon;

            return (
              <Link
                key={product.name}
                href="/products"
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F7C600] hover:shadow-2xl hover:shadow-[#071B35]/[0.07]"
              >
                <ProductVisual
                  brand={product.brand}
                  icon={Icon}
                  accent={product.accent}
                />

                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-[#071B35]/[0.05] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0B2A4A]">
                      {product.brand}
                    </span>

                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#F7C600]"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-bold tracking-tight text-[#071B35]">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#123B63]/60">
                    {product.category}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-gray-500">
                    {product.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#0B2A4A]">
                    <span>View product</span>

                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}