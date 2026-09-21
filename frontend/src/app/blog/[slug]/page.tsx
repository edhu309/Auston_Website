import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
} from "lucide-react";

type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  points?: string[];
};

const articles: Article[] = [
  {
    slug: "professional-hygiene-in-hospitality",
    category: "Hospitality",
    title: "The Importance of Professional Hygiene in Hospitality",
    excerpt:
      "Explore how structured cleaning routines and professional hygiene solutions can support better hospitality environments.",
    date: "September 2026",
    readTime: "5 min read",
    sections: [
      {
        heading: "Creating a Consistent Guest Environment",
        paragraphs: [
          "Hospitality environments bring together guest rooms, public areas, dining spaces, washrooms and back-of-house operations. Each area has its own cleaning requirements, making consistency an important part of everyday facility management.",
          "A structured approach helps cleaning teams understand what needs to be cleaned, which products and tools are appropriate, and how frequently routine tasks should be carried out.",
        ],
      },
      {
        heading: "Focus on High-Use Areas",
        paragraphs: [
          "Guest-facing and high-use areas often require regular attention throughout the day. Reception areas, corridors, dining spaces, washrooms and other common areas can all benefit from organised cleaning routines.",
          "Professional cleaning products and suitable janitorial tools can help teams carry out these routine activities efficiently and consistently.",
        ],
      },
      {
        heading: "Supporting Housekeeping Teams",
        paragraphs: [
          "Housekeeping teams work across multiple areas and often manage several cleaning activities simultaneously. Providing the right product categories and equipment can make daily workflows easier to organise.",
          "The goal is to build a practical cleaning system that fits the property's operating requirements rather than relying on a single product for every application.",
        ],
      },
    ],
    points: [
      "Identify high-use areas and prioritise routine cleaning.",
      "Use products suited to the specific cleaning application.",
      "Keep janitorial tools organised and accessible.",
      "Maintain consistent cleaning routines across operating areas.",
    ],
  },
  {
    slug: "choosing-the-right-floor-cleaning-solution",
    category: "Floor Care",
    title: "How to Choose the Right Floor Cleaning Solution",
    excerpt:
      "A practical look at the factors to consider when selecting professional floor care products for different environments.",
    date: "September 2026",
    readTime: "4 min read",
    sections: [
      {
        heading: "Start With the Floor and Environment",
        paragraphs: [
          "Different facilities use different flooring materials and experience different levels of foot traffic. Before selecting a cleaning solution, it is useful to understand the floor type, operating environment and routine maintenance requirements.",
          "A product selected for one environment may not necessarily be the right choice for another, so the application should always guide the selection process.",
        ],
      },
      {
        heading: "Consider the Cleaning Requirement",
        paragraphs: [
          "Routine maintenance, deeper cleaning and specialised floor-care activities can require different approaches. Cleaning teams should consider the type of soil, frequency of cleaning and equipment available.",
          "This helps create a more structured floor-care routine while making better use of professional cleaning products.",
        ],
      },
      {
        heading: "Build a Practical Routine",
        paragraphs: [
          "A good floor-care programme combines suitable products, appropriate equipment and consistent cleaning procedures. Regular assessment of the floor and operating conditions can also help teams adjust their routine when requirements change.",
        ],
      },
    ],
  },
  {
    slug: "hygiene-solutions-for-commercial-kitchens",
    category: "Food & Beverage",
    title: "Building Better Hygiene Practices for Commercial Kitchens",
    excerpt:
      "Understand the key areas to consider when planning cleaning and hygiene routines in commercial kitchen environments.",
    date: "August 2026",
    readTime: "6 min read",
    sections: [
      {
        heading: "Why Kitchen Cleaning Requires Structure",
        paragraphs: [
          "Commercial kitchens contain multiple work areas that operate continuously during service. Floors, work surfaces, equipment areas, wash zones and surrounding spaces all require regular cleaning and maintenance.",
          "A structured routine makes it easier for teams to divide responsibilities and maintain consistent standards throughout the working day.",
        ],
      },
      {
        heading: "Separate Tasks by Area",
        paragraphs: [
          "Cleaning requirements can vary significantly between food preparation areas, floors, wash areas and other kitchen spaces. Organising tasks by area helps teams select suitable products and tools for each application.",
        ],
      },
      {
        heading: "Keep Cleaning Practical",
        paragraphs: [
          "The most useful cleaning programme is one that fits naturally into the kitchen's daily workflow. Clear routines, accessible equipment and appropriate product selection can support efficient maintenance without unnecessarily complicating operations.",
        ],
      },
    ],
  },
  {
    slug: "facility-management-cleaning-checklist",
    category: "Facility Management",
    title: "A Practical Cleaning Checklist for Facility Teams",
    excerpt:
      "A simple framework for organising routine cleaning activities across offices, institutions and commercial facilities.",
    date: "August 2026",
    readTime: "5 min read",
    sections: [
      {
        heading: "Begin With a Facility Walkthrough",
        paragraphs: [
          "Every facility has different cleaning requirements. A walkthrough can help teams identify high-use areas, sensitive spaces, washrooms, entrances, floors and common areas that need regular attention.",
        ],
      },
      {
        heading: "Organise Tasks by Frequency",
        paragraphs: [
          "Some cleaning activities may need to happen several times a day, while others can be scheduled weekly or as required. Dividing activities by frequency makes a cleaning programme easier to manage.",
        ],
      },
      {
        heading: "Keep Supplies Ready",
        paragraphs: [
          "Cleaning teams work more efficiently when commonly used products and tools are available where they are needed. A basic inventory routine can help reduce interruptions during daily operations.",
        ],
      },
    ],
    points: [
      "Identify high-traffic areas.",
      "Create daily, weekly and periodic cleaning tasks.",
      "Keep commonly used products available.",
      "Review the cleaning routine as facility requirements change.",
    ],
  },
  {
    slug: "professional-janitorial-tools",
    category: "Janitorial",
    title: "Why the Right Janitorial Tools Matter",
    excerpt:
      "The right tools can help cleaning teams organise everyday maintenance tasks more effectively.",
    date: "July 2026",
    readTime: "4 min read",
    sections: [
      {
        heading: "Tools Are Part of the Cleaning System",
        paragraphs: [
          "Professional cleaning is not only about choosing the right chemical. Mops, brushes, buckets, handles, wipers and other janitorial tools all contribute to the way cleaning tasks are carried out.",
        ],
      },
      {
        heading: "Match Tools to Applications",
        paragraphs: [
          "Different surfaces and areas may require different tools. Matching the tool to the application can make routine cleaning more practical and help teams organise their work more effectively.",
        ],
      },
      {
        heading: "Maintain and Organise Equipment",
        paragraphs: [
          "Keeping janitorial equipment clean, organised and accessible is another important part of an efficient cleaning routine. A simple storage and maintenance system can make everyday operations easier.",
        ],
      },
    ],
  },
  {
    slug: "sustainable-cleaning-practices",
    category: "Sustainability",
    title: "Moving Towards More Sustainable Cleaning Practices",
    excerpt:
      "Discover practical considerations for introducing more responsible cleaning and facility-care practices.",
    date: "July 2026",
    readTime: "6 min read",
    sections: [
      {
        heading: "Think Beyond the Cleaning Product",
        paragraphs: [
          "Sustainable cleaning can involve more than selecting a particular product. Product usage, dilution, equipment, packaging, water consumption and cleaning routines can all influence the overall approach.",
        ],
      },
      {
        heading: "Use Products Appropriately",
        paragraphs: [
          "Following product instructions and using the appropriate amount for the intended application can help cleaning teams avoid unnecessary product usage while maintaining a consistent routine.",
        ],
      },
      {
        heading: "Improve the Overall Workflow",
        paragraphs: [
          "Better planning can also support more responsible facility care. Organised cleaning routes, suitable equipment and routine maintenance can help teams work efficiently while considering resource use.",
        ],
      },
    ],
  },
];

