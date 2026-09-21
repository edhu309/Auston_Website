import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Mail,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at Auston",
  description:
    "Explore career opportunities at Auston and become part of a professional hygiene and facility-solutions team.",
  alternates: {
    canonical: "/careers",
  },
};

const values = [
  {
    icon: Users,
    title: "People First",
    description:
      "We value collaboration, responsibility and the contribution of every team member.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Growth",
    description:
      "Build practical experience while working across professional hygiene and facility-care solutions.",
  },
  {
    icon: CheckCircle2,
    title: "Customer Focus",
    description:
      "We work with customers to understand their requirements and support practical solutions.",
  },
];

const opportunities = [
  {
    title: "Sales & Business Development",
    type: "Full Time",
    description:
      "Build customer relationships and support the growth of Auston's professional hygiene solutions across different industries.",
  },
  {
    title: "Operations & Customer Support",
    type: "Full Time",
    description:
      "Support day-to-day operations, customer enquiries and coordination of hygiene product requirements.",
  },
  {
    title: "Marketing & Digital",
    type: "Full Time",
    description:
      "Help communicate Auston's products, brands and professional hygiene solutions across digital channels.",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071B35]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#F7C600]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#123B63]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2">
              <BriefcaseBusiness
                aria-hidden="true"
                className="h-4 w-4 text-[#F7C600]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7C600]">
                Careers at Auston
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build your career in{" "}
              <span className="text-[#F7C600]">
                professional hygiene.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Join a team working with professional hygiene products,
              facility-care solutions and customers across a range of
              industries.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#opportunities"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7C600] px-6 py-3.5 text-sm font-bold text-[#071B35] transition hover:bg-[#FFD83D]"
              >
                View Opportunities
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Contact Auston
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
              Join Auston
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
              Grow with a professional hygiene solutions company.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Auston works with customers across hospitality, healthcare, food
              and beverage, facility management, institutions and other
              professional environments.
            </p>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Our work brings together products, brands, customer
              relationships and practical facility-care requirements. We value
              people who are willing to learn, collaborate and contribute.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#F7F9FC] p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071B35]">
              <Users
                aria-hidden="true"
                className="h-7 w-7 text-[#F7C600]"
              />
            </div>

            <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#071B35]">
              Be part of the journey.
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              Whether you are starting your career or bringing professional
              experience, we welcome people who are motivated to learn and
              create value for customers.
            </p>

            <div className="mt-7 h-1.5 w-20 rounded-full bg-[#F7C600]" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F7F9FC] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
              Our Approach
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
              What we value.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              We believe strong customer relationships start with a strong
              team and a professional approach to everyday work.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-3xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F7C600] hover:shadow-xl hover:shadow-[#071B35]/[0.06]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071B35]">
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6 text-[#F7C600]"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#071B35]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section
        id="opportunities"
        className="scroll-mt-24 bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
              Career Opportunities
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
              Explore opportunities at Auston.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Current openings can be listed here as they become available.
              Contact our team to enquire about suitable opportunities.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {opportunities.map((opportunity) => (
              <article
                key={opportunity.title}
                className="group rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#F7C600] hover:shadow-lg hover:shadow-[#071B35]/[0.05] sm:p-7"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-[#071B35]">
                        {opportunity.title}
                      </h3>

                      <span className="rounded-full bg-[#F7C600]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0B2A4A]">
                        {opportunity.type}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {opportunity.description}
                    </p>
                  </div>

                  <a
                    href="#apply"
                    className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#0B2A4A]"
                  >
                    Apply / Enquire
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="bg-[#071B35] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7C600]">
                Who We&apos;re Looking For
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                People who are ready to learn and contribute.
              </h2>

              <p className="mt-5 text-base leading-7 text-white/65">
                We value people who approach their work with curiosity,
                professionalism and a willingness to work together.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Good communication",
                "Customer-focused mindset",
                "Willingness to learn",
                "Team collaboration",
                "Professional attitude",
                "Responsibility",
              ].map((quality) => (
                <div
                  key={quality}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-[#F7C600]"
                  />

                  <span className="text-sm font-medium text-white/85">
                    {quality}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section id="apply" className="scroll-mt-24 bg-[#F7F9FC] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071B35]">
            <Mail
              aria-hidden="true"
              className="h-7 w-7 text-[#F7C600]"
            />
          </div>

          <span className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
            Interested in Joining?
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
            Send us your profile.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            If you are interested in working with Auston, contact our team
            with your profile and the type of opportunity you are looking
            for.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#071B35] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0B2A4A]"
            >
              Contact Auston
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>

            <Link
              href="/about-us"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-bold text-[#071B35] transition hover:border-[#F7C600]"
            >
              Learn About Auston
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}