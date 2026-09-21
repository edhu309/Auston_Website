import type { Metadata } from "next";
import { getProductBySlug, products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Package,
} from "lucide-react";

type ProductPageProps = Readonly<{
  params: Promise<{
    slug: string;
  }>;
}>;

type CategoryInfo = {
  slug: string;
  name: string;
  description: string;
};

const categories: CategoryInfo[] = [
  {
    slug: "floor-care-chemicals",
    name: "Floor Care Chemicals",
    description:
      "Professional floor cleaning and maintenance solutions for commercial, hospitality, institutional and other professional environments.",
  },
  {
    slug: "kitchen-care-chemicals",
    name: "Kitchen Care Chemicals",
    description:
      "Professional cleaning solutions designed to support routine hygiene and maintenance requirements in kitchen and food-service environments.",
  },
  {
    slug: "laundry-care-products",
    name: "Laundry Care Products",
    description:
      "Professional laundry care solutions supporting the cleaning and maintenance requirements of hospitality, commercial and institutional laundry operations.",
  },
  {
    slug: "janitorial-tools",
    name: "Janitorial Tools",
    description:
      "Professional cleaning tools and accessories supporting everyday janitorial and facility-care operations.",
  },
  {
    slug: "cleaning-machineries",
    name: "Cleaning Machineries",
    description:
      "Professional cleaning equipment and machinery supporting efficient floor and facility maintenance.",
  },
  {
    slug: "hotel-amenities",
    name: "Hotel Amenities",
    description:
      "Professional hospitality amenities supporting guest-room and hotel operations.",
  },
  {
    slug: "paper-products",
    name: "Paper Products",
    description:
      "Professional paper hygiene products supporting washroom, hospitality, commercial and institutional environments.",
  },
  {
    slug: "dispensers",
    name: "Dispensers",
    description:
      "Professional dispensing solutions supporting organised hygiene and washroom operations.",
  },
  {
    slug: "air-fresheners",
    name: "Air Fresheners",
    description:
      "Air-care solutions supporting fresh and pleasant professional environments.",
  },
  {
    slug: "room-essentials",
    name: "Room Essentials",
    description:
      "Essential products supporting housekeeping, room care and professional hospitality environments.",
  },
  {
    slug: "chemical-dilution-machines",
    name: "Chemical Dilution Machines",
    description:
      "Professional dilution equipment designed to support organised and consistent chemical dispensing workflows.",
  },
];

function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

function getCategoryProducts(categoryName: string) {
  return products.filter((product) => product.category === categoryName);
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  const category = getCategoryBySlug(slug);

  if (category) {
    return {
      title: `${category.name} | Auston`,
      description: category.description,
      alternates: {
        canonical: `/products/${category.slug}`,
      },
    };
  }

  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Auston",
      description: "The requested Auston product could not be found.",
    };
  }

  return {
    title: `${product.name} | Auston`,
    description: `${product.name} by ${product.brand}. ${product.description}`,
    alternates: {
      canonical: `/products/${slug}`,
    },
  };
}

