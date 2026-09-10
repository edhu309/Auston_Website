import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";

const products = [
    ["Floor Care Chemicals", "/products/floor-care-chemicals"],
    ["Kitchen Care Chemicals", "/products/kitchen-care-chemicals"],
    ["Laundry Care Products", "/products/laundry-care-products"],
    ["Janitorial Tools", "/products/janitorial-tools"],
    ["Cleaning Machineries", "/products/cleaning-machineries"],
    ["Hotel Amenities", "/products/hotel-amenities"],
    ["Paper Products", "/products/paper-products"],
    ["Dispensers", "/products/dispensers"],
    ["Air Fresheners", "/products/air-fresheners"],
    ["Room Essentials", "/products/room-essentials"],
    ["Chemical Dilution Machines", "/products/chemical-dilution-machines"],
];

const industries = [
    ["Hospitality / HoReCa", "/industries/hospitality"],
    ["Healthcare", "/industries/healthcare"],
    ["Food & Beverages", "/industries/food-beverages"],
    ["Facility Management", "/industries/facility-management"],
    ["Institutions", "/industries/institutions"],
    ["Dairy & Poultry", "/industries/dairy-poultry"],
    ["Life Science", "/industries/life-science"],
];

function Dropdown({ label, items, open, onOpen, onClose }) {
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
                className="group relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-[#0A3263] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]/60"
            >
                <span>{label}</span>

                <motion.svg
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M5.5 7.5 10 12l4.5-4.5 1.5 1.5-6 6-6-6 1.5-1.5Z" />
                </motion.svg>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{
                            duration: 0.18,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="absolute left-1/2 top-full z-50 w-[300px] -translate-x-1/2 pt-3"
                    >
                        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-2 shadow-[0_20px_60px_rgba(10,50,99,0.14)] backdrop-blur-xl">

                            {items.map(([name, path]) => (
                                <Link
                                    key={path}
                                    to={path}
                                    onClick={onClose}
                                    className="group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-[#0A3263]/[0.06] hover:text-[#0A3263] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]/50"
                                >
                                    <span>{name}</span>

                                    <span
                                        className="translate-x-[-4px] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                                        aria-hidden="true"
                                    >
                                        →
                                    </span>
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
}) {
    return (
        <div className="rounded-2xl bg-white/20">

            <button
                type="button"
                onClick={onToggle}
                aria-expanded={open}
                className="flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold text-[#0A3263] transition-colors hover:bg-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]/50"
            >
                <span>{label}</span>

                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    className="text-sm"
                    aria-hidden="true"
                >
                    ↓
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden px-2 pb-2"
                    >
                        {items.map(([name, path]) => (
                            <Link
                                key={path}
                                to={path}
                                onClick={onClose}
                                className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-white/50 hover:text-[#0A3263]"
                            >
                                {name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileDropdown, setMobileDropdown] = useState(null);
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
        const handleKeyDown = (event) => {
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

    const closeMenu = () => {
        setIsMenuOpen(false);
        setMobileDropdown(null);
    };

    return (
        <>
            {/* ================================
                MAIN NAVBAR
            ================================= */}

            <motion.nav
                initial={{ y: -24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                }}
                aria-label="Main navigation"
                className="fixed left-0 top-0 z-50 w-full px-3 sm:px-6"
            >

                <div
                    className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border transition-all duration-500 ${isScrolled
                            ? "mt-2 border-white/70 bg-white/70 px-3 py-2 shadow-[0_10px_40px_rgba(10,50,99,0.10)] backdrop-blur-2xl sm:px-5"
                            : "mt-4 border-white/30 bg-white/25 px-3 py-2.5 shadow-none backdrop-blur-xl sm:px-5"
                        }`}
                >

                    {/* ================================
                        LOGO
                    ================================= */}

                    <Link
                        to="/"
                        onClick={closeMenu}
                        aria-label="Auston home"
                        className="group shrink-0 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]/60"
                    >

                        <div className="flex items-baseline">

                            <span className="text-2xl font-black lowercase tracking-tight text-[#0A3263] sm:text-[26px]">
                                auston
                            </span>

                            <svg
                                className="ml-0.5 h-4 w-4 -translate-y-2.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M2 18 22 2l-8 20-3-9-9 5Z"
                                    fill="#F59E0B"
                                />
                            </svg>

                        </div>

                        <span className="-mt-1.5 block text-[8px] font-bold uppercase tracking-[0.2em] text-[#0A3263] sm:text-[9px]">
                            We Deliver Hygiene
                        </span>

                    </Link>

                    {/* ================================
                        DESKTOP NAVIGATION
                    ================================= */}

                    <div className="hidden items-center gap-0.5 rounded-full bg-white/15 p-1 md:flex">

                        <Link
                            to="/"
                            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-white/70 hover:text-[#0A3263] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]/50"
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
                            to="/about-us"
                            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-white/70 hover:text-[#0A3263] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]/50"
                        >
                            About Us
                        </Link>

                        <Link
                            to="/brands"
                            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-white/70 hover:text-[#0A3263] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]/50"
                        >
                            Brands
                        </Link>

                        <Link
                            to="/blog"
                            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-white/70 hover:text-[#0A3263] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]/50"
                        >
                            Blog
                        </Link>

                    </div>

                    {/* ================================
                        CTA
                    ================================= */}

                    <Link
                        to="/contact-us"
                        className="group hidden items-center gap-2 rounded-full bg-[#0A3263] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#0A3263]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#062143] hover:shadow-lg md:flex"
                    >
                        <span>Request a Quote</span>

                        <span
                            className="transition-transform duration-300 group-hover:translate-x-1"
                            aria-hidden="true"
                        >
                            →
                        </span>
                    </Link>

                    {/* ================================
                        MOBILE MENU BUTTON
                    ================================= */}

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#0A3263] text-white shadow-md transition-transform active:scale-95 md:hidden"
                        aria-label={
                            isMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                    >

                        <div className="flex h-4 w-4 flex-col justify-between">

                            <motion.span
                                animate={{
                                    rotate: isMenuOpen ? 45 : 0,
                                    y: isMenuOpen ? 7 : 0,
                                }}
                                className="h-0.5 w-full origin-center rounded-full bg-white"
                            />

                            <motion.span
                                animate={{
                                    opacity: isMenuOpen ? 0 : 1,
                                    x: isMenuOpen ? -8 : 0,
                                }}
                                className="h-0.5 w-full rounded-full bg-white"
                            />

                            <motion.span
                                animate={{
                                    rotate: isMenuOpen ? -45 : 0,
                                    y: isMenuOpen ? -7 : 0,
                                }}
                                className="h-0.5 w-full origin-center rounded-full bg-white"
                            />

                        </div>

                    </button>

                </div>

            </motion.nav>

            {/* ================================
                MOBILE NAVIGATION
            ================================= */}

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
                        className="fixed left-3 right-3 top-[78px] z-40 md:hidden"
                    >

                        <div className="max-h-[calc(100vh-96px)] overflow-y-auto rounded-3xl border border-white/60 bg-white/80 p-3 shadow-2xl shadow-[#0A3263]/10 backdrop-blur-2xl">

                            <Link
                                to="/"
                                onClick={closeMenu}
                                className="block rounded-2xl px-4 py-3.5 text-base font-semibold text-[#0A3263] hover:bg-white/60"
                            >
                                Home
                            </Link>

                            <MobileDropdown
                                label="Products"
                                items={products}
                                open={mobileDropdown === "products"}
                                onToggle={() =>
                                    setMobileDropdown((value) =>
                                        value === "products"
                                            ? null
                                            : "products"
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
                                        value === "industries"
                                            ? null
                                            : "industries"
                                    )
                                }
                                onClose={closeMenu}
                            />

                            <Link
                                to="/about-us"
                                onClick={closeMenu}
                                className="block rounded-2xl px-4 py-3.5 text-base font-semibold text-[#0A3263] hover:bg-white/60"
                            >
                                About Us
                            </Link>

                            <Link
                                to="/brands"
                                onClick={closeMenu}
                                className="block rounded-2xl px-4 py-3.5 text-base font-semibold text-[#0A3263] hover:bg-white/60"
                            >
                                Brands
                            </Link>

                            <Link
                                to="/blog"
                                onClick={closeMenu}
                                className="block rounded-2xl px-4 py-3.5 text-base font-semibold text-[#0A3263] hover:bg-white/60"
                            >
                                Blog
                            </Link>

                            <Link
                                to="/contact-us"
                                onClick={closeMenu}
                                className="mt-2 flex items-center justify-between rounded-2xl bg-[#0A3263] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-[#0A3263]/20"
                            >
                                <span>Request a Quote</span>
                                <span aria-hidden="true">→</span>
                            </Link>

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>
        </>
    );
}

export default Navbar;