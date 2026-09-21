import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Auston for professional hygiene, cleaning and facility solutions for hospitality, healthcare, food and beverage, commercial and institutional environments.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Call Auston",
    value: "7559055888",
    href: "tel:+917559055888",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value:
      "Auston Mercantile, Near Holy Family Hospital, Muthalakodam P.O, Thodupuzha, Kerala, India – 685605",
  },
];

const enquiryPoints = [
  "Product enquiries and recommendations",
  "Bulk and commercial requirements",
  "Hospitality and facility-care solutions",
  "Custom hygiene and cleaning requirements",
];

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#071B35] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#F7C600]/[0.08] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#123B63]/70 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#F7C600]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F7C600] sm:text-sm">
                Get In Touch
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Let&apos;s build a cleaner,
              <span className="block text-white/70">
                better environment.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Talk to Auston about professional hygiene, cleaning and
              facility solutions designed for demanding commercial and
              institutional environments.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Contact information */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-9 bg-[#F7C600]"
                />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0B2A4A]">
                  Contact Auston
                </span>
              </div>

              <h2 className="text-3xl font-black tracking-tight text-[#071B35] sm:text-4xl">
                We&apos;re here to help.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
                Whether you are looking for a specific product, planning a
                larger requirement or need help choosing the right hygiene
                solution, our team can help.
              </p>

              <div className="mt-8 space-y-4">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;

                  return (
                    <div
                      key={detail.label}
                      className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F7C600]/50 hover:shadow-lg hover:shadow-[#071B35]/[0.04]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#071B35]">
                          <Icon
                            aria-hidden="true"
                            className="h-5 w-5 text-[#F7C600]"
                          />
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                            {detail.label}
                          </p>

                          {detail.href ? (
                            <a
                              href={detail.href}
                              className="mt-2 block text-sm font-semibold leading-6 text-[#071B35] transition-colors hover:text-[#0B2A4A]"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <p className="mt-2 text-sm font-semibold leading-6 text-[#071B35]">
                              {detail.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl bg-[#F7F9FC] p-6">
                <p className="text-sm font-bold text-[#071B35]">
                  How can we help?
                </p>

                <ul className="mt-4 space-y-3">
                  {enquiryPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 shrink-0 text-[#F7C600]"
                      />

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Enquiry form */}
            <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-xl shadow-[#071B35]/[0.05] sm:p-8 lg:p-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B2A4A]">
                  Request a Quote
                </p>

                <h2 className="mt-3 text-2xl font-black tracking-tight text-[#071B35] sm:text-3xl">
                  Tell us what you need.
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Share a few details about your requirement and our team
                  will be able to understand how we can assist you.
                </p>
              </div>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-[#071B35]"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-gray-200 bg-[#F7F9FC] px-4 py-3.5 text-sm text-[#071B35] outline-none transition-all placeholder:text-gray-400 focus:border-[#F7C600] focus:bg-white focus:ring-4 focus:ring-[#F7C600]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-semibold text-[#071B35]"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      className="w-full rounded-xl border border-gray-200 bg-[#F7F9FC] px-4 py-3.5 text-sm text-[#071B35] outline-none transition-all placeholder:text-gray-400 focus:border-[#F7C600] focus:bg-white focus:ring-4 focus:ring-[#F7C600]/10"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#071B35]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-gray-200 bg-[#F7F9FC] px-4 py-3.5 text-sm text-[#071B35] outline-none transition-all placeholder:text-gray-400 focus:border-[#F7C600] focus:bg-white focus:ring-4 focus:ring-[#F7C600]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#071B35]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full rounded-xl border border-gray-200 bg-[#F7F9FC] px-4 py-3.5 text-sm text-[#071B35] outline-none transition-all placeholder:text-gray-400 focus:border-[#F7C600] focus:bg-white focus:ring-4 focus:ring-[#F7C600]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="requirement"
                    className="mb-2 block text-sm font-semibold text-[#071B35]"
                  >
                    Requirement
                  </label>

                  <select
                    id="requirement"
                    name="requirement"
                    defaultValue=""
                    className="w-full rounded-xl border border-gray-200 bg-[#F7F9FC] px-4 py-3.5 text-sm text-[#071B35] outline-none transition-all focus:border-[#F7C600] focus:bg-white focus:ring-4 focus:ring-[#F7C600]/10"
                  >
                    <option value="" disabled>
                      Select your requirement
                    </option>
                    <option value="product-enquiry">
                      Product Enquiry
                    </option>
                    <option value="bulk-order">Bulk / Commercial Order</option>
                    <option value="hospitality">
                      Hospitality / HoReCa
                    </option>
                    <option value="facility-management">
                      Facility Management
                    </option>
                    <option value="other">Other Requirement</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#071B35]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your requirement..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-[#F7F9FC] px-4 py-3.5 text-sm text-[#071B35] outline-none transition-all placeholder:text-gray-400 focus:border-[#F7C600] focus:bg-white focus:ring-4 focus:ring-[#F7C600]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#F7C600] px-7 py-4 text-sm font-bold text-[#071B35] shadow-lg shadow-[#F7C600]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD83D] hover:shadow-xl hover:shadow-[#F7C600]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#071B35] focus-visible:ring-offset-2"
                >
                  <Mail
                    aria-hidden="true"
                    className="h-4 w-4"
                  />

                  <span>Send Enquiry</span>

                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#071B35] py-14 text-white sm:py-16">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F7C600]">
            Auston
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Professional hygiene starts with the right solution.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/60 sm:text-base">
            Tell us about your requirement and let&apos;s find the right
            solution for your environment.
          </p>
        </div>
      </section>
    </main>
  );
}