function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested Auston article could not be found.",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter(
      (item) =>
        item.slug !== article.slug && item.category === article.category,
    )
    .concat(
      articles.filter(
        (item) =>
          item.slug !== article.slug && item.category !== article.category,
      ),
    )
    .slice(0, 3);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071B35]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#F7C600]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#123B63]/40 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-[#F7C600]"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mt-10">
            <span className="inline-flex rounded-full bg-[#F7C600] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#071B35]">
              {article.category}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              {article.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5 text-xs font-medium text-white/50">
              <span className="inline-flex items-center gap-2">
                <CalendarDays aria-hidden="true" className="h-4 w-4" />
                {article.date}
              </span>

              <span className="inline-flex items-center gap-2">
                <Clock3 aria-hidden="true" className="h-4 w-4" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
          <div className="mb-12 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#071B35]">
            <BookOpen
              aria-hidden="true"
              className="h-9 w-9 text-[#F7C600]"
            />
          </div>

          <div className="space-y-12">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold tracking-tight text-[#071B35] sm:text-3xl">
                  {section.heading}
                </h2>

                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-gray-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Key Points */}
          {article.points && (
            <div className="mt-14 rounded-3xl bg-[#F7F9FC] p-7 sm:p-9">
              <h2 className="text-xl font-bold text-[#071B35]">
                Key points to remember
              </h2>

              <div className="mt-6 space-y-4">
                {article.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#F7C600]"
                    />

                    <p className="text-sm leading-6 text-gray-600">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Article Footer */}
          <div className="mt-14 border-t border-gray-200 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0B2A4A] transition hover:text-[#123B63]"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[#F7F9FC] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
              Continue Reading
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
              More from the Auston journal.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((related) => (
              <article
                key={related.slug}
                className="group rounded-3xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F7C600] hover:shadow-xl hover:shadow-[#071B35]/[0.06]"
              >
                <span className="inline-flex rounded-full bg-[#071B35]/[0.05] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0B2A4A]">
                  {related.category}
                </span>

                <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight text-[#071B35]">
                  {related.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                  {related.excerpt}
                </p>

                <Link
                  href={`/blog/${related.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0B2A4A]"
                >
                  Read Article
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
            Auston Hygiene Solutions
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
            Looking for the right professional hygiene solution?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            Explore our product portfolio or contact Auston to discuss your
            cleaning and facility-care requirements.
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