function ProductCategoryPage({
  category,
}: {
  category: CategoryInfo;
}) {
  const categoryProducts = getCategoryProducts(category.name);

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-[#F7F9FC]">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium text-gray-400"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#071B35]"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/products"
              className="transition-colors hover:text-[#071B35]"
            >
              Products
            </Link>

            <span>/</span>

            <span className="truncate text-[#071B35]">
              {category.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Category Hero */}
      <section className="relative overflow-hidden bg-[#071B35]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#F7C600]/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#123B63]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-[#F7C600]"
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            />

            <span>Back to products</span>
          </Link>

          <div className="mt-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#F7C600]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7C600]">
                Product Category
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {category.name}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              {category.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7C600] px-6 py-3.5 text-sm font-bold text-[#071B35] transition hover:bg-[#FFD83D]"
              >
                Request a Quote

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Introduction */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-9 bg-[#F7C600]"
                />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0B2A4A]">
                  Auston Product Portfolio
                </span>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-[#071B35] sm:text-4xl">
                Professional solutions for everyday hygiene requirements.
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Explore Auston&apos;s {category.name.toLowerCase()} portfolio
                for professional environments. Our product range is designed
                to support practical cleaning, hygiene and facility-care
                requirements across different industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="border-t border-gray-100 bg-[#F7F9FC] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-9 bg-[#F7C600]"
                />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0B2A4A]">
                  Products
                </span>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-[#071B35] sm:text-4xl">
                {category.name}
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                Explore the products currently available in this category.
              </p>
            </div>

            <Link
              href="/products"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#0B2A4A]"
            >
              <span>View all products</span>

              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {categoryProducts.map((product) => (
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
          ) : (
            <div className="mt-10 rounded-[2rem] border border-gray-200 bg-white px-6 py-14 text-center sm:px-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071B35]">
                <Package
                  aria-hidden="true"
                  className="h-7 w-7 text-[#F7C600]"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#071B35]">
                Products are being updated.
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500">
                Our complete {category.name.toLowerCase()} catalogue will be
                available here as the Auston product portfolio is updated.
              </p>

              <Link
                href="/contact-us"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#071B35] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0B2A4A]"
              >
                Contact Auston
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Why Auston */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Professional product portfolio",
              "Solutions across multiple industries",
              "Customer-focused support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-gray-200 bg-white p-7"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="h-6 w-6 text-[#F7C600]"
                />

                <h3 className="mt-5 text-lg font-bold text-[#071B35]">
                  {item}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Auston supports professional hygiene and facility-care
                  requirements with practical product solutions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071B35] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7C600]">
            Need Help Choosing?
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Looking for the right {category.name.toLowerCase()} solution?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65">
            Contact Auston with your requirement and our team can help you
            explore the available product options.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7C600] px-6 py-3.5 text-sm font-bold text-[#071B35] transition hover:bg-[#FFD83D]"
            >
              Request a Quote

              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4"
              />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Explore All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProductDetailPage({
  product,
}: {
  product: NonNullable<ReturnType<typeof getProductBySlug>>;
}) {
  const matchingProducts = products.filter(
    (item) =>
      item.slug !== product.slug &&
      (item.category === product.category || item.brand === product.brand),
  );

  const relatedProducts =
    matchingProducts.length > 0
      ? matchingProducts.slice(0, 3)
      : products
          .filter((item) => item.slug !== product.slug)
          .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-[#F7F9FC]">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium text-gray-400"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#071B35]"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/products"
              className="transition-colors hover:text-[#071B35]"
            >
              Products
            </Link>

            <span>/</span>

            <span className="truncate text-[#071B35]">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Product overview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0B2A4A]"
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            />

            <span>Back to products</span>
          </Link>

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
            {/* Product visual */}
            <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-[#F7F9FC]">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#F7C600]/10 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[#123B63]/10 blur-3xl"
              />

              <div className="relative flex min-h-[420px] items-center justify-center p-10 sm:min-h-[500px]">
                <div className="flex h-36 w-36 items-center justify-center rounded-[2rem] bg-[#071B35] shadow-2xl shadow-[#071B35]/15">
                  <Package
                    aria-hidden="true"
                    className="h-14 w-14 text-[#F7C600]"
                  />
                </div>
              </div>
            </div>

            {/* Product information */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#071B35]/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0B2A4A]">
                  {product.brand}
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                  {product.category}
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-black tracking-[-0.035em] text-[#071B35] sm:text-5xl">
                {product.name}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                {product.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#F7C600] px-7 py-4 text-sm font-bold text-[#071B35] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD83D]"
                >
                  <span>Request a Quote</span>

                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="tel:+917559055888"
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 px-7 py-4 text-sm font-bold text-[#071B35] transition-colors hover:border-[#F7C600]"
                >
                  Call Auston
                </a>
              </div>

              {/* Quick information */}
              <div className="mt-10 grid gap-4 border-t border-gray-200 pt-8 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                    Brand
                  </p>

                  <p className="mt-2 text-sm font-semibold text-[#071B35]">
                    {product.brand}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                    Category
                  </p>

                  <p className="mt-2 text-sm font-semibold text-[#071B35]">
                    {product.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product information */}
      <section className="border-t border-gray-100 bg-[#F7F9FC] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-9 bg-[#F7C600]"
                />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0B2A4A]">
                  Product Information
                </span>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-[#071B35] sm:text-4xl">
                Designed for professional environments.
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                {product.longDescription}
              </p>

              {/* Applications */}
              <div className="mt-10">
                <h3 className="text-lg font-bold text-[#071B35]">
                  Applications
                </h3>

                <ul className="mt-4 space-y-3">
                  {product.applications.map((application) => (
                    <li
                      key={application}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 shrink-0 text-[#F7C600]"
                      />

                      <span>{application}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="mt-10 border-t border-gray-200 pt-8">
                <h3 className="text-lg font-bold text-[#071B35]">
                  Product Details
                </h3>

                <ul className="mt-4 space-y-3">
                  {product.specifications.map((specification) => (
                    <li
                      key={specification}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F59E0B]" />

                      <span>{specification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section
        aria-labelledby="related-products-heading"
        className="border-t border-gray-100 bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-9 bg-[#F7C600]"
                />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0B2A4A]">
                  Explore More
                </span>
              </div>

              <h2
                id="related-products-heading"
                className="text-3xl font-black tracking-tight text-[#071B35] sm:text-4xl"
              >
                Related Products
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                Explore more professional hygiene and cleaning solutions from
                Auston&apos;s product portfolio.
              </p>
            </div>

            <Link
              href="/products"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#0B2A4A]"
            >
              <span>View all products</span>

              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.slug}
                name={relatedProduct.name}
                slug={relatedProduct.slug}
                brand={relatedProduct.brand}
                category={relatedProduct.category}
                description={relatedProduct.description}
                featured={relatedProduct.featured}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const category = getCategoryBySlug(slug);

  if (category) {
    return <ProductCategoryPage category={category} />;
  }

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}