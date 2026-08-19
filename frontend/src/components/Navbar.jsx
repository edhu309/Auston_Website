import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredPath, setHoveredPath] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Solutions", path: "/#solutions" },
        { name: "About", path: "/#about" },
    ];

    return (
        <>
            {/* ==================================================
                  DESKTOP / MOBILE NAVBAR
              ================================================== */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className="fixed left-0 top-0 z-50 w-full px-4 sm:px-6"
            >
                <div
                    className={`mx-auto flex max-w-7xl items-center justify-between rounded-full transition-all duration-500 ease-in-out sm:px-6 ${isScrolled
                            ? "mt-2 border border-white/60 bg-white/35 px-4 py-2 shadow-[0_8px_32px_0_rgba(18,63,115,0.08)] backdrop-blur-3xl backdrop-saturate-150"
                            : "mt-4 border border-white/20 bg-white/20 px-4 py-2.5 shadow-none backdrop-blur-md backdrop-saturate-100"
                        }`}
                >

                    {/* ==================================================
                          AUSTON HOSPITALITY LOGO
                      ================================================== */}
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="group flex flex-col justify-center transition-transform duration-300 hover:scale-105"
                    >
                        {/* Option A: Pure CSS / SVG Reconstruction for crisp vector look */}
                        <div className="relative flex items-baseline">
                            <span className="text-2xl font-black lowercase tracking-tight text-[#0A3263]">
                                auston
                            </span>

                            {/* Origami Arrow Accent */}
                            <svg
                                className="ml-0.5 h-4 w-4 -translate-y-2.5 transform"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 18L22 2L14 22L11 13L2 18Z"
                                    fill="url(#auston-arrow-gradient)"
                                />
                                <defs>
                                    <linearGradient
                                        id="auston-arrow-gradient"
                                        x1="2"
                                        y1="2"
                                        x2="22"
                                        y2="22"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#FFC82C" />
                                        <stop offset="1" stopColor="#F59E0B" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Tagline Subtext */}
                        <span className="text-[9px] font-semibold tracking-[0.22em] text-[#0A3263] opacity-90 -mt-1.5 uppercase">
                            HOSPITALITY
                        </span>

                        {/* Option B: If you prefer using an image asset instead, replace the div above with this: */}
                        {/* <img src="/logo.png" alt="Auston Hospitality" className="h-8 w-auto object-contain" /> */}
                    </Link>

                    {/* ==================================================
                          DESKTOP NAVIGATION
                      ================================================== */}
                    <div
                        className={`hidden items-center gap-1 rounded-full p-1.5 transition-all duration-500 md:flex ${isScrolled ? "bg-white/20 backdrop-blur-md" : "bg-white/10"
                            }`}
                        onMouseLeave={() => setHoveredPath(null)}
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onMouseEnter={() => setHoveredPath(item.path)}
                                className="relative rounded-full px-4 py-1.5 text-sm font-semibold transition-colors duration-200"
                                style={{
                                    color: hoveredPath === item.path ? "#0A3263" : "#334155"
                                }}
                            >
                                {hoveredPath === item.path && (
                                    <motion.span
                                        layoutId="navbar-hover"
                                        className="absolute inset-0 rounded-full bg-white/70 shadow-sm backdrop-blur-md"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{item.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* ==================================================
                          DESKTOP CONTACT
                      ================================================== */}
                    <Link
                        to="/#contact"
                        className="group relative hidden overflow-hidden rounded-full bg-[#0A3263] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#0A3263]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#062143] hover:shadow-lg hover:shadow-[#0A3263]/30 active:scale-[0.98] md:flex md:items-center md:gap-2"
                    >
                        <span>Contact Us</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>

                    {/* ==================================================
                          MOBILE MENU BUTTON
                      ================================================== */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#0A3263] text-white shadow-md transition-transform duration-200 active:scale-95 md:hidden"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                    >
                        <div className="flex h-4 w-4 flex-col justify-between">
                            <motion.span
                                animate={{
                                    rotate: isMenuOpen ? 45 : 0,
                                    y: isMenuOpen ? 7 : 0,
                                }}
                                transition={{ duration: 0.2 }}
                                className="h-0.5 w-full origin-center rounded-full bg-white"
                            />
                            <motion.span
                                animate={{
                                    opacity: isMenuOpen ? 0 : 1,
                                    x: isMenuOpen ? -10 : 0,
                                }}
                                transition={{ duration: 0.15 }}
                                className="h-0.5 w-full rounded-full bg-white"
                            />
                            <motion.span
                                animate={{
                                    rotate: isMenuOpen ? -45 : 0,
                                    y: isMenuOpen ? -7 : 0,
                                }}
                                transition={{ duration: 0.2 }}
                                className="h-0.5 w-full origin-center rounded-full bg-white"
                            />
                        </div>
                    </button>

                </div>
            </motion.nav>

            {/* ==================================================
                  MOBILE MENU
              ================================================== */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{
                            duration: 0.25,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="fixed left-4 right-4 top-[80px] z-40 md:hidden"
                    >
                        <div className="overflow-hidden rounded-3xl border border-white/50 bg-white/40 p-4 shadow-2xl shadow-[#0A3263]/10 backdrop-blur-3xl">

                            {/* Menu links */}
                            <div className="flex flex-col gap-1">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={closeMenu}
                                        className="group flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold text-[#0A3263] transition-colors duration-200 hover:bg-white/40"
                                    >
                                        <span>{item.name}</span>
                                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/50 text-xs text-[#0A3263] transition-all duration-300 group-hover:bg-[#FFC82C] group-hover:text-[#0A3263] group-hover:translate-x-0.5">
                                            →
                                        </span>
                                    </Link>
                                ))}
                            </div>

                            {/* Mobile Contact */}
                            <Link
                                to="/#contact"
                                onClick={closeMenu}
                                className="mt-3 flex items-center justify-between rounded-2xl bg-[#0A3263] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-[#0A3263]/20 transition-all duration-200 active:scale-[0.99]"
                            >
                                <span>Contact Us</span>
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white">
                                    →
                                </span>
                            </Link>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;