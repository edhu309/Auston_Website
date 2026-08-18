import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "motion/react";

function Home() {
    const { scrollY } = useScroll();

    const smoothScroll = useSpring(scrollY, {
        stiffness: 100,
        damping: 30,
        mass: 0.5,
    });

    const circleY = useTransform(smoothScroll, [0, 800], [0, -90]);
    const blobY = useTransform(smoothScroll, [0, 800], [0, 120]);
    const decorativeY = useTransform(smoothScroll, [0, 800], [0, -60]);

    return (
        <main id="home" className="overflow-hidden bg-white">

            {/* ================= HERO ================= */}
            <section className="relative min-h-screen overflow-hidden bg-[#F7F9FC]">

                {/* Background glow */}
                <div className="pointer-events-none absolute inset-0">

                    <motion.div
                        animate={{
                            scale: [1, 1.08, 1],
                            opacity: [0.4, 0.6, 0.4],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#F7C600]/15 blur-[100px]"
                    />

                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.25, 0.4, 0.25],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                        className="absolute bottom-[-150px] right-[-100px] h-[500px] w-[500px] rounded-full bg-[#123F73]/10 blur-[120px]"
                    />

                </div>

                {/* Small top-right decorative shape */}
                <motion.div
                    style={{ y: decorativeY }}
                    className="pointer-events-none absolute right-[8%] top-[10%] hidden h-24 w-24 rotate-12 rounded-[30%] border-2 border-[#F7C600]/50 lg:block"
                />

                {/* Yellow decorative blob */}
                <motion.div
                    style={{ y: blobY }}
                    animate={{
                        rotate: [0, 8, -4, 0],
                        scale: [1, 1.05, 0.98, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute bottom-[8%] left-[38%] hidden h-16 w-16 rounded-[35%] bg-[#F7C600]/80 lg:block"
                />

                {/* Main container */}
                <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-8">

                    {/* ================= LEFT CONTENT ================= */}
                    <div className="w-full lg:w-[48%]">

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.1,
                            }}
                            className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#123F73]/10 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md"
                        >

                            <span className="relative flex h-2.5 w-2.5">

                                <motion.span
                                    animate={{
                                        scale: [1, 1.8, 1],
                                        opacity: [1, 0, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                    className="absolute inset-0 rounded-full bg-[#F7C600]"
                                />

                                <span className="relative h-2.5 w-2.5 rounded-full bg-[#F7C600]" />

                            </span>

                            <span className="text-sm font-medium tracking-wide text-[#123F73]">
                                Auston Hospitality
                            </span>

                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 35 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.9,
                                delay: 0.25,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="max-w-2xl text-6xl font-bold leading-[0.98] tracking-[-0.04em] text-[#102F55] sm:text-7xl lg:text-[82px]"
                        >
                            We Deliver

                            <span className="mt-2 block text-[#123F73]">
                                Hygiene
                                <span className="text-[#F7C600]">.</span>
                            </span>

                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.6,
                            }}
                            className="mt-10 max-w-lg text-base font-normal leading-7 text-slate-600 sm:text-lg"
                        >
                            Professional hygiene, hospitality and facility solutions
                            designed to help modern environments stay cleaner, safer
                            and more efficient.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.8,
                            }}
                            className="mt-9 flex flex-wrap items-center gap-4"
                        >

                            {/* Primary button */}
                            <motion.a
                                href="#products"
                                whileHover={{
                                    y: -4,
                                    scale: 1.02,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-[#F7C600] px-7 py-4 font-semibold text-[#102F55] shadow-lg shadow-[#F7C600]/20"
                            >

                                <motion.span
                                    initial={{ x: "-120%" }}
                                    whileHover={{ x: "120%" }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-y-0 w-1/3 skew-x-12 bg-white/30"
                                />

                                <span className="relative">
                                    Explore Products
                                </span>

                                <motion.span
                                    className="relative text-lg"
                                    whileHover={{ x: 5 }}
                                >
                                    →
                                </motion.span>

                            </motion.a>

                            {/* Secondary button */}
                            <motion.a
                                href="#about"
                                whileHover={{
                                    y: -4,
                                    borderColor: "#123F73",
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                className="rounded-full border border-[#123F73]/20 bg-white/50 px-7 py-4 font-medium text-[#123F73] shadow-sm backdrop-blur-md transition-colors duration-300 hover:bg-white"
                            >
                                Discover Auston
                            </motion.a>

                        </motion.div>

                        {/* Trust row */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 1.1,
                            }}
                            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
                        >

                            <div className="flex items-center gap-3">

                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#123F73]/5">
                                    <span className="text-sm text-[#123F73]">
                                        ✓
                                    </span>
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-[#102F55]">
                                        Quality Assured
                                    </p>

                                    <p className="text-xs text-slate-400">
                                        Reliable solutions
                                    </p>
                                </div>

                            </div>

                            <div className="hidden h-8 w-px bg-slate-200 sm:block" />

                            <div className="flex items-center gap-3">

                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F7C600]/20">
                                    <span className="text-sm text-[#123F73]">
                                        24
                                    </span>
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-[#102F55]">
                                        Facility Support
                                    </p>

                                    <p className="text-xs text-slate-400">
                                        When you need it
                                    </p>
                                </div>

                            </div>

                        </motion.div>

                    </div>

                    {/* ================= RIGHT VISUAL ================= */}
                    <div className="relative hidden h-[650px] w-[52%] lg:block">

                        {/* Outer circle */}
                        <motion.div
                            style={{ y: circleY }}
                            className="absolute right-[-60px] top-1/2 h-[510px] w-[510px] -translate-y-1/2 rounded-full border border-[#F7C600]/40 bg-[#123F73] shadow-[0_30px_100px_rgba(18,63,115,0.18)]"
                        >

                            {/* Middle circle */}
                            <div className="absolute inset-[18px] rounded-full bg-[#174F8F]" />

                            {/* Inner circle */}
                            <div className="absolute inset-[42px] rounded-full border border-white/10 bg-[#123F73]" />

                            {/* Inner glow */}
                            <div className="absolute inset-[75px] rounded-full bg-[#174F8F]/70" />

                        </motion.div>

                        {/* Rotating ring */}
                        <motion.div
                            style={{ y: circleY }}
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute right-[-40px] top-1/2 h-[475px] w-[475px] -translate-y-1/2 rounded-full border border-dashed border-[#F7C600]/40"
                        />

                        {/* Central circular card */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.7,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={{
                                scale: 1.04,
                            }}
                            className="absolute right-[70px] top-1/2 flex h-[310px] w-[310px] -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/90 bg-white/95 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                        >

                            {/* Spinning star */}
                            <motion.div
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-[#F7C600]/15"
                            >
                                <span className="text-5xl text-[#F7C600]">
                                    ✦
                                </span>
                            </motion.div>

                            <p className="text-2xl font-bold tracking-tight text-[#102F55]">
                                Clean Spaces.
                            </p>

                            <p className="mt-1 text-lg font-medium text-[#123F73]">
                                Better Experiences.
                            </p>

                            <div className="mt-5 h-1 w-10 rounded-full bg-[#F7C600]" />

                        </motion.div>

                        {/* Top-right glass card */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 40,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                y: [0, -12, 0],
                            }}
                            transition={{
                                opacity: {
                                    duration: 0.7,
                                    delay: 1,
                                },
                                x: {
                                    duration: 0.7,
                                    delay: 1,
                                },
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                            className="absolute right-[-15px] top-[13%] rounded-2xl border border-white/70 bg-white/70 px-5 py-4 shadow-xl backdrop-blur-xl"
                        >

                            <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7C600]">
                                    <span className="text-[#102F55]">
                                        ✦
                                    </span>
                                </div>

                                <div>

                                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                                        Solutions
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-[#102F55]">
                                        Hospitality
                                    </p>

                                </div>

                            </div>

                        </motion.div>

                        {/* Bottom-left glass card */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -40,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                y: [0, 10, 0],
                            }}
                            transition={{
                                opacity: {
                                    duration: 0.7,
                                    delay: 1.2,
                                },
                                x: {
                                    duration: 0.7,
                                    delay: 1.2,
                                },
                                y: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                            className="absolute bottom-[13%] left-[0%] rounded-2xl border border-white/70 bg-white/70 px-5 py-4 shadow-xl backdrop-blur-xl"
                        >

                            <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#123F73]">

                                    <motion.span
                                        animate={{
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                        className="h-2.5 w-2.5 rounded-full bg-[#F7C600]"
                                    />

                                </div>

                                <div>

                                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                                        Quality
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-[#102F55]">
                                        Trusted Solutions
                                    </p>

                                </div>

                            </div>

                        </motion.div>

                        {/* Yellow organic blob */}
                        <motion.div
                            animate={{
                                rotate: [0, 15, -8, 0],
                                scale: [1, 1.08, 0.96, 1],
                                borderRadius: [
                                    "35% 65% 55% 45%",
                                    "55% 45% 35% 65%",
                                    "45% 55% 65% 35%",
                                    "35% 65% 55% 45%",
                                ],
                            }}
                            transition={{
                                duration: 9,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-[3%] right-[2%] h-24 w-24 bg-[#F7C600] shadow-lg shadow-[#F7C600]/20"
                        />

                    </div>

                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 1.7,
                    }}
                    className="absolute bottom-7 left-1/2 -translate-x-1/2"
                >

                    <div className="flex flex-col items-center gap-2">

                        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">
                            Scroll
                        </span>

                        <motion.span
                            animate={{
                                y: [0, 7, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="text-lg text-[#123F73]"
                        >
                            ↓
                        </motion.span>

                    </div>

                </motion.div>

            </section>

            {/* ================= PRODUCTS PLACEHOLDER ================= */}
            <section
                id="products"
                className="flex min-h-[70vh] items-center justify-center bg-white px-6"
            >

                <div className="text-center">

                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#123F73]">
                        Coming Next
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-[#102F55]">
                        Product Showcase
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#F7C600]" />

                    <p className="mx-auto mt-5 max-w-md text-slate-500">
                        An interactive product experience for the Auston Hospitality
                        portfolio.
                    </p>

                </div>

            </section>

        </main>
    );
}

export default Home;