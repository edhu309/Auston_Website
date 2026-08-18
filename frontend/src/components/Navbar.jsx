import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* ==================================================
          DESKTOP / MOBILE NAVBAR
      ================================================== */}

            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                }}
                className="fixed left-0 top-0 z-50 w-full px-4 sm:px-6"
            >
                <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/90 px-5 py-3 shadow-lg backdrop-blur-md sm:px-6">

                    {/* ==================================================
              LOGO
          ================================================== */}

                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center"
                    >
                        <span className="text-2xl font-bold tracking-tight text-[#123F73]">
                            Auston
                        </span>

                        <span className="ml-2 h-2 w-2 rounded-full bg-[#F7C600]" />
                    </Link>

                    {/* ==================================================
              DESKTOP NAVIGATION
          ================================================== */}

                    <div className="hidden items-center gap-8 md:flex">

                        {/* Home */}
                        <Link
                            to="/"
                            className="group relative text-sm font-medium text-gray-700 transition-colors hover:text-[#123F73]"
                        >
                            Home

                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#F7C600] transition-all duration-300 group-hover:w-full" />
                        </Link>

                        {/* Products */}
                        <Link
                            to="/products"
                            className="group relative text-sm font-medium text-gray-700 transition-colors hover:text-[#123F73]"
                        >
                            Products

                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#F7C600] transition-all duration-300 group-hover:w-full" />
                        </Link>

                        {/* Solutions */}
                        <Link
                            to="/#solutions"
                            className="group relative text-sm font-medium text-gray-700 transition-colors hover:text-[#123F73]"
                        >
                            Solutions

                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#F7C600] transition-all duration-300 group-hover:w-full" />
                        </Link>

                        {/* About */}
                        <Link
                            to="/#about"
                            className="group relative text-sm font-medium text-gray-700 transition-colors hover:text-[#123F73]"
                        >
                            About

                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#F7C600] transition-all duration-300 group-hover:w-full" />
                        </Link>

                    </div>

                    {/* ==================================================
              DESKTOP CONTACT
          ================================================== */}

                    <Link
                        to="/#contact"
                        className="hidden rounded-full bg-[#123F73] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0D315A] hover:shadow-lg md:block"
                    >
                        Contact Us
                    </Link>

                    {/* ==================================================
              MOBILE MENU BUTTON
          ================================================== */}

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#123F73] text-white md:hidden"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                    >
                        <motion.span
                            animate={{
                                rotate: isMenuOpen ? 45 : 0,
                                y: isMenuOpen ? 0 : -4,
                            }}
                            transition={{ duration: 0.25 }}
                            className="absolute h-0.5 w-4 rounded-full bg-white"
                        />

                        <motion.span
                            animate={{
                                rotate: isMenuOpen ? -45 : 0,
                                y: isMenuOpen ? 0 : 4,
                            }}
                            transition={{ duration: 0.25 }}
                            className="absolute h-0.5 w-4 rounded-full bg-white"
                        />
                    </button>

                </div>
            </motion.nav>

            {/* ==================================================
          MOBILE MENU
      ================================================== */}

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                        className="fixed left-4 right-4 top-[82px] z-40 md:hidden"
                    >
                        <div className="overflow-hidden rounded-[28px] border border-white/20 bg-white/95 p-5 shadow-2xl backdrop-blur-xl">

                            {/* Menu links */}
                            <div className="flex flex-col">

                                {/* Home */}
                                <Link
                                    to="/"
                                    onClick={closeMenu}
                                    className="group flex items-center justify-between border-b border-slate-100 px-3 py-4 text-base font-medium text-[#102F55]"
                                >
                                    <span>Home</span>

                                    <span className="text-[#F7C600] transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>

                                {/* Products */}
                                <Link
                                    to="/products"
                                    onClick={closeMenu}
                                    className="group flex items-center justify-between border-b border-slate-100 px-3 py-4 text-base font-medium text-[#102F55]"
                                >
                                    <span>Products</span>

                                    <span className="text-[#F7C600] transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>

                                {/* Solutions */}
                                <Link
                                    to="/#solutions"
                                    onClick={closeMenu}
                                    className="group flex items-center justify-between border-b border-slate-100 px-3 py-4 text-base font-medium text-[#102F55]"
                                >
                                    <span>Solutions</span>

                                    <span className="text-[#F7C600] transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>

                                {/* About */}
                                <Link
                                    to="/#about"
                                    onClick={closeMenu}
                                    className="group flex items-center justify-between px-3 py-4 text-base font-medium text-[#102F55]"
                                >
                                    <span>About</span>

                                    <span className="text-[#F7C600] transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>

                            </div>

                            {/* Mobile Contact */}
                            <Link
                                to="/#contact"
                                onClick={closeMenu}
                                className="mt-5 flex items-center justify-between rounded-full bg-[#123F73] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#F7C600] hover:text-[#102F55]"
                            >
                                <span>Contact Us</span>

                                <span>→</span>
                            </Link>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;