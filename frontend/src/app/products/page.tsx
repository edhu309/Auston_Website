import type { Metadata } from "next";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import {
  ChevronDown,
  Search,
  SlidersHorizontal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Auston's professional hygiene, cleaning, laundry, janitorial, equipment, hotel amenity and facility-care product portfolio.",
};

const categories = [
  "All Products",
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

const brands = [
  "All Brands",
  "Diversey",
  "TASKI",
  "CREW",
  "CLAX",
  "Schevaran",
  "Cleanfix",
  "Roots",
  "Biotique",
  "Just Herbs",
  "Jade",
];

const industries = [
  "All Industries",
  "Hospitality / HoReCa",
  "Healthcare",
  "Food & Beverages",
  "Facility Management",
  "Institutions",
  "Dairy & Poultry",
  "Life Science",
];

// const products = [
//   {
//     name: "Disinfectant Floor Cleaner",
//     slug: "crew-disinfectant-floor-cleaner",
//     brand: "CREW",
//     category: "Floor Care Chemicals",
//     description:
//       "Professional floor-cleaning and disinfecting solution for demanding hospitality and commercial environments.",
//     featured: true,
//   },
//   {
//     name: "Bathroom Cleaner & Descaler",
//     slug: "crew-bathroom-cleaner",
//     brand: "CREW",
//     category: "Bathroom Care",
//     description:
//       "Professional bathroom cleaning solution designed for routine cleaning and removal of scale and deposits.",
//     featured: true,
//   },
//   {
//     name: "TASKI R1 Super",
//     slug: "taski-r1-super",
//     brand: "TASKI",
//     category: "Housekeeping Solutions",
//     description:
//       "Professional housekeeping cleaning solution from the TASKI product portfolio.",
//     featured: true,
//   },
//   {
//     name: "Clax 100 L Crystal",
//     slug: "clax-100-l-crystal",
//     brand: "CLAX",
//     category: "Laundry Care Products",
//     description:
//       "Professional laundry detergent solution from the CLAX fabric-care portfolio.",
//     featured: true,
//   },
//   {
//   name: "All Kleen",
//   slug: "schevaran-all-kleen",
//   brand: "Schevaran",
//   category: "General Housekeeping",
//   description:
//     "General-purpose cleaning solution from Schevaran's professional housekeeping range.",
//   featured: false,
// },
//  {
//   name: "RA 431",
//   slug: "cleanfix-ra-431",
//   brand: "Cleanfix",
//   category: "Cleaning Machineries",
//   description:
//     "Professional floor-cleaning machinery from the Cleanfix equipment portfolio.",
//   featured: false,
// },
// ] as const;

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#071B35] py-16 text-white sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#F7C600]/[0.08] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#123B63]/70 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#F7C600]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F7C600]">
                Our Products
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Professional products.
              <span className="block text-white/60">
                Complete hygiene solutions.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Explore Auston&apos;s professional portfolio of cleaning
              chemicals, laundry solutions, janitorial tools, machinery,
              hotel amenities and facility-care products.
            </p>
          </div>
        </div>
      </section>

      {/* Product Catalogue */}
      <section
        aria-labelledby="product-catalogue-heading"
        className="py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Search + mobile filter button */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2
                id="product-catalogue-heading"
                className="text-2xl font-black tracking-tight text-[#071B35] sm:text-3xl"
              >
                Product Catalogue
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Browse products by category, brand or industry.
              </p>
            </div>

            <div className="flex w-full gap-3 sm:max-w-xl lg:max-w-md">
              <div className="relative flex-1">
                <Search
                  aria-hidden="true"
                  className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="search"
                  placeholder="Search products..."
                  className="h-12 w-full rounded-full border border-gray-200 bg-white pl-11 pr-5 text-sm text-[#071B35] outline-none transition focus:border-[#F7C600] focus:ring-2 focus:ring-[#F7C600]/10"
                  aria-label="Search products"
                />
              </div>

              <button
                type="button"
                className="flex h-12 shrink-0 items-center gap-2 rounded-full border border-gray-200 px-4 text-sm font-semibold text-[#071B35] transition hover:border-[#F7C600] lg:hidden"
              >
                <SlidersHorizontal
                  aria-hidden="true"
                  className="h-4 w-4"
                />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Filters + Products */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[240px_1fr]">
            {/* Desktop filters */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-3xl border border-gray-200 bg-[#F7F9FC] p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#071B35]">
                    Filters
                  </h3>

                  <button
                    type="button"
                    className="text-xs font-semibold text-gray-400 transition hover:text-[#071B35]"
                  >
                    Clear all
                  </button>
                </div>

                {/* Category */}
                <div className="mt-7">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B2A4A]">
                    Category
                  </p>

                  <div className="mt-4 space-y-2.5">
                    {categories.map((category, index) => (
                      <button
                        key={category}
                        type="button"
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition ${
                          index === 0
                            ? "bg-[#071B35] font-semibold text-white"
                            : "text-gray-600 hover:bg-white hover:text-[#071B35]"
                        }`}
                      >
                        <span>{category}</span>

                        {index === 0 && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#F7C600]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brand */}
                <div className="mt-8 border-t border-gray-200 pt-7">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B2A4A]">
                    Brand
                  </p>

                  <div className="mt-4">
                    <label className="relative block">
                      <span className="sr-only">Select brand</span>

                      <select
                        defaultValue="All Brands"
                        className="h-11 w-full appearance-none rounded-xl border border-gray-200 bg-white px-3 pr-9 text-sm text-gray-600 outline-none focus:border-[#F7C600]"
                      >
                        {brands.map((brand) => (
                          <option key={brand}>{brand}</option>
                        ))}
                      </select>

                      <ChevronDown
                        aria-hidden="true"
                        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                      />
                    </label>
                  </div>
                </div>

                {/* Industry */}
                <div className="mt-8 border-t border-gray-200 pt-7">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B2A4A]">
                    Industry
                  </p>

                  <div className="mt-4 space-y-2">
                    {industries.slice(1).map((industry) => (
                      <label
                        key={industry}
                        className="flex cursor-pointer items-center gap-3 text-sm text-gray-600"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 accent-[#F7C600]"
                        />

                        <span>{industry}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Temporary product area */}
            <div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">
                  Showing{" "}
<span className="font-semibold text-[#071B35]">
  {products.length} products
</span>
                </p>

                <label className="hidden items-center gap-2 sm:flex">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                    Sort
                  </span>

                  <select className="border-0 bg-transparent text-sm font-semibold text-[#071B35] outline-none">
                    <option>Featured</option>
                    <option>Name A–Z</option>
                    <option>Name Z–A</option>
                  </select>
                </label>
              </div>

              {/* Empty catalogue state for now */}
              <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
  {products.map((product) => (
    <ProductCard
      key={product.slug}
      name={product.name}
      slug={product.slug}
      brand={product.brand}
      category={product.category}
      description={product.description}
      featured={product.featured}
    />
  ))}
</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}