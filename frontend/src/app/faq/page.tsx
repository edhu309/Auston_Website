"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  CircleHelp,
  MessageCircle,
} from "lucide-react";

const faqCategories = [
  "General",
  "Products",
  "Industries",
  "Orders & Support",
];

const faqs = [
  {
    category: "General",
    question: "What does Auston provide?",
    answer:
      "Auston provides professional hygiene, cleaning and facility-care products for hospitality, healthcare, food and beverage, commercial, institutional and other professional environments.",
  },
  {
    category: "General",
    question: "Which industries does Auston serve?",
    answer:
      "Auston serves a range of professional environments including Hospitality / HoReCa, Healthcare, Food & Beverages, Facility Management, Institutions, Dairy & Poultry and Life Science.",
  },
  {
    category: "General",
    question: "Where is Auston located?",
    answer:
      "Auston Mercantile is located near Holy Family Hospital, Muthalakodam P.O, Thodupuzha, Kerala, India – 685605.",
  },
  {
    category: "Products",
    question: "What types of products are available?",
    answer:
      "The product portfolio includes Floor Care Chemicals, Kitchen Care Chemicals, Laundry Care Products, Janitorial Tools, Cleaning Machineries, Hotel Amenities, Paper Products, Dispensers, Air Fresheners, Room Essentials and Chemical Dilution Machines.",
  },
  {
    category: "Products",
    question: "Can I view the available products online?",
    answer:
      "Yes. You can explore the available product categories and products through the Products section of the Auston website.",
  },
  {
    category: "Products",
    question: "Does Auston provide professional cleaning equipment?",
    answer:
      "Yes. Auston's portfolio includes professional cleaning machineries and janitorial tools in addition to cleaning and hygiene products.",
  },
  {
    category: "Products",
    question: "Does Auston offer products from different brands?",
    answer:
      "Yes. Auston works with a portfolio of professional hygiene and cleaning brands. The Brands section of the website provides an overview of the brands represented in the current portfolio.",
  },
  {
    category: "Industries",
    question: "Does Auston provide solutions for hotels and restaurants?",
    answer:
      "Yes. Auston has a dedicated Hospitality / HoReCa offering covering cleaning, hygiene and facility-care requirements for hospitality environments.",
  },
  {
    category: "Industries",
    question: "Does Auston serve healthcare environments?",
    answer:
      "Yes. Auston provides professional cleaning and hygiene product categories for healthcare facility-care requirements.",
  },
  {
    category: "Industries",
    question: "Can Auston support facility management companies?",
    answer:
      "Yes. Auston's product portfolio includes cleaning chemicals, janitorial tools, cleaning equipment and other hygiene categories relevant to facility management operations.",
  },
  {
    category: "Industries",
    question: "Does Auston work with educational institutions and offices?",
    answer:
      "Yes. Auston supports institutional environments with product categories for routine cleaning, washroom hygiene, common-area maintenance and janitorial operations.",
  },
  {
    category: "Orders & Support",
    question: "How can I request a quotation?",
    answer:
      "You can use the Request a Quote or Contact Us options on the website and provide your organisation, contact details and requirements. The Auston team can then review your enquiry.",
  },
  {
    category: "Orders & Support",
    question: "Can I contact Auston directly?",
    answer:
      "Yes. You can contact Auston customer care at 7559055888 or use the enquiry form available on the Contact Us page.",
  },
  {
    category: "Orders & Support",
    question: "Can I ask for help selecting a product?",
    answer:
      "Yes. When contacting Auston, provide details about your application, environment and cleaning requirement. The team can review the requirement and discuss suitable product options.",
  },
  {
    category: "Orders & Support",
    question: "How do I get support for a specific product?",
    answer:
      "You can contact Auston with the product name and details of your requirement. Providing the application and operating environment can help the team understand your request.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqs.filter(
    (faq) => faq.category === activeCategory,
  );

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071B35]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#F7C600]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#123B63]/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2">
              <CircleHelp
                aria-hidden="true"
                className="h-4 w-4 text-[#F7C600]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7C600]">
                Frequently Asked Questions
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Answers to your{" "}
              <span className="text-[#F7C600]">
                hygiene questions.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Find answers to common questions about Auston, our professional
              hygiene product portfolio, industries and customer support.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:items-start">
            {/* Categories */}
            <aside className="lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                Browse FAQs
              </p>

              <div className="mt-5 flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
                {faqCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category);
                      setOpenIndex(0);
                    }}
                    className={`whitespace-nowrap rounded-xl px-4 py-3 text-left text-sm font-bold transition ${
                      activeCategory === category
                        ? "bg-[#071B35] text-white"
                        : "bg-[#F7F9FC] text-[#0B2A4A] hover:bg-[#F7C600]/15"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </aside>

            {/* Questions */}
            <div>
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                  {activeCategory}
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
                  Frequently asked questions
                </h2>
              </div>

              <div className="space-y-3">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={faq.question}
                      className={`overflow-hidden rounded-2xl border transition-colors ${
                        isOpen
                          ? "border-[#F7C600]"
                          : "border-gray-200"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenIndex(isOpen ? null : index)
                        }
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                      >
                        <span className="text-sm font-bold leading-6 text-[#071B35] sm:text-base">
                          {faq.question}
                        </span>

                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                            isOpen
                              ? "bg-[#F7C600] text-[#071B35]"
                              : "bg-[#F7F9FC] text-[#0B2A4A]"
                          }`}
                        >
                          <ChevronDown
                            aria-hidden="true"
                            className={`h-4 w-4 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ${
                          isOpen
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 text-sm leading-7 text-gray-600 sm:px-6">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="bg-[#F7F9FC] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071B35]">
            <MessageCircle
              aria-hidden="true"
              className="h-7 w-7 text-[#F7C600]"
            />
          </div>

          <span className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
            Still Have Questions?
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071B35] sm:text-4xl">
            Let&apos;s talk about your requirements.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            If you cannot find the information you need, contact the Auston
            team and tell us about your cleaning or facility-care requirement.
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
              href="/products"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-bold text-[#071B35] transition hover:border-[#F7C600]"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}