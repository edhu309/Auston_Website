import { motion } from "motion/react";

function Navbar() {
    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="fixed top-0 left-0 z-50 w-full"
        >
            <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/90 px-6 py-3 shadow-lg backdrop-blur-md">

                {/* Logo */}
                <div className="flex items-center">
                    <div className="text-2xl font-extrabold tracking-tight text-[#123F73]">
                        auston
                    </div>

                    <div className="ml-2 h-2 w-2 rounded-full bg-[#F7C600]" />
                </div>

                {/* Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <a
                        href="#home"
                        className="group relative text-sm font-medium text-gray-700 transition-colors hover:text-[#123F73]"
                    >
                        Home
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#F7C600] transition-all duration-300 group-hover:w-full" />
                    </a>

                    <a
                        href="#products"
                        className="group relative text-sm font-medium text-gray-700 transition-colors hover:text-[#123F73]"
                    >
                        Products
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#F7C600] transition-all duration-300 group-hover:w-full" />
                    </a>

                    <a
                        href="#solutions"
                        className="group relative text-sm font-medium text-gray-700 transition-colors hover:text-[#123F73]"
                    >
                        Solutions
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#F7C600] transition-all duration-300 group-hover:w-full" />
                    </a>

                    <a
                        href="#about"
                        className="group relative text-sm font-medium text-gray-700 transition-colors hover:text-[#123F73]"
                    >
                        About
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#F7C600] transition-all duration-300 group-hover:w-full" />
                    </a>
                </div>

                {/* Contact button */}
                <a
                    href="#contact"
                    className="hidden rounded-full bg-[#123F73] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0D315A] hover:shadow-lg md:block"
                >
                    Contact Us
                </a>

                {/* Mobile menu button */}
                <button
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#123F73] text-white md:hidden"
                    aria-label="Open menu"
                >
                    ☰
                </button>
            </div>
        </motion.nav>
    );
}

export default Navbar;