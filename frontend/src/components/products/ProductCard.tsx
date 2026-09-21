import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";

type ProductCardProps = Readonly<{
  name: string;
  slug: string;
  brand: string;
  category: string;
  image?: string;
  description: string;
  featured?: boolean;
}>;

export default function ProductCard({
  name,
  slug,
  brand,
  category,
  image,
  description,
  featured = false,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F7C600] hover:shadow-xl hover:shadow-[#071B35]/[0.07]">
      {/* Product image */}
      <Link
        href={`/products/${slug}`}
        aria-label={`View ${name}`}
        className="block"
      >
        <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#F7F9FC]">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#071B35] shadow-lg">
                <Package
                  aria-hidden="true"
                  className="h-9 w-9 text-[#F7C600]"
                />
              </div>
            </div>
          )}

          {/* Featured badge */}
          {featured && (
            <span className="absolute left-4 top-4 rounded-full bg-[#F7C600] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#071B35]">
              Featured
            </span>
          )}
        </div>
      </Link>

      {/* Product information */}
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#071B35]/[0.05] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0B2A4A]">
            {brand}
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-400">
            {category}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-bold tracking-tight text-[#071B35]">
          <Link
            href={`/products/${slug}`}
            className="transition-colors hover:text-[#123B63]"
          >
            {name}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
          {description}
        </p>

        <Link
          href={`/products/${slug}`}
          className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0B2A4A]"
        >
          <span>View product</span>

          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}