import Link from "next/link";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Parallax from "@/components/animations/Parallax";
import Reveal from "@/components/animations/Reveal";
import Float from "@/components/animations/Float";
import { motion } from "motion/react";

const heroHighlights = [
  "Professional hygiene solutions",
  "Commercial & institutional supply",
  "Trusted product brands",
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#071B35] text-white"
    >
      {/* Background decoration */}
     <Parallax
  offset={-35}
  className="pointer-events-none absolute -right-40 -top-40"
>
  <div
    aria-hidden="true"
    className="h-[520px] w-[520px] rounded-full bg-[#F7C600]/[0.07] blur-[130px]"
  />
</Parallax>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-[#123B63]/70 blur-[110px]"
      />

      {/* Subtle orange accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[22%] hidden h-24 w-24 rounded-full border border-[#F59E0B]/20 lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[11%] top-[27%] hidden h-2.5 w-2.5 rounded-full bg-[#F59E0B] lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* ========================================================
              LEFT CONTENT
          ======================================================== */}

          <div className="max-w-3xl">

            {/* Eyebrow */}
<Reveal duration={0.6}>
  <div className="mb-7 inline-flex items-center gap-3">
            <div className="mb-7 inline-flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#F7C600]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F7C600] sm:text-sm">
                We Deliver Hygiene
              </span>
            </div>
            </div>
</Reveal>
            {/* Main heading */}

            <Reveal delay={0.08} duration={0.7}>
  <h1
    id="hero-heading"
    className="max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl"
  >
    Professional Hygiene
    <span className="block text-white/95">
      Solutions That Work.
    </span>
  </h1>
</Reveal>

            {/* Description */}

           <Reveal delay={0.16} duration={0.65}>
  <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8 lg:text-xl">
    Auston delivers professional hygiene, cleaning and facility
    solutions for hospitality, healthcare, food & beverage,
    commercial and institutional environments.
  </p>
</Reveal>
            {/* CTA buttons */}

            {/* CTA buttons */}
<Reveal delay={0.24} duration={0.65}>
  <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
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
      className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.03] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C600] sm:w-auto"
    >
      <span>Explore Products</span>
    </Link>
  </div>
</Reveal>
            {/* Highlights */}
<Reveal delay={0.32} duration={0.65}>
            <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.1] pt-7 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-3">
              {heroHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2.5 text-sm text-white/55"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F7C600]/10">
                    <Check
                      aria-hidden="true"
                      className="h-3 w-3 text-[#F7C600]"
                    />
                  </span>

                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            </Reveal>

          </div>

          {/* ========================================================
              RIGHT VISUAL
          ======================================================== */}

          <Parallax
  offset={45}
  className="relative mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto"
>

            {/* Main visual panel */}

            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.12] bg-white/[0.055] p-3 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-4">

              <div className="relative min-h-[390px] overflow-hidden rounded-[1.5rem] bg-[#0B2A4A] sm:min-h-[450px]">

                {/* Decorative grid */}

                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                  }}
                />

                {/* Yellow glow */}

                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7C600]/10 blur-3xl"
                />

                {/* Central visual */}

                {/* Central visual */}

<div className="absolute inset-0 flex items-center justify-center p-8">
  <Float
    duration={7}
    distance={5}
  >
    <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-[#F7C600]/25 bg-[#071B35] shadow-2xl shadow-black/20 sm:h-64 sm:w-64">

      <div
        aria-hidden="true"
        className="absolute inset-4 rounded-full border border-white/[0.08]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-10 rounded-full border border-[#F7C600]/15"
      />

      <div className="relative flex flex-col items-center text-center">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7C600] shadow-lg shadow-[#F7C600]/20">
          <Sparkles
            aria-hidden="true"
            className="h-7 w-7 text-[#071B35]"
          />
        </div>

        <span className="mt-5 text-2xl font-black tracking-tight text-white sm:text-3xl">
          auston
        </span>

        <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.3em] text-white/45">
          We Deliver Hygiene
        </span>

      </div>

    </div>
  </Float>
</div>

                {/* Floating card — top */}

                {/* Floating card — top */}
<Float
  duration={5.5}
  distance={7}
  className="absolute left-5 top-5 sm:left-7 sm:top-7"
>
  <div className="rounded-2xl border border-white/10 bg-[#071B35]/85 px-4 py-3 shadow-xl backdrop-blur-md">
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F7C600]/10">
        <ShieldCheck
          aria-hidden="true"
          className="h-4.5 w-4.5 text-[#F7C600]"
        />
      </div>

      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
          Professional
        </p>

        <p className="mt-0.5 text-sm font-semibold text-white">
          Hygiene Solutions
        </p>
      </div>
    </div>
  </div>
</Float>

                {/* Floating card — bottom */}

                {/* Floating card — bottom */}
<Float
  duration={6}
  distance={9}
  delay={0.4}
  className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7"
>
  <div className="rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur-md">
    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F7C600]">
      Built for
    </p>

    <p className="mt-1 text-sm font-semibold text-white">
      Demanding Environments
    </p>
  </div>
</Float>

                {/* Orange accent */}

                <div
                  aria-hidden="true"
                  className="absolute bottom-8 left-8 h-1.5 w-1.5 rounded-full bg-[#F59E0B]"
                />

              </div>

            </div>

            {/* Small floating detail */}

            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-3 hidden h-20 w-20 rounded-full border border-[#F7C600]/15 sm:block"
            />
            </Parallax>
            
          </div>

        </div>

{/* Scroll indicator */}
<div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-white/40 sm:flex">
  <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
    Scroll to explore
  </span>

  <Float duration={1.8} distance={5}>
    <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 pt-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-[#F7C600]" />
    </div>
  </Float>
</div>
{/* Hero section transition */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/10 to-transparent"
 />
    </section>
  );
}