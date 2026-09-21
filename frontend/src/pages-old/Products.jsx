import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import products from "../data/products";
import ProductModal from "../components/ProductModal";

function Products() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);

    /*
     * Main catalogue categories.
     *
     * These are intentionally kept broad instead of creating
     * a filter for every individual product type.
     */
    const categories = [
        "All",
        "Cleaning Chemicals",
        "Equipment",
        "Mops & Tools",
        "Laundry",
        "Hotel Amenities",
        "Hygiene",
    ];

    /*
     * Filter products
     */
    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter(
                (product) => product.category === activeCategory
            );

    return (
        <main className="min-h-screen overflow-hidden bg-[#F8F9FB]">

            {/* =========================================================
                HERO / PAGE HEADER
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#102F55] pt-36 pb-24">

                {/* Large yellow ambient glow */}
                <div className="pointer-events-none absolute -right-40 -top-32 h-[500px] w-[500px] rounded-full bg-[#F7C600]/15 blur-[130px]" />

                {/* Bottom glow */}
                <div className="pointer-events-none absolute -bottom-40 left-[35%] h-[350px] w-[350px] rounded-full bg-[#F7C600]/10 blur-[120px]" />

                {/* Decorative circle */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="pointer-events-none absolute right-[8%] top-24 hidden h-52 w-52 rounded-full border border-[#F7C600]/20 lg:block"
                />

                <motion.div
                    animate={{
                        rotate: [0, 8, -8, 0],
                        scale: [1, 1.04, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute right-[10%] top-28 hidden h-44 w-44 rounded-full border border-[#F7C600]/30 lg:block"
                />

                {/* Small yellow decorative dot */}
                <motion.div
                    animate={{
                        y: [0, -12, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute right-[22%] top-20 hidden h-4 w-4 rounded-full bg-[#F7C600] lg:block"
                />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3"
                    >
                        <span className="h-2.5 w-2.5 rounded-full bg-[#F7C600] shadow-[0_0_15px_rgba(247,198,0,0.6)]" />

                        <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F7C600]">
                            Auston Hospitality
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.1,
                        }}
                        className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
                    >
                        Products
                        <span className="text-[#F7C600]">.</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2,
                        }}
                        className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
                    >
                        Explore our professional hygiene, cleaning,
                        equipment, laundry and hospitality solutions
                        designed for modern environments.
                    </motion.p>

                    {/* Small catalogue information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.3,
                        }}
                        className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3"
                    >
                        <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#F7C600]" />

                            <span className="text-sm text-white/60">
                                Professional Solutions
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#F7C600]" />

                            <span className="text-sm text-white/60">
                                Hospitality & Hygiene
                            </span>
                        </div>
                    </motion.div>

                </div>
            </section>


            {/* =========================================================
                PRODUCT CATALOGUE
            ========================================================= */}

            <section className="relative bg-[#F8F9FB] px-6 py-16 lg:py-20">

                {/* Very subtle background decoration */}
                <div className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full bg-[#F7C600]/5 blur-3xl" />

                <div className="relative mx-auto max-w-7xl">

                    {/* Section heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="mb-10"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#123F73]">
                            Explore our catalogue
                        </p>

                        <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">

                            <div>
                                <h2 className="text-3xl font-semibold tracking-tight text-[#102F55] sm:text-4xl">
                                    Find the right solution.
                                </h2>

                                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                                    Browse our range of professional products
                                    across cleaning, equipment, hygiene,
                                    laundry and hospitality.
                                </p>
                            </div>

                            {/* Product count */}
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <span className="font-semibold text-[#123F73]">
                                    {filteredProducts.length}
                                </span>

                                <span>
                                    {filteredProducts.length === 1
                                        ? "product"
                                        : "products"}
                                </span>
                            </div>

                        </div>
                    </motion.div>


                    {/* =================================================
                        CATEGORY FILTERS
                    ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">

                            {categories.map((category) => {

                                const isActive =
                                    activeCategory === category;

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() =>
                                            setActiveCategory(category)
                                        }
                                        className={`
                                            relative shrink-0
                                            rounded-full
                                            border
                                            px-5
                                            py-3
                                            text-sm
                                            font-medium
                                            transition-all
                                            duration-300
                                            ${isActive
                                                ? "border-[#F7C600] bg-[#F7C600] text-[#102F55] shadow-lg shadow-[#F7C600]/20"
                                                : "border-slate-200 bg-white text-slate-600 hover:border-[#F7C600] hover:bg-[#FFF9DB] hover:text-[#123F73]"
                                            }
                                        `}
                                    >
                                        {category}
                                    </button>
                                );
                            })}

                        </div>
                    </motion.div>


                    {/* =================================================
                        PRODUCT GRID
                    ================================================= */}

                    <AnimatePresence mode="popLayout">

                        {filteredProducts.length > 0 ? (

                            <motion.div
                                layout
                                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                            >

                                {filteredProducts.map(
                                    (product, index) => (

                                        <motion.article
                                            layout
                                            key={product.id}
                                            initial={{
                                                opacity: 0,
                                                y: 30,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                scale: 0.95,
                                            }}
                                            transition={{
                                                duration: 0.45,
                                                delay:
                                                    index * 0.04,
                                            }}
                                            whileHover={{
                                                y: -8,
                                            }}
                                            onClick={() =>
                                                setSelectedProduct(
                                                    product
                                                )
                                            }
                                            className="
                                                group
                                                relative
                                                h-[480px]
                                                cursor-pointer
                                                overflow-hidden
                                                rounded-[28px]
                                                bg-[#123F73]
                                                shadow-[0_15px_40px_rgba(16,47,85,0.12)]
                                                transition-shadow
                                                duration-500
                                                hover:shadow-[0_25px_60px_rgba(16,47,85,0.20)]
                                            "
                                        >

                                            {/* =================================
                                                IMAGE AREA
                                            ================================= */}

                                            <div className="absolute inset-x-0 top-0 h-[335px] overflow-hidden">

                                                {/* Yellow ambient glow */}
                                                <div
                                                    className="
                                                        absolute
                                                        left-1/2
                                                        top-1/2
                                                        z-0
                                                        h-52
                                                        w-52
                                                        -translate-x-1/2
                                                        -translate-y-1/2
                                                        rounded-full
                                                        bg-[#F7C600]/10
                                                        blur-3xl
                                                        transition-all
                                                        duration-700
                                                        group-hover:bg-[#F7C600]/20
                                                        group-hover:scale-125
                                                    "
                                                />

                                                {/* Product image */}
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    loading="lazy"
                                                    className="
                                                        relative
                                                        z-10
                                                        h-full
                                                        w-full
                                                        object-contain
                                                        p-8
                                                        transition-transform
                                                        duration-700
                                                        ease-out
                                                        group-hover:scale-110
                                                    "
                                                />

                                                {/* Top yellow line */}
                                                <div
                                                    className="
                                                        absolute
                                                        left-6
                                                        top-6
                                                        z-20
                                                        h-1
                                                        w-10
                                                        rounded-full
                                                        bg-[#F7C600]
                                                        transition-all
                                                        duration-300
                                                        group-hover:w-16
                                                    "
                                                />

                                                {/* Category badge */}
                                                <div className="absolute right-5 top-5 z-20">

                                                    <span
                                                        className="
                                                            rounded-full
                                                            border
                                                            border-white/25
                                                            bg-white/10
                                                            px-4
                                                            py-2
                                                            text-[10px]
                                                            font-semibold
                                                            uppercase
                                                            tracking-[0.18em]
                                                            text-white
                                                            backdrop-blur-md
                                                        "
                                                    >
                                                        {product.category}
                                                    </span>

                                                </div>

                                                {/* Hover overlay */}
                                                <div
                                                    className="
                                                        absolute
                                                        inset-0
                                                        z-10
                                                        bg-gradient-to-t
                                                        from-[#102F55]/30
                                                        via-transparent
                                                        to-transparent
                                                        opacity-0
                                                        transition-opacity
                                                        duration-500
                                                        group-hover:opacity-100
                                                    "
                                                />

                                            </div>


                                            {/* =================================
                                                PRODUCT INFORMATION
                                            ================================= */}

                                            <div
                                                className="
                                                    absolute
                                                    bottom-0
                                                    left-0
                                                    right-0
                                                    h-[175px]
                                                    bg-gradient-to-t
                                                    from-[#071C35]
                                                    via-[#102F55]
                                                    to-[#123F73]
                                                    px-6
                                                    pb-6
                                                    pt-5
                                                "
                                            >

                                                {/* Product name */}
                                                <h2
                                                    className="
                                                        line-clamp-2
                                                        text-2xl
                                                        font-semibold
                                                        leading-tight
                                                        text-white
                                                    "
                                                >
                                                    {product.name}
                                                </h2>


                                                {/* Description */}
                                                <div
                                                    className="
                                                        mt-3
                                                        max-h-0
                                                        overflow-hidden
                                                        opacity-0
                                                        transition-all
                                                        duration-500
                                                        group-hover:max-h-12
                                                        group-hover:opacity-100
                                                    "
                                                >
                                                    <p
                                                        className="
                                                            line-clamp-2
                                                            text-sm
                                                            leading-5
                                                            text-white/65
                                                        "
                                                    >
                                                        {product.description}
                                                    </p>
                                                </div>


                                                {/* View details */}
                                                <div className="absolute bottom-5 left-6 flex items-center gap-3">

                                                    <motion.span
                                                        whileHover={{
                                                            scale: 1.08,
                                                        }}
                                                        className="
                                                            flex
                                                            h-10
                                                            w-10
                                                            items-center
                                                            justify-center
                                                            rounded-full
                                                            bg-[#F7C600]
                                                            text-lg
                                                            font-medium
                                                            text-[#102F55]
                                                            shadow-lg
                                                            shadow-[#F7C600]/10
                                                            transition-transform
                                                            duration-300
                                                            group-hover:translate-x-1
                                                        "
                                                    >
                                                        →
                                                    </motion.span>

                                                    <span className="text-sm font-medium text-white">
                                                        View details
                                                    </span>

                                                </div>

                                            </div>

                                        </motion.article>

                                    )
                                )}

                            </motion.div>

                        ) : (

                            /* =============================================
                                EMPTY STATE
                            ============================================= */

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                className="
                                    flex
                                    min-h-[300px]
                                    flex-col
                                    items-center
                                    justify-center
                                    rounded-[28px]
                                    border
                                    border-slate-200
                                    bg-white
                                    px-6
                                    text-center
                                "
                            >

                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF8D8]">

                                    <span className="text-2xl text-[#F7C600]">
                                        ✦
                                    </span>

                                </div>

                                <h3 className="mt-5 text-xl font-semibold text-[#102F55]">
                                    Products coming soon
                                </h3>

                                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                                    We are currently updating this section
                                    with products from our catalogue.
                                </p>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveCategory("All")
                                    }
                                    className="
                                        mt-6
                                        rounded-full
                                        bg-[#F7C600]
                                        px-6
                                        py-3
                                        text-sm
                                        font-semibold
                                        text-[#102F55]
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:shadow-lg
                                        hover:shadow-[#F7C600]/20
                                    "
                                >
                                    View all products
                                </button>

                            </motion.div>

                        )}

                    </AnimatePresence>


                    {/* =================================================
                        BOTTOM CATALOGUE MESSAGE
                    ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="
                            mt-20
                            overflow-hidden
                            rounded-[32px]
                            bg-[#102F55]
                            p-8
                            sm:p-10
                            lg:p-12
                        "
                    >

                        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

                            <div className="max-w-2xl">

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F7C600]">
                                    Auston Hospitality
                                </p>

                                <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                                    Professional solutions for
                                    demanding environments.
                                </h3>

                                <p className="mt-4 text-sm leading-6 text-white/60 sm:text-base">
                                    From cleaning chemicals and equipment
                                    to hotel amenities and hygiene
                                    solutions, our portfolio supports
                                    a wide range of professional
                                    environments.
                                </p>

                            </div>

                            <div className="shrink-0">

                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F7C600] text-2xl text-[#102F55]">
                                    →
                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </section>


            {/* =========================================================
                PRODUCT MODAL
            ========================================================= */}

            <ProductModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />

        </main>
    );
}

export default Products;