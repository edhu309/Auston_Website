import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="relative overflow-hidden bg-[#071B35] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#F7C600]/[0.08] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#123B63]/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-[18%] hidden h-24 w-24 rounded-full border border-[#F59E0B]/20 lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[14%] top-[24%] hidden h-2 w-2 rounded-full bg-[#F59E0B] lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          {/* Main CTA */}
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#F7C600]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F7C600]">
                Let's Work Together
              </span>
            </div>

            <h2
              id="contact-cta-heading"
              className="text-3xl font-black leading-[1.08] tracking-[-0.03em] sm:text-4xl lg:text-6xl"
            >
              Need the right hygiene solution
              <span className="block text-white/60">
                for your business?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              Talk to Auston about your cleaning, hygiene, facility or
              hospitality requirements. Our team can help you find the right
              products and solutions for your environment.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact-us"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#F7C600] px-7 py-4 text-sm font-bold text-[#071B35] shadow-lg shadow-[#F7C600]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD83D] hover:shadow-xl hover:shadow-[#F7C600]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071B35] sm:w-auto"
              >
                <span>Request a Quote</span>

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/products"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08] sm:w-auto"
              >
                Explore Products
              </Link>
            </div>
          </div>

          {/* Contact information card */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-white/[0.1] bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-7">
              <div className="flex items-center gap-3 border-b border-white/[0.1] pb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F7C600]">
                  <Sparkles
                    aria-hidden="true"
                    className="h-5 w-5 text-[#071B35]"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7C600]">
                    Contact Auston
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    We're here to help.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <a
                  href="tel:+917559055888"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
                    <Phone
                      aria-hidden="true"
                      className="h-4 w-4 text-[#F7C600]"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/35">
                      Customer Care
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white transition-colors group-hover:text-[#F7C600]">
                      +91 75590 55888
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@auston.in"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
                    <Mail
                      aria-hidden="true"
                      className="h-4 w-4 text-[#F7C600]"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/35">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white transition-colors group-hover:text-[#F7C600]">
                      info@auston.in
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
                    <MapPin
                      aria-hidden="true"
                      className="h-4 w-4 text-[#F7C600]"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/35">
                      Office
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/70">
                      Auston Mercantile,
                      <br />
                      Near Holy Family Hospital,
                      <br />
                      Muthalakodam P.O, Thodupuzha,
                      <br />
                      Kerala, India – 685605
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 border-t border-white/[0.1] pt-5">
                <p className="text-xs leading-5 text-white/35">
                  Professional hygiene and cleaning solutions for hospitality,
                  healthcare, food & beverage, commercial and institutional
                  environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}