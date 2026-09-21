import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hygiene & Cleaning Insights",
  description:
    "Explore hygiene, cleaning, facility management and professional maintenance insights from Auston.",
  alternates: {
    canonical: "/blog",
  },
};

const articles = [
  {
    slug: "professional-hygiene-in-hospitality",
    category: "Hospitality",
    title: "The Importance of Professional Hygiene in Hospitality",
    excerpt:
      "Explore how structured cleaning routines and professional hygiene solutions can support better hospitality environments.",
    date: "September 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "choosing-the-right-floor-cleaning-solution",
    category: "Floor Care",
    title: "How to Choose the Right Floor Cleaning Solution",
    excerpt:
      "A practical look at the factors to consider when selecting professional floor care products for different environments.",
    date: "September 2026",
    readTime: "4 min read",
    featured: false,
  },
  {
    slug: "hygiene-solutions-for-commercial-kitchens",
    category: "Food & Beverage",
    title: "Building Better Hygiene Practices for Commercial Kitchens",
    excerpt:
      "Understand the key areas to consider when planning cleaning and hygiene routines in commercial kitchen environments.",
    date: "August 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "facility-management-cleaning-checklist",
    category: "Facility Management",
    title: "A Practical Cleaning Checklist for Facility Teams",
    excerpt:
      "A simple framework for organising routine cleaning activities across offices, institutions and commercial facilities.",
    date: "August 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "professional-janitorial-tools",
    category: "Janitorial",
    title: "Why the Right Janitorial Tools Matter",
    excerpt:
      "The right tools can help cleaning teams organise everyday maintenance tasks more effectively.",
    date: "July 2026",
    readTime: "4 min read",
    featured: false,
  },
  {
    slug: "sustainable-cleaning-practices",
    category: "Sustainability",
    title: "Moving Towards More Sustainable Cleaning Practices",
    excerpt:
      "Discover practical considerations for introducing more responsible cleaning and facility-care practices.",
    date: "July 2026",
    readTime: "6 min read",
    featured: false,
  },
];

const categories = [
  "All",
  "Hospitality",
  "Floor Care",
  "Food & Beverage",
  "Facility Management",
  "Janitorial",
  "Sustainability",
];

export default function BlogPage() {
  const featuredArticle = articles.find((article) => article.featured);
  const regularArticles = articles.filter((article) => !article.featured);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071B35]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#F7C600]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#123B63]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2">
              <BookOpen
                aria-hidden="true"
                className="h-4 w-4 text-[#F7C600]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7C600]">
                Auston Insights
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hygiene insights for{" "}
              <span className="text-[#F7C600]">
                cleaner environments.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Practical insights, ideas and guidance covering professional
              cleaning, hygiene, facility management and everyday maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 py-5 sm:px-8 lg:px-12">
          <div className="flex min-w-max items-center gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                  index === 0
                    ? "bg-[#071B35] text-white"
                    : "bg-[#F7F9FC] text-[#0B2A4A] hover:bg-[#F7C600]/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="bg-[#F7F9FC] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                  Featured Insight
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
                  From the Auston journal
                </h2>
              </div>

              <Sparkles
                aria-hidden="true"
                className="hidden h-8 w-8 text-[#F7C600] sm:block"
              />
            </div>

            <article className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                {/* Temporary visual */}
                <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#071B35] p-10 lg:min-h-[420px]">
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#F7C600]/10 blur-2xl" />
                  <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#123B63] blur-2xl" />

                  <div className="relative text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#F7C600]">
                      <BookOpen
                        aria-hidden="true"
                        className="h-9 w-9 text-[#071B35]"
                      />
                    </div>

                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                      AUSTON JOURNAL
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                  <span className="w-fit rounded-full bg-[#F7C600]/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0B2A4A]">
                    {featuredArticle.category}
                  </span>

                  <h3 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#071B35] sm:text-4xl">
                    {featuredArticle.title}
                  </h3>

                  <p className="mt-5 text-base leading-7 text-gray-600">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-5 text-xs font-medium text-gray-400">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays
                        aria-hidden="true"
                        className="h-4 w-4"
                      />
                      {featuredArticle.date}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <Clock3 aria-hidden="true" className="h-4 w-4" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${featuredArticle.slug}`}
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#071B35] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0B2A4A]"
                  >
                    Read Article
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
              Latest Articles
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
              Ideas for better hygiene and maintenance.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Explore practical articles covering cleaning, hygiene,
              facility-care and professional maintenance.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularArticles.map((article) => (
              <article
                key={article.slug}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F7C600] hover:shadow-xl hover:shadow-[#071B35]/[0.06]"
              >
                {/* Temporary article visual */}
                <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#F7F9FC]">
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#F7C600]/10 blur-2xl" />

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071B35]">
                    <BookOpen
                      aria-hidden="true"
                      className="h-7 w-7 text-[#F7C600]"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[#071B35]/[0.05] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0B2A4A]">
                      {article.category}
                    </span>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-400">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight text-[#071B35]">
                    {article.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                    {article.excerpt}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs text-gray-400">
                    <CalendarDays
                      aria-hidden="true"
                      className="h-4 w-4"
                    />
                    {article.date}
                  </div>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0B2A4A]"
                  >
                    Read Article
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

      {/* CTA */}
      <section className="bg-[#F7F9FC] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
            Need a Hygiene Solution?
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
            Let&apos;s find the right solution for your environment.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            Explore our professional product portfolio or speak with Auston
            about your hygiene and facility-care requirements.
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