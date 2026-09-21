export type Product = Readonly<{
  name: string;
  slug: string;
  brand: string;
  category: string;
  description: string;
  longDescription: string;
  featured: boolean;
  applications: readonly string[];
  specifications: readonly string[];
}>;

export const products: readonly Product[] = [
  {
    name: "Disinfectant Floor Cleaner",
    slug: "crew-disinfectant-floor-cleaner",
    brand: "CREW",
    category: "Floor Care Chemicals",
    description:
      "Professional floor-cleaning and disinfecting solution for demanding hospitality and commercial environments.",
    longDescription:
      "Professional floor-cleaning and disinfecting solution designed for demanding hospitality and commercial environments.",
    featured: true,
    applications: [
      "Hospitality and HoReCa environments",
      "Commercial cleaning applications",
      "Professional floor-care routines",
    ],
    specifications: [
      "Professional floor-care solution",
      "Disinfecting cleaning application",
      "Designed for professional environments",
    ],
  },
  {
    name: "Bathroom Cleaner & Descaler",
    slug: "crew-bathroom-cleaner",
    brand: "CREW",
    category: "Bathroom Care",
    description:
      "Professional bathroom cleaning solution designed for routine cleaning and removal of scale and deposits.",
    longDescription:
      "Professional bathroom-care solution designed to support routine cleaning and maintenance in demanding commercial environments.",
    featured: true,
    applications: [
      "Hotel and hospitality bathrooms",
      "Commercial washrooms",
      "Professional facility maintenance",
    ],
    specifications: [
      "Professional bathroom-care solution",
      "Suitable for routine cleaning",
      "Designed for commercial environments",
    ],
  },
  {
    name: "TASKI R1 Super",
    slug: "taski-r1-super",
    brand: "TASKI",
    category: "Housekeeping Solutions",
    description:
      "Professional housekeeping cleaning solution from the TASKI product portfolio.",
    longDescription:
      "TASKI R1 Super is presented as part of Auston's professional housekeeping solutions portfolio. Detailed product information can be supplied through the product management system.",
    featured: true,
    applications: [
      "Professional housekeeping environments",
      "Hospitality and HoReCa applications",
      "Commercial cleaning environments",
    ],
    specifications: [
      "Professional cleaning solution",
      "Part of the TASKI product portfolio",
      "Suitable for professional environments",
    ],
  },
  {
    name: "Clax 100 L Crystal",
    slug: "clax-100-l-crystal",
    brand: "CLAX",
    category: "Laundry Care Products",
    description:
      "Professional laundry detergent solution from the CLAX fabric-care portfolio.",
    longDescription:
      "Professional laundry-care solution from the CLAX portfolio for commercial and professional laundry environments.",
    featured: true,
    applications: [
      "Commercial laundry operations",
      "Hospitality laundry facilities",
      "Professional fabric-care environments",
    ],
    specifications: [
      "Professional laundry-care solution",
      "Part of the CLAX portfolio",
      "Designed for commercial laundry applications",
    ],
  },
  {
    name: "All Kleen",
    slug: "schevaran-all-kleen",
    brand: "Schevaran",
    category: "General Housekeeping",
    description:
      "General-purpose cleaning solution from Schevaran's professional housekeeping range.",
    longDescription:
      "General-purpose professional cleaning solution from Schevaran's housekeeping portfolio.",
    featured: false,
    applications: [
      "General housekeeping",
      "Commercial facilities",
      "Institutional environments",
    ],
    specifications: [
      "General-purpose cleaning solution",
      "Professional housekeeping application",
      "Suitable for commercial environments",
    ],
  },
  {
    name: "RA 431",
    slug: "cleanfix-ra-431",
    brand: "Cleanfix",
    category: "Cleaning Machineries",
    description:
      "Professional floor-cleaning machinery from the Cleanfix equipment portfolio.",
    longDescription:
      "Professional cleaning equipment from the Cleanfix machinery portfolio, intended for professional floor-care applications.",
    featured: false,
    applications: [
      "Professional floor cleaning",
      "Commercial facilities",
      "Hospitality environments",
    ],
    specifications: [
      "Professional cleaning machinery",
      "Part of the Cleanfix equipment portfolio",
      "Designed for professional environments",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}