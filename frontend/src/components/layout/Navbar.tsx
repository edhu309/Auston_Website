"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

type NavItem = {
  name: string;
  path: string;
};

type DropdownProps = Readonly<{
  label: string;
  items: NavItem[];
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}>;

type MobileDropdownProps = Readonly<{
  label: string;
  items: NavItem[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}>;

const products: NavItem[] = [
  {
    name: "Floor Care Chemicals",
    path: "/products/floor-care-chemicals",
  },
  {
    name: "Kitchen Care Chemicals",
    path: "/products/kitchen-care-chemicals",
  },
  {
    name: "Laundry Care Products",
    path: "/products/laundry-care-products",
  },
  {
    name: "Janitorial Tools",
    path: "/products/janitorial-tools",
  },
  {
    name: "Cleaning Machineries",
    path: "/products/cleaning-machineries",
  },
  {
    name: "Hotel Amenities",
    path: "/products/hotel-amenities",
  },
  {
    name: "Paper Products",
    path: "/products/paper-products",
  },
  {
    name: "Dispensers",
    path: "/products/dispensers",
  },
  {
    name: "Air Fresheners",
    path: "/products/air-fresheners",
  },
  {
    name: "Room Essentials",
    path: "/products/room-essentials",
  },
  {
    name: "Chemical Dilution Machines",
    path: "/products/chemical-dilution-machines",
  },
];

const industries: NavItem[] = [
  {
    name: "Hospitality / HoReCa",
    path: "/industries/hospitality",
  },
  {
    name: "Healthcare",
    path: "/industries/healthcare",
  },
  {
    name: "Food & Beverages",
    path: "/industries/food-beverages",
  },
  {
    name: "Facility Management",
    path: "/industries/facility-management",
  },
  {
    name: "Institutions",
    path: "/industries/institutions",
  },
  {
    name: "Dairy & Poultry",
    path: "/industries/dairy-poultry",
  },
  {
    name: "Life Science",
    path: "/industries/life-science",
  },
];

function Dropdown({
  label,
  items,
  open,
  onOpen,
  onClose,
}: DropdownProps) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        onClick={() => (open ? onClose() : onOpen())}
        onFocus={onOpen}
        aria-haspopup="true"
        aria-expanded={open}
        className="group inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-white/70 hover:text-[#0B2A4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C600]/70"
      >
        <span>{label}</span>

        <ChevronDown
          aria-hidden="true"
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 8,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 8,
              scale: 0.98,
            }}
            transition={{
              duration: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 pt-3"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-2 shadow-[0_20px_60px_rgba(10,50,99,0.14)] backdrop-blur-xl">
              {items.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={onClose}
                  className="group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-[#F7C600]/10 hover:text-[#0B2A4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C600]/60"
                >
                  <span>{item.name}</span>

                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileDropdown({
  label,
  items,
  open,
  onToggle,
  onClose,
}: MobileDropdownProps) {
  return (
    <div className="rounded-2xl">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold text-[#0B2A4A] transition-colors hover:bg-[#F7C600]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C600]/60"
      >
        <span>{label}</span>

        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="overflow-hidden px-2 pb-2"
          >
            {items.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={onClose}
                className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-[#F7C600]/10 hover:text-[#0B2A4A]"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setIsMenuOpen(false);
        setMobileDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileDropdown(null);
    setOpenDropdown(null);
  };

  return (
    <>
      <motion.nav
        initial={{
          y: -24,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        aria-label="Main navigation"
        className="fixed left-0 top-0 z-50 w-full px-3 sm:px-6"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border transition-all duration-500 ${
            isScrolled
              ? "mt-2 border-slate-200/80 bg-white/90 px-3 py-2 shadow-[0_10px_40px_rgba(10,50,99,0.10)] backdrop-blur-2xl sm:px-5"
              : "mt-4 border-white/60 bg-white/75 px-3 py-2.5 shadow-[0_8px_30px_rgba(10,50,99,0.06)] backdrop-blur-xl sm:px-5"
          }`}
        >
          {/* Logo */}

          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Auston home"
            className="group shrink-0 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C600]/70"
          >
            <div className="flex items-baseline">
              <span className="text-2xl font-black lowercase tracking-tight text-[#0B2A4A] sm:text-[26px]">
                auston
              </span>

              <span
                aria-hidden="true"
                className="ml-0.5 -translate-y-2.5 text-lg font-black text-[#F7C600]"
              >
                •
              </span>
            </div>

            <span className="-mt-1.5 block text-[8px] font-bold uppercase tracking-[0.2em] text-[#0B2A4A] sm:text-[9px]">
              We Deliver Hygiene
            </span>
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-0.5 rounded-full bg-white/30 p-1 md:flex">
            <Link
              href="/"
              className="rounded-full px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-white/80 hover:text-[#0B2A4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C600]/60"
            >
              Home
            </Link>

            <Dropdown
              label="Products"
              items={products}
              open={openDropdown === "products"}
              onOpen={() => setOpenDropdown("products")}
              onClose={() => setOpenDropdown(null)}
            />

            <Dropdown
              label="Industries"
              items={industries}
              open={openDropdown === "industries"}
              onOpen={() => setOpenDropdown("industries")}
              onClose={() => setOpenDropdown(null)}
            />

            <Link
              href="/about-us"
              className="rounded-full px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-white/80 hover:text-[#0B2A4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C600]/60"
            >
              About Us
            </Link>

            <Link
              href="/brands"
              className="rounded-full px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-white/80 hover:text-[#0B2A4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C600]/60"
            >
              Brands
            </Link>

            <Link
              href="/blog"
              className="rounded-full px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-white/80 hover:text-[#0B2A4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C600]/60"
            >
              Blog
            </Link>
          </div>

          {/* Desktop CTA */}

          <Link
            href="/contact-us"
            className="group hidden items-center gap-2 rounded-full bg-[#F7C600] px-5 py-2.5 text-sm font-bold text-[#071B35] shadow-md shadow-[#F7C600]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFD83D] hover:shadow-lg md:flex"
          >
            <span>Request a Quote</span>

            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B2A4A] text-white shadow-md transition-transform active:scale-95 md:hidden"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed inset-x-3 top-[78px] z-40 md:hidden"
          >
            <div className="max-h-[calc(100vh-96px)] overflow-y-auto rounded-3xl border border-slate-200/70 bg-white/95 p-3 shadow-2xl shadow-[#0B2A4A]/10 backdrop-blur-2xl">
              <Link
                href="/"
                onClick={closeMenu}
                className="block rounded-2xl px-4 py-3.5 text-base font-semibold text-[#0B2A4A] transition-colors hover:bg-[#F7C600]/10"
              >
                Home
              </Link>

              <MobileDropdown
                label="Products"
                items={products}
                open={mobileDropdown === "products"}
                onToggle={() =>
                  setMobileDropdown((value) =>
                    value === "products" ? null : "products"
                  )
                }
                onClose={closeMenu}
              />

              <MobileDropdown
                label="Industries"
                items={industries}
                open={mobileDropdown === "industries"}
                onToggle={() =>
                  setMobileDropdown((value) =>
                    value === "industries" ? null : "industries"
                  )
                }
                onClose={closeMenu}
              />

              <Link
                href="/about-us"
                onClick={closeMenu}
                className="block rounded-2xl px-4 py-3.5 text-base font-semibold text-[#0B2A4A] transition-colors hover:bg-[#F7C600]/10"
              >
                About Us
              </Link>

              <Link
                href="/brands"
                onClick={closeMenu}
                className="block rounded-2xl px-4 py-3.5 text-base font-semibold text-[#0B2A4A] transition-colors hover:bg-[#F7C600]/10"
              >
                Brands
              </Link>

              <Link
                href="/blog"
                onClick={closeMenu}
                className="block rounded-2xl px-4 py-3.5 text-base font-semibold text-[#0B2A4A] transition-colors hover:bg-[#F7C600]/10"
              >
                Blog
              </Link>

              <Link
                href="/contact-us"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-between rounded-2xl bg-[#F7C600] px-5 py-4 text-sm font-bold text-[#071B35] shadow-lg shadow-[#F7C600]/20 transition-colors hover:bg-[#FFD83D]"
              >
                <span>Request a Quote</span>

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}