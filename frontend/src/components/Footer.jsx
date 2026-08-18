import { motion } from "motion/react";
import { Link } from "react-router-dom";

const footerLinks = {
    Company: [
        { name: "About", href: "#about" },
        { name: "Solutions", href: "#solutions" },
        { name: "Products", href: "/products" },
        { name: "Contact", href: "#contact" },
    ],
    Products: [
        { name: "Cleaning Chemicals", href: "/products" },
        { name: "Equipment", href: "/products" },
        { name: "Mops & Tools", href: "/products" },
        { name: "Hotel Amenities", href: "/products" },
    ],
};

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden bg-[#071C35] text-white">

            {/* =====================================================
                BACKGROUND DECORATION
            ===================================================== */}

            <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#F7C600]/[0.06] blur-[120px]" />

            <div className="pointer-events-none absolute -bottom-40 left-1/4 h-[350px] w-[350px] rounded-full bg-[#123F73]/60 blur-[100px]" />

            <motion.div
                animate={{
                    rotate: [0, 8, 0],
                    scale: [1, 1.04, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute right-[8%] top-20 hidden h-40 w-40 rounded-full border border-[#F7C600]/10 lg:block"
            />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* =================================================
                    TOP FOOTER
                ================================================= */}

                <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-20">

                    {/* =================================================
                        BRAND
                    ================================================= */}

                    <div>

                        <Link
                            to="/"
                            className="inline-flex items-center"
                        >
                            <span className="text-3xl font-bold tracking-tight text-white">
                                auston
                            </span>

                            <span className="ml-2 h-2.5 w-2.5 rounded-full bg-[#F7C600]" />
                        </Link>

                        <p className="mt-6 max-w-md text-sm leading-7 text-white/45 sm:text-base">
                            Professional hygiene, cleaning and
                            hospitality solutions for demanding
                            environments.
                        </p>

                        {/* Yellow statement */}

                        <div className="mt-8 flex items-center gap-3">

                            <span className="h-px w-10 bg-[#F7C600]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F7C600]">
                                We Deliver Hygiene.
                            </span>

                        </div>

                    </div>


                    {/* =================================================
                        COMPANY LINKS
                    ================================================= */}

                    <div>

                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                            Company
                        </h3>

                        <ul className="mt-6 space-y-4">

                            {footerLinks.Company.map((link) => (

                                <li key={link.name}>

                                    {link.href.startsWith("/") ? (
                                        <Link
                                            to={link.href}
                                            className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                                        >
                                            <span className="h-px w-0 bg-[#F7C600] transition-all duration-300 group-hover:w-3" />

                                            {link.name}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                                        >
                                            <span className="h-px w-0 bg-[#F7C600] transition-all duration-300 group-hover:w-3" />

                                            {link.name}
                                        </a>
                                    )}

                                </li>

                            ))}

                        </ul>

                    </div>


                    {/* =================================================
                        PRODUCTS LINKS
                    ================================================= */}

                    <div>

                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                            Product Categories
                        </h3>

                        <ul className="mt-6 space-y-4">

                            {footerLinks.Products.map((link) => (

                                <li key={link.name}>

                                    <Link
                                        to={link.href}
                                        className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                                    >
                                        <span className="h-px w-0 bg-[#F7C600] transition-all duration-300 group-hover:w-3" />

                                        {link.name}
                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>

                </div>


                {/* =================================================
                    CONTACT STRIP
                ================================================= */}

                <div className="border-y border-white/[0.07] py-8">

                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                        <div>

                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F7C600]">
                                Let's talk
                            </p>

                            <p className="mt-2 text-sm text-white/45">
                                Looking for professional hygiene solutions?
                            </p>

                        </div>

                        <a
                            href="#contact"
                            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#F7C600] px-6 py-3 text-sm font-semibold text-[#102F55] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#F7C600]/20"
                        >
                            Contact Us

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>

                    </div>

                </div>


                {/* =================================================
                    BOTTOM BAR
                ================================================= */}

                <div className="flex flex-col gap-5 py-7 text-xs sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-white/30">
                        © {currentYear} Auston Hospitality. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">

                        <a
                            href="#home"
                            className="text-white/30 transition-colors hover:text-white/70"
                        >
                            Back to top
                        </a>

                        <span className="h-1 w-1 rounded-full bg-[#F7C600]" />

                        <span className="text-white/30">
                            Professional Hygiene Solutions
                        </span>

                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;