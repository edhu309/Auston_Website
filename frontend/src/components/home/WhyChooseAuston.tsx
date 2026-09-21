import {
  BadgeCheck,
  Boxes,
  Headphones,
  Leaf,
  ShieldCheck,
  Truck,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Professional Hygiene Expertise",
    description:
      "Solutions selected to meet the practical hygiene and cleaning demands of professional environments.",
  },
  {
    icon: Boxes,
    title: "Complete Product Range",
    description:
      "From cleaning chemicals and machinery to janitorial tools, amenities and essential facility products.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Brands",
    description:
      "Access to established professional brands across hygiene, cleaning and facility care categories.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description:
      "A dependable supply partner for businesses that need consistent access to essential hygiene products.",
  },
  {
    icon: Headphones,
    title: "Customer-Focused Support",
    description:
      "Practical assistance to help businesses identify suitable products for their specific requirements.",
  },
  {
    icon: Leaf,
    title: "Sustainable Solutions",
    description:
      "Environment-conscious alternatives and responsible product choices wherever practical.",
  },
];

export default function WhyChooseAuston() {
  return (
    <section
      aria-labelledby="why-auston-heading"
      className="relative overflow-hidden bg-[#F7F9FC] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#F7C600]/[0.07] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-[#123B63]/[0.05] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
          {/* Left content */}
          <div className="max-w-xl">
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#F7C600]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0B2A4A]">
                Why Auston
              </span>
            </div>

            <h2
              id="why-auston-heading"
              className="text-3xl font-black tracking-[-0.025em] text-[#071B35] sm:text-4xl lg:text-5xl"
            >
              More than products.
              <span className="block text-[#123B63]">
                A hygiene partner you can rely on.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Auston brings together professional products, trusted brands and
              practical support to help businesses maintain cleaner, safer and
              more efficient environments.
            </p>

            {/* Small brand statement */}
            <div className="mt-9 rounded-3xl border border-[#071B35]/[0.08] bg-[#071B35] p-6 shadow-xl shadow-[#071B35]/10 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F7C600]">
                  <ShieldCheck
                    aria-hidden="true"
                    className="h-5 w-5 text-[#071B35]"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7C600]">
                    Our Promise
                  </p>

                  <p className="mt-2 text-lg font-semibold leading-7 text-white">
                    We deliver hygiene solutions designed for the real demands
                    of your business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right feature grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F7C600] hover:shadow-xl hover:shadow-[#071B35]/[0.06] sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#071B35]/[0.06] text-[#0B2A4A] transition-colors duration-300 group-hover:bg-[#F7C600] group-hover:text-[#071B35]">
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5"
                      />
                    </div>

                    <span className="text-xs font-bold tracking-[0.15em] text-gray-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-bold tracking-tight text-[#071B35]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}