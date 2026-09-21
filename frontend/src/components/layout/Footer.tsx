import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const companyLinks = [
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Brands",
    href: "/brands",
  },
  {
    name: "Testimonials",
    href: "/testimonials",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const productLinks = [
  {
    name: "Floor Care Chemicals",
    href: "/products/floor-care-chemicals",
  },
  {
    name: "Kitchen Care Chemicals",
    href: "/products/kitchen-care-chemicals",
  },
  {
    name: "Laundry Care Products",
    href: "/products/laundry-care-products",
  },
  {
    name: "Janitorial Tools",
    href: "/products/janitorial-tools",
  },
  {
    name: "Cleaning Machineries",
    href: "/products/cleaning-machineries",
  },
  {
    name: "Hotel Amenities",
    href: "/products/hotel-amenities",
  },
];

const industryLinks = [
  {
    name: "Hospitality / HoReCa",
    href: "/industries/hospitality",
  },
  {
    name: "Healthcare",
    href: "/industries/healthcare",
  },
  {
    name: "Food & Beverages",
    href: "/industries/food-beverages",
  },
  {
    name: "Facility Management",
    href: "/industries/facility-management",
  },
  {
    name: "Institutions",
    href: "/industries/institutions",
  },
  {
    name: "Dairy & Poultry",
    href: "/industries/dairy-poultry",
  },
  {
    name: "Life Science",
    href: "/industries/life-science",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#071B35] text-white"
    >
      {/* ============================================================
          BACKGROUND DECORATION
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#F7C600]/[0.06] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/4 h-[350px] w-[350px] rounded-full bg-[#123B63]/60 blur-[100px]"
      />

      {/* Subtle orange detail */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-24 hidden h-24 w-24 rounded-full border border-[#F59E0B]/10 lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ============================================================
            MAIN FOOTER CONTENT
        ============================================================ */}

        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.35fr_0.75fr_1fr_1fr] lg:gap-12">

          {/* ==========================================================
              BRAND
          ========================================================== */}

          <div className="max-w-sm">

            <Link
              href="/"
              aria-label="Auston home"
              className="inline-flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C600]"
            >
              <div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-black lowercase tracking-tight text-white sm:text-4xl">
                    auston
                  </span>

                  <span
                    aria-hidden="true"
                    className="ml-1 h-2.5 w-2.5 rounded-full bg-[#F7C600]"
                  />
                </div>

                <span className="mt-0.5 block text-[8px] font-bold uppercase tracking-[0.25em] text-white/70 sm:text-[9px]">
                  We Deliver Hygiene
                </span>
              </div>
            </Link>

            <p className="mt-7 text-sm leading-7 text-white/55 sm:text-base">
              Professional hygiene, cleaning and hospitality solutions
              for demanding commercial and institutional environments.
            </p>

            {/* Brand statement */}

            <div className="mt-8 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-[#F7C600]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F7C600]">
                We Deliver Hygiene
              </span>
            </div>

            {/* Contact details */}

            <div className="mt-8 space-y-3">

              <a
                href="tel:7559055888"
                className="group flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06] transition-colors group-hover:bg-[#F7C600]/10">
                  <Phone
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-[#F7C600]"
                  />
                </span>

                <span>7559055888</span>
              </a>

              <a
                href="mailto:info@auston.in"
                className="group flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06] transition-colors group-hover:bg-[#F7C600]/10">
                  <Mail
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-[#F7C600]"
                  />
                </span>

                <span className="break-all">
                  info@auston.in
                </span>
              </a>

            </div>

          </div>

          {/* ==========================================================
              COMPANY
          ========================================================== */}

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Company
            </h2>

            <ul className="mt-6 space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:text-white"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-[#F7C600] transition-all duration-300 group-hover:w-3"
                    />

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ==========================================================
              PRODUCTS
          ========================================================== */}

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Products
            </h2>

            <ul className="mt-6 space-y-3.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-start gap-2 text-sm leading-5 text-white/55 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:text-white"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-px w-0 shrink-0 bg-[#F7C600] transition-all duration-300 group-hover:w-3"
                    />

                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ==========================================================
              INDUSTRIES
          ========================================================== */}

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Industries
            </h2>

            <ul className="mt-6 space-y-3.5">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-start gap-2 text-sm leading-5 text-white/55 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:text-white"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-px w-0 shrink-0 bg-[#F7C600] transition-all duration-300 group-hover:w-3"
                    />

                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ============================================================
            CONTACT STRIP
        ============================================================ */}

        <div className="border-y border-white/[0.08] py-8">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7C600]/10">
                <MapPin
                  aria-hidden="true"
                  className="h-5 w-5 text-[#F7C600]"
                />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F7C600]">
                  Visit Auston
                </p>

                <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
                  Auston Mercantile, Near Holy Family Hospital,
                  Muthalakodam P.O, Thodupuzha, Kerala, India – 685605.
                </p>
              </div>

            </div>

            <Link
              href="/contact-us"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#F7C600] px-6 py-3.5 text-sm font-bold text-[#071B35] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD83D] hover:shadow-lg hover:shadow-[#F7C600]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Contact Us</span>

              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

          </div>

        </div>

        {/* ============================================================
            BOTTOM BAR
        ============================================================ */}

        <div className="flex flex-col gap-5 py-7 text-xs sm:flex-row sm:items-center sm:justify-between">

          <p className="text-white/30">
            © {currentYear} Auston. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">

            <Link
              href="/contact-us"
              className="text-white/35 transition-colors hover:text-white/70 focus:outline-none focus-visible:text-white"
            >
              Contact
            </Link>

            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-[#F7C600]"
            />

            <Link
              href="/faq"
              className="text-white/35 transition-colors hover:text-white/70 focus:outline-none focus-visible:text-white"
            >
              FAQ
            </Link>

            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-[#F7C600]"
            />

            <a
              href="#top"
              className="text-white/35 transition-colors hover:text-white/70 focus:outline-none focus-visible:text-white"
            >
              Back to top
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}