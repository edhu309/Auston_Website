import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import products from "../data/products";

function PopularProducts() {
    const popularProducts = products.filter(
        (product) => product.popular
    );

    const [activeIndex, setActiveIndex] = useState(0);

    const activeProduct = popularProducts[activeIndex];

    const nextProduct = () => {
        setActiveIndex((current) =>
            current === popularProducts.length - 1
                ? 0
                : current + 1
        );
    };

    const previousProduct = () => {
        setActiveIndex((current) =>
            current === 0
                ? popularProducts.length - 1
                : current - 1
        );
    };

    const goToProduct = (index) => {
        setActiveIndex(index);
    };

    return (
        <section
            id="popular-products"
            className="relative overflow-hidden bg-[#F8F9FB] py-28"
        >

            {/* ==================================================
          BACKGROUND DECORATION
      ================================================== */}

            <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#F7C600]/10 blur-[120px]" />

            <div className="pointer-events-none absolute -right-40 bottom-[-100px] h-[500px] w-[500px] rounded-full bg-[#123F73]/10 blur-[120px]" />

            {/* Decorative yellow circle */}
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="pointer-events-none absolute right-[8%] top-[12%] hidden h-28 w-28 rounded-full border border-[#F7C600]/40 lg:block"
            />

            {/* ==================================================
          CONTAINER
      ================================================== */}

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* ==================================================
            HEADER
        ================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
                >

                    <div className="max-w-2xl">

                        {/* Small label */}
                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-2.5 w-2.5 rounded-full bg-[#F7C600]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#123F73]">
                                Featured Collection
                            </span>

                        </div>

                        <h2 className="text-5xl font-bold tracking-[-0.03em] text-[#102F55] sm:text-6xl">
                            Popular
                            <span className="text-[#123F73]">
                                {" "}Products.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
                            Discover some of the solutions trusted across
                            professional hygiene, hospitality and facility
                            environments.
                        </p>

                    </div>

                    {/* View all */}
                    <motion.a
                        href="/products"
                        whileHover={{
                            x: 5,
                        }}
                        className="group flex w-fit items-center gap-4 font-semibold text-[#123F73]"
                    >

                        <span>
                            View all products
                        </span>

                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7C600] text-[#102F55] shadow-lg shadow-[#F7C600]/20 transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>

                    </motion.a>

                </motion.div>

                {/* ==================================================
            MAIN SHOWCASE
        ================================================== */}

                <div className="relative grid items-center gap-12 lg:grid-cols-[0.8fr_1.7fr]">

                    {/* ==================================================
              LEFT PRODUCT INFORMATION
          ================================================== */}

                    <div className="relative z-10">

                        {/* Product number */}
                        <div className="mb-8 flex items-center gap-4">

                            <span className="text-sm font-medium text-slate-400">
                                0{activeIndex + 1}
                            </span>

                            <div className="h-px w-14 bg-[#F7C600]" />

                            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                                Featured
                            </span>

                        </div>

                        <AnimatePresence mode="wait">

                            <motion.div
                                key={activeProduct.id}
                                initial={{
                                    opacity: 0,
                                    y: 20,
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
                                    duration: 0.4,
                                }}
                            >

                                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#123F73]">
                                    {activeProduct.category}
                                </p>

                                <h3 className="max-w-md text-4xl font-bold leading-tight tracking-[-0.03em] text-[#102F55] sm:text-5xl">
                                    {activeProduct.name}
                                </h3>

                                <p className="mt-6 max-w-md text-base leading-7 text-slate-500">
                                    {activeProduct.description}
                                </p>

                                <motion.a
                                    href="/products"
                                    whileHover={{
                                        x: 5,
                                    }}
                                    className="mt-8 flex w-fit items-center gap-3 text-sm font-semibold text-[#123F73]"
                                >

                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7C600] text-[#102F55]">
                                        →
                                    </span>

                                    Explore product

                                </motion.a>

                            </motion.div>

                        </AnimatePresence>

                        {/* ==================================================
                CONTROLS
            ================================================== */}

                        <div className="mt-12 flex items-center gap-3">

                            <button
                                onClick={previousProduct}
                                aria-label="Previous product"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#123F73]/15 bg-white text-[#123F73] shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-[#F7C600] hover:bg-[#F7C600]"
                            >
                                ←
                            </button>

                            <button
                                onClick={nextProduct}
                                aria-label="Next product"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#123F73] text-white shadow-lg transition-all duration-300 hover:translate-x-1 hover:bg-[#F7C600] hover:text-[#102F55]"
                            >
                                →
                            </button>

                            <span className="ml-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                                Explore
                            </span>

                        </div>

                    </div>

                    {/* ==================================================
              PRODUCT VISUAL
          ================================================== */}

                    <div className="relative h-[500px]">

                        {/* Yellow background circle */}
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute right-[12%] top-1/2 h-[390px] w-[390px] -translate-y-1/2 rounded-full bg-[#F7C600]/15"
                        />

                        {/* Navy circle */}
                        <div className="absolute right-[5%] top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full border border-[#123F73]/10 bg-[#123F73]/5" />

                        {/* Main product card */}
                        <AnimatePresence mode="wait">

                            <motion.div
                                key={activeProduct.id}
                                initial={{
                                    opacity: 0,
                                    scale: 0.92,
                                    x: 40,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    x: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.92,
                                    x: -40,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group absolute right-[10%] top-1/2 h-[430px] w-[330px] -translate-y-1/2 overflow-hidden rounded-[32px] bg-[#123F73] shadow-[0_30px_80px_rgba(16,47,85,0.2)] sm:w-[380px]"
                            >

                                {/* Product image */}
                                {/* Product image */}
                                <img
                                    src={activeProduct.image}
                                    alt={activeProduct.name}
                                    className="absolute inset-0 z-10 h-full w-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#174F8F] via-[#123F73] to-[#071C35]" />

                                {/* Yellow glow */}
                                <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7C600]/20 blur-3xl" />

                                {/* Product number */}
                                <div className="absolute left-6 top-6 z-20">

                                    <span className="text-5xl font-bold text-white/20">
                                        0{activeIndex + 1}
                                    </span>

                                </div>

                                {/* Category */}
                                <div className="absolute right-6 top-6 z-20">

                                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                                        {activeProduct.category}
                                    </span>

                                </div>

                                {/* Bottom content */}
                                <div className="absolute bottom-0 left-0 right-0 z-20 p-7">

                                    <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#071C35] to-transparent" />

                                    <div className="relative">

                                        <div className="mb-3 h-1 w-10 rounded-full bg-[#F7C600]" />

                                        <h4 className="text-2xl font-semibold text-white">
                                            {activeProduct.name}
                                        </h4>

                                        <div className="mt-5 flex items-center justify-between">

                                            <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                                                Auston Hospitality
                                            </span>

                                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7C600] text-[#102F55] transition-transform duration-300 group-hover:translate-x-1">
                                                →
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </motion.div>

                        </AnimatePresence>

                        {/* ==================================================
                SIDE PREVIEW CARDS
            ================================================== */}

                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-[8%] right-[-2%] hidden h-[170px] w-[120px] overflow-hidden rounded-2xl border-4 border-white bg-[#123F73] shadow-xl md:block"
                        >

                            {popularProducts[
                                (activeIndex + 1) % popularProducts.length
                            ] && (
                                    <img
                                        src={
                                            popularProducts[
                                                (activeIndex + 1) %
                                                popularProducts.length
                                            ].image
                                        }
                                        alt=""
                                        className="h-full w-full object-cover opacity-70"
                                    />
                                )}

                            <div className="absolute inset-0 bg-[#123F73]/30" />

                        </motion.div>

                        <motion.div
                            animate={{
                                y: [0, 8, 0],
                            }}
                            transition={{
                                duration: 4.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute left-[-2%] top-[10%] hidden h-[140px] w-[100px] overflow-hidden rounded-2xl border-4 border-white bg-[#123F73] shadow-xl md:block"
                        >

                            {popularProducts[
                                activeIndex === 0
                                    ? popularProducts.length - 1
                                    : activeIndex - 1
                            ] && (
                                    <img
                                        src={
                                            popularProducts[
                                                activeIndex === 0
                                                    ? popularProducts.length - 1
                                                    : activeIndex - 1
                                            ].image
                                        }
                                        alt=""
                                        className="h-full w-full object-cover opacity-70"
                                    />
                                )}

                            <div className="absolute inset-0 bg-[#123F73]/30" />

                        </motion.div>

                    </div>

                </div>

                {/* ==================================================
            PAGINATION
        ================================================== */}

                <div className="mt-12 flex items-center justify-center gap-2">

                    {popularProducts.map((product, index) => (
                        <button
                            key={product.id}
                            onClick={() => goToProduct(index)}
                            aria-label={`View product ${index + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? "w-10 bg-[#F7C600]"
                                    : "w-2 bg-[#123F73]/20 hover:bg-[#123F73]/50"
                                }`}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default PopularProducts;