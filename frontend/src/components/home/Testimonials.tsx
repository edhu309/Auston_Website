import { ArrowRight, Quote, Star } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Auston has been a dependable partner for our hygiene and cleaning requirements, with a professional approach and consistent support.",
    name: "Client Testimonial",
    role: "Hospitality",
  },
  {
    quote:
      "The product range and service support make it easier for our team to manage day-to-day cleaning and facility requirements.",
    name: "Client Testimonial",
    role: "Facility Management",
  },
  {
    quote:
      "We value having access to professional hygiene products and a team that understands the practical needs of our business.",
    name: "Client Testimonial",
    role: "Commercial Client",
  },
] as const;

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-[#F7F9FC] py-20 sm:py-24 lg:py-28"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-[#F7C600]/[0.07] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#123B63]/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-9 bg-[#F7C600]"
            />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0B2A4A]">
              Client Trust
            </span>

            <span
              aria-hidden="true"
              className="h-px w-9 bg-[#F7C600]"
            />
          </div>

          <h2
            id="testimonials-heading"
            className="text-3xl font-black tracking-[-0.025em] text-[#071B35] sm:text-4xl lg:text-5xl"
          >
            Trusted by businesses
            <span className="block text-[#123B63]">
              that demand more.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Professional hygiene is about more than products. It is about
            dependable service, practical solutions and long-term partnerships.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.role}-${index}`}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F7C600] hover:shadow-xl hover:shadow-[#071B35]/[0.06] sm:p-8"
            >
              {/* Quote icon */}
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#071B35]">
                  <Quote
                    aria-hidden="true"
                    className="h-5 w-5 text-[#F7C600]"
                  />
                </div>

                <div
                  className="flex items-center gap-1"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      aria-hidden="true"
                      className="h-3.5 w-3.5 fill-[#F7C600] text-[#F7C600]"
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mt-7 flex-1 text-base font-medium leading-7 text-[#071B35]">
                “{testimonial.quote}”
              </blockquote>

              {/* Client */}
              <div className="mt-8 border-t border-gray-100 pt-6">
                <p className="text-sm font-bold text-[#071B35]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                  {testimonial.role}
                </p>
              </div>

              {/* Decorative number */}
              <span
                aria-hidden="true"
                className="absolute -bottom-5 -right-1 text-8xl font-black leading-none text-[#071B35]/[0.025]"
              >
                0{index + 1}
              </span>
            </article>
          ))}
        </div>

        {/* Trust statement */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-[#071B35]/[0.08] bg-[#071B35] p-6 sm:flex-row sm:p-7">
          <div>
            <p className="text-sm font-bold text-white">
              Looking for a reliable hygiene partner?
            </p>

            <p className="mt-1 text-sm text-white/45">
              Talk to the Auston team about your business requirements.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#F7C600] px-6 py-3 text-sm font-bold text-[#071B35] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD83D]"
          >
            <span>Talk to Auston</span>

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