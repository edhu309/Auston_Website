import Link from "next/link";
import {
  Building2,
  Factory,
  FlaskConical,
  HeartPulse,
  Hotel,
  Milk,
  UtensilsCrossed,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    title: "Hospitality / HoReCa",
    description:
      "Professional hygiene and cleaning solutions for hotels, restaurants, resorts and hospitality environments.",
    href: "/industries/hospitality",
    icon: Hotel,
    featured: true,
  },
  {
    title: "Healthcare",
    description:
      "Reliable hygiene solutions designed for hospitals, clinics and healthcare facilities.",
    href: "/industries/healthcare",
    icon: HeartPulse,
  },
  {
    title: "Food & Beverages",
    description:
      "Cleaning and hygiene solutions supporting food preparation, processing and service environments.",
    href: "/industries/food-beverages",
    icon: UtensilsCrossed,
  },
  {
    title: "Facility Management",
    description:
      "Complete cleaning and maintenance solutions for commercial and managed facilities.",
    href: "/industries/facility-management",
    icon: Building2,
  },
  {
    title: "Institutions",
    description:
      "Practical hygiene solutions for schools, offices, public facilities and institutions.",
    href: "/industries/institutions",
    icon: Factory,
  },
  {
    title: "Dairy & Poultry",
    description:
      "Hygiene and cleaning solutions for demanding dairy and poultry environments.",
    href: "/industries/dairy-poultry",
    icon: Milk,
  },
  {
    title: "Life Science",
    description:
      "Professional hygiene solutions for controlled and specialized life science environments.",
    href: "/industries/life-science",
    icon: FlaskConical,
  },
];

export default function Industries() {
  return (
    <section
      aria-labelledby="industries-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-9 bg-[#F7C600]"
            />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0B2A4A]">
              Industries We Serve
            </span>
          </div>

          <h2
            id="industries-heading"
            className="text-3xl font-black tracking-[-0.025em] text-[#071B35] sm:text-4xl lg:text-5xl"
          >
            Hygiene solutions for
            <span className="block text-[#123B63]">
              every demanding environment.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            From hospitality and healthcare to food service, facilities and
            specialized industries, Auston provides professional solutions
            built around the demands of each environment.
          </p>
        </div>

        {/* Industry cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <Link
                key={industry.title}
                href={industry.href}
                className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  industry.featured
                    ? "border-[#123B63] bg-[#071B35] text-white shadow-xl shadow-[#071B35]/10 lg:col-span-2"
                    : "border-gray-200 bg-white hover:border-[#F7C600] hover:shadow-xl hover:shadow-[#071B35]/[0.06]"
                }`}
              >
                {/* Decorative accent */}
                <span
                  aria-hidden="true"
                  className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl transition-opacity duration-300 ${
                    industry.featured
                      ? "bg-[#F7C600]/10 opacity-100"
                      : "bg-[#F7C600]/10 opacity-0 group-hover:opacity-100"
                  }`}
                />

                <div className="relative">
                  {/* Number + icon */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        industry.featured
                          ? "bg-[#F7C600] text-[#071B35]"
                          : "bg-[#071B35]/[0.06] text-[#0B2A4A] group-hover:bg-[#F7C600] group-hover:text-[#071B35]"
                      } transition-colors duration-300`}
                    >
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5"
                      />
                    </div>

                    <span
                      className={`text-xs font-bold tracking-[0.15em] ${
                        industry.featured
                          ? "text-white/30"
                          : "text-gray-300"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-8">
                    <h3
                      className={`text-xl font-bold tracking-tight ${
                        industry.featured
                          ? "text-white"
                          : "text-[#071B35]"
                      }`}
                    >
                      {industry.title}
                    </h3>

                    <p
                      className={`mt-3 text-sm leading-6 ${
                        industry.featured
                          ? "max-w-xl text-white/60"
                          : "text-gray-500"
                      }`}
                    >
                      {industry.description}
                    </p>
                  </div>

                  {/* Explore link */}
                  <div
                    className={`mt-7 flex items-center gap-2 text-sm font-bold ${
                      industry.featured
                        ? "text-[#F7C600]"
                        : "text-[#0B2A4A] group-hover:text-[#071B35]"
                    }`}
                  >
                    <span>Explore industry</span>

                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}