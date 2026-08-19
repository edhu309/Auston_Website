import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "motion/react";

import { useRef } from "react";

import PopularProducts from "../components/PopularProducts";
import Solutions from "../components/Solutions";
import WhyAuston from "../components/WhyAuston";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";


/*
================================================================
    HAPPY CLIENT LOGOS

    Replace these paths with your actual client logo paths.

    Example:
    "/clients/greenwoods.png"
    "/clients/amberdale.png"

================================================================
*/

const clientLogos = [
    "/clients/client-01.png",
    "/clients/client-02.png",
    "/clients/client-03.png",
    "/clients/client-04.png",
    "/clients/client-05.png",
    "/clients/client-06.png",
    "/clients/client-07.png",
    "/clients/client-08.png",
    "/clients/client-09.png",
    "/clients/client-10.png",
    "/clients/client-11.png",
    "/clients/client-12.png",
    "/clients/client-13.png",
    "/clients/client-14.png",
    "/clients/client-15.png",
    "/clients/client-16.png",
];


function Home() {

    /*
    ================================================================
        HERO SCROLL
    ================================================================
    */

    const heroRef = useRef(null);

    const { scrollY } = useScroll();

    const smoothScroll = useSpring(scrollY, {
        stiffness: 160,
        damping: 35,
        mass: 0.25,
    });


    /*
    ================================================================
        HERO FADE / MOVEMENT
    ================================================================
    */

    const heroY = useTransform(
        smoothScroll,
        [0, 300, 750],
        [0, 35, 100]
    );

    const heroOpacity = useTransform(
        smoothScroll,
        [0, 300, 700],
        [1, 0.75, 0]
    );

    const heroScale = useTransform(
        smoothScroll,
        [0, 700],
        [1, 0.95]
    );


    /*
    ================================================================
        HERO PARALLAX
    ================================================================
    */

    const circleY = useTransform(
        smoothScroll,
        [0, 800],
        [0, -90]
    );

    const blobY = useTransform(
        smoothScroll,
        [0, 800],
        [0, 120]
    );

    const decorativeY = useTransform(
        smoothScroll,
        [0, 800],
        [0, -60]
    );


    return (
        <main
            id="home"
            className="overflow-hidden bg-white"
        >

            {/* ======================================================
                HERO
            ====================================================== */}

            <section
                ref={heroRef}
                className="
                    sticky
                    top-0
                    z-10
                    h-screen
                    min-h-[700px]
                    overflow-hidden
                    bg-[#F7F9FC]
                "
            >

                <motion.div
                    style={{
                        y: heroY,
                        opacity: heroOpacity,
                        scale: heroScale,
                    }}
                    className="
                        relative
                        h-full
                        w-full
                        origin-center
                    "
                >

                    {/* ==================================================
                        BACKGROUND GLOWS
                    ================================================== */}

                    <div className="pointer-events-none absolute inset-0">

                        <motion.div
                            animate={{
                                scale: [1, 1.08, 1],
                                opacity: [0.35, 0.55, 0.35],
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                                absolute
                                -left-32
                                top-20
                                h-[420px]
                                w-[420px]
                                rounded-full
                                bg-[#F7C600]/15
                                blur-[100px]
                            "
                        />

                        <motion.div
                            animate={{
                                scale: [1, 1.15, 1],
                                opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                            className="
                                absolute
                                bottom-[-150px]
                                right-[-100px]
                                h-[500px]
                                w-[500px]
                                rounded-full
                                bg-[#123F73]/10
                                blur-[120px]
                            "
                        />

                    </div>


                    {/* ==================================================
                        YELLOW FLOATING BALLS
                    ================================================== */}

                    <motion.div
                        animate={{
                            y: [0, -25, 0],
                            x: [0, 12, 0],
                            scale: [1, 1.12, 1],
                        }}
                        transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="
                            pointer-events-none
                            absolute
                            left-[7%]
                            top-[22%]
                            h-3
                            w-3
                            rounded-full
                            bg-[#F7C600]
                            shadow-[0_0_18px_rgba(247,198,0,0.55)]
                        "
                    />

                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            x: [0, -10, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                        }}
                        className="
                            pointer-events-none
                            absolute
                            left-[18%]
                            top-[14%]
                            h-2
                            w-2
                            rounded-full
                            bg-[#F7C600]/80
                        "
                    />

                    <motion.div
                        animate={{
                            y: [0, -30, 0],
                            scale: [1, 1.25, 1],
                        }}
                        transition={{
                            duration: 5.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                        className="
                            pointer-events-none
                            absolute
                            left-[43%]
                            top-[12%]
                            h-4
                            w-4
                            rounded-full
                            bg-[#F7C600]
                            shadow-[0_0_22px_rgba(247,198,0,0.4)]
                        "
                    />

                    <motion.div
                        animate={{
                            y: [0, 25, 0],
                            x: [0, 15, 0],
                        }}
                        transition={{
                            duration: 4.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.5,
                        }}
                        className="
                            pointer-events-none
                            absolute
                            right-[28%]
                            top-[18%]
                            h-2.5
                            w-2.5
                            rounded-full
                            bg-[#F7C600]
                        "
                    />

                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            x: [0, -12, 0],
                            scale: [1, 0.8, 1],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.8,
                        }}
                        className="
                            pointer-events-none
                            absolute
                            right-[9%]
                            top-[35%]
                            h-3
                            w-3
                            rounded-full
                            bg-[#F7C600]
                            shadow-[0_0_18px_rgba(247,198,0,0.5)]
                        "
                    />

                    <motion.div
                        animate={{
                            y: [0, 30, 0],
                            scale: [1, 1.15, 1],
                        }}
                        transition={{
                            duration: 5.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2,
                        }}
                        className="
                            pointer-events-none
                            absolute
                            right-[4%]
                            bottom-[27%]
                            h-2
                            w-2
                            rounded-full
                            bg-[#F7C600]/80
                        "
                    />

                    <motion.div
                        animate={{
                            y: [0, -18, 0],
                            x: [0, 10, 0],
                        }}
                        transition={{
                            duration: 4.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.2,
                        }}
                        className="
                            pointer-events-none
                            absolute
                            left-[6%]
                            bottom-[28%]
                            h-2
                            w-2
                            rounded-full
                            bg-[#F7C600]
                        "
                    />

                    <motion.div
                        animate={{
                            y: [0, 22, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2.2,
                        }}
                        className="
                            pointer-events-none
                            absolute
                            left-[32%]
                            bottom-[14%]
                            h-3
                            w-3
                            rounded-full
                            bg-[#F7C600]/90
                        "
                    />

                    <motion.div
                        animate={{
                            y: [0, -25, 0],
                            x: [0, -8, 0],
                        }}
                        transition={{
                            duration: 4.7,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.7,
                        }}
                        className="
                            pointer-events-none
                            absolute
                            right-[37%]
                            bottom-[10%]
                            h-2
                            w-2
                            rounded-full
                            bg-[#F7C600]
                        "
                    />


                    {/* ==================================================
                        TOP RIGHT DECORATIVE SHAPE
                    ================================================== */}

                    <motion.div
                        style={{
                            y: decorativeY,
                        }}
                        className="
                            pointer-events-none
                            absolute
                            right-[8%]
                            top-[10%]
                            hidden
                            h-24
                            w-24
                            rotate-12
                            rounded-[30%]
                            border-2
                            border-[#F7C600]/50
                            lg:block
                        "
                    />


                    {/* ==================================================
                        LARGE YELLOW BLOB
                    ================================================== */}

                    <motion.div
                        style={{
                            y: blobY,
                        }}
                        animate={{
                            rotate: [0, 8, -4, 0],
                            scale: [1, 1.05, 0.98, 1],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="
                            pointer-events-none
                            absolute
                            bottom-[8%]
                            left-[38%]
                            hidden
                            h-16
                            w-16
                            rounded-[35%]
                            bg-[#F7C600]/80
                            shadow-[0_0_35px_rgba(247,198,0,0.2)]
                            lg:block
                        "
                    />


                    {/* ==================================================
                        HERO CONTENT
                    ================================================== */}

                    <div
                        className="
                            relative
                            z-10
                            mx-auto
                            flex
                            h-full
                            max-w-7xl
                            items-center
                            px-6
                            pb-16
                            pt-28
                            lg:px-8
                        "
                    >

                        {/* =================================================
                            LEFT
                        ================================================= */}

                        <div className="w-full lg:w-[48%]">

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.1,
                                }}
                                className="
                                    mb-7
                                    inline-flex
                                    items-center
                                    gap-3
                                    rounded-full
                                    border
                                    border-[#123F73]/10
                                    bg-white/80
                                    px-4
                                    py-2
                                    shadow-sm
                                    backdrop-blur-md
                                "
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
                                        className="
                                            absolute
                                            inset-0
                                            rounded-full
                                            bg-[#F7C600]
                                        "
                                    />

                                    <span
                                        className="
                                            relative
                                            h-2.5
                                            w-2.5
                                            rounded-full
                                            bg-[#F7C600]
                                        "
                                    />

                                </span>

                                <span
                                    className="
                                        text-sm
                                        font-medium
                                        tracking-wide
                                        text-[#123F73]
                                    "
                                >
                                    Auston Hospitality
                                </span>

                            </motion.div>


                            <motion.h1
                                initial={{
                                    opacity: 0,
                                    y: 35,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.25,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
                                    max-w-2xl
                                    text-6xl
                                    font-bold
                                    leading-[0.98]
                                    tracking-[-0.04em]
                                    text-[#102F55]
                                    sm:text-7xl
                                    lg:text-[82px]
                                "
                            >
                                We Deliver

                                <span className="mt-2 block text-[#123F73]">
                                    Hygiene
                                    <span className="text-[#F7C600]">
                                        .
                                    </span>
                                </span>

                            </motion.h1>


                            <motion.p
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.6,
                                }}
                                className="
                                    mt-10
                                    max-w-lg
                                    text-base
                                    leading-7
                                    text-slate-600
                                    sm:text-lg
                                "
                            >
                                Professional hygiene, hospitality and
                                facility solutions designed to help
                                modern environments stay cleaner, safer
                                and more efficient.
                            </motion.p>


                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.8,
                                }}
                                className="
                                    mt-9
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-4
                                "
                            >

                                <motion.a
                                    href="/products"
                                    whileHover={{
                                        y: -4,
                                        scale: 1.02,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    className="
                                        group
                                        relative
                                        flex
                                        items-center
                                        gap-3
                                        overflow-hidden
                                        rounded-full
                                        bg-[#F7C600]
                                        px-7
                                        py-4
                                        font-semibold
                                        text-[#102F55]
                                        shadow-lg
                                        shadow-[#F7C600]/20
                                    "
                                >

                                    <motion.span
                                        initial={{
                                            x: "-120%",
                                        }}
                                        whileHover={{
                                            x: "120%",
                                        }}
                                        transition={{
                                            duration: 0.6,
                                        }}
                                        className="
                                            absolute
                                            inset-y-0
                                            w-1/3
                                            skew-x-12
                                            bg-white/30
                                        "
                                    />

                                    <span className="relative">
                                        Explore Products
                                    </span>

                                    <motion.span
                                        className="relative text-lg"
                                        whileHover={{
                                            x: 5,
                                        }}
                                    >
                                        →
                                    </motion.span>

                                </motion.a>


                                <motion.a
                                    href="#about"
                                    whileHover={{
                                        y: -4,
                                        borderColor: "#123F73",
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    className="
                                        rounded-full
                                        border
                                        border-[#123F73]/20
                                        bg-white/50
                                        px-7
                                        py-4
                                        font-medium
                                        text-[#123F73]
                                        shadow-sm
                                        backdrop-blur-md
                                        transition-colors
                                        duration-300
                                        hover:bg-white
                                    "
                                >
                                    Discover Auston
                                </motion.a>

                            </motion.div>


                            {/* TRUST */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 1.1,
                                }}
                                className="
                                    mt-12
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-x-8
                                    gap-y-4
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#123F73]/5
                                        "
                                    >
                                        <span className="text-sm text-[#123F73]">
                                            ✓
                                        </span>
                                    </div>

                                    <div>

                                        <p
                                            className="
                                                text-sm
                                                font-semibold
                                                text-[#102F55]
                                            "
                                        >
                                            Quality Assured
                                        </p>

                                        <p className="text-xs text-slate-400">
                                            Reliable solutions
                                        </p>

                                    </div>

                                </div>


                                <div
                                    className="
                                        hidden
                                        h-8
                                        w-px
                                        bg-slate-200
                                        sm:block
                                    "
                                />


                                <div className="flex items-center gap-3">

                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#F7C600]/20
                                        "
                                    >
                                        <span className="text-sm text-[#123F73]">
                                            24
                                        </span>
                                    </div>

                                    <div>

                                        <p
                                            className="
                                                text-sm
                                                font-semibold
                                                text-[#102F55]
                                            "
                                        >
                                            Facility Support
                                        </p>

                                        <p className="text-xs text-slate-400">
                                            When you need it
                                        </p>

                                    </div>

                                </div>

                            </motion.div>

                        </div>


                        {/* =================================================
                            RIGHT HERO VISUAL
                        ================================================= */}

                        <div
                            className="
                                relative
                                hidden
                                h-[650px]
                                w-[52%]
                                lg:block
                            "
                        >

                            <motion.div
                                style={{
                                    y: circleY,
                                }}
                                className="
                                    absolute
                                    right-[-60px]
                                    top-1/2
                                    h-[510px]
                                    w-[510px]
                                    -translate-y-1/2
                                    rounded-full
                                    border
                                    border-[#F7C600]/40
                                    bg-[#123F73]
                                    shadow-[0_30px_100px_rgba(18,63,115,0.18)]
                                "
                            >

                                <div className="absolute inset-[18px] rounded-full bg-[#174F8F]" />

                                <div className="absolute inset-[42px] rounded-full border border-white/10 bg-[#123F73]" />

                                <div className="absolute inset-[75px] rounded-full bg-[#174F8F]/70" />

                            </motion.div>


                            <motion.div
                                style={{
                                    y: circleY,
                                }}
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="
                                    absolute
                                    right-[-40px]
                                    top-1/2
                                    h-[475px]
                                    w-[475px]
                                    -translate-y-1/2
                                    rounded-full
                                    border
                                    border-dashed
                                    border-[#F7C600]/40
                                "
                            />


                            {/* CENTRAL CARD */}

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
                                className="
                                    absolute
                                    right-[70px]
                                    top-1/2
                                    flex
                                    h-[310px]
                                    w-[310px]
                                    -translate-y-1/2
                                    flex-col
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/90
                                    bg-white/95
                                    shadow-[0_25px_80px_rgba(0,0,0,0.18)]
                                    backdrop-blur-xl
                                "
                            >

                                <motion.div
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 12,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="
                                        mb-7
                                        flex
                                        h-24
                                        w-24
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#F7C600]/15
                                    "
                                >
                                    <span className="text-5xl text-[#F7C600]">
                                        ✦
                                    </span>
                                </motion.div>

                                <p
                                    className="
                                        text-2xl
                                        font-bold
                                        tracking-tight
                                        text-[#102F55]
                                    "
                                >
                                    Clean Spaces.
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-lg
                                        font-medium
                                        text-[#123F73]
                                    "
                                >
                                    Better Experiences.
                                </p>

                                <div
                                    className="
                                        mt-5
                                        h-1
                                        w-10
                                        rounded-full
                                        bg-[#F7C600]
                                    "
                                />

                            </motion.div>


                            {/* TOP CARD */}

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
                                className="
                                    absolute
                                    right-[-15px]
                                    top-[13%]
                                    rounded-2xl
                                    border
                                    border-white/70
                                    bg-white/70
                                    px-5
                                    py-4
                                    shadow-xl
                                    backdrop-blur-xl
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-[#F7C600]
                                        "
                                    >
                                        <span className="text-[#102F55]">
                                            ✦
                                        </span>
                                    </div>

                                    <div>

                                        <p
                                            className="
                                                text-[10px]
                                                font-medium
                                                uppercase
                                                tracking-[0.2em]
                                                text-slate-400
                                            "
                                        >
                                            Solutions
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                font-semibold
                                                text-[#102F55]
                                            "
                                        >
                                            Hospitality
                                        </p>

                                    </div>

                                </div>

                            </motion.div>


                            {/* BOTTOM CARD */}

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
                                className="
                                    absolute
                                    bottom-[13%]
                                    left-[0%]
                                    rounded-2xl
                                    border
                                    border-white/70
                                    bg-white/70
                                    px-5
                                    py-4
                                    shadow-xl
                                    backdrop-blur-xl
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-[#123F73]
                                        "
                                    >

                                        <motion.span
                                            animate={{
                                                scale: [1, 1.2, 1],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                            className="
                                                h-2.5
                                                w-2.5
                                                rounded-full
                                                bg-[#F7C600]
                                            "
                                        />

                                    </div>

                                    <div>

                                        <p
                                            className="
                                                text-[10px]
                                                font-medium
                                                uppercase
                                                tracking-[0.2em]
                                                text-slate-400
                                            "
                                        >
                                            Quality
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                font-semibold
                                                text-[#102F55]
                                            "
                                        >
                                            Trusted Solutions
                                        </p>

                                    </div>

                                </div>

                            </motion.div>


                            {/* YELLOW BLOB */}

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
                                className="
                                    absolute
                                    bottom-[3%]
                                    right-[2%]
                                    h-24
                                    w-24
                                    bg-[#F7C600]
                                    shadow-lg
                                    shadow-[#F7C600]/20
                                "
                            />

                        </div>

                    </div>


                    {/* SCROLL */}

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
                        className="
                            absolute
                            bottom-7
                            left-1/2
                            -translate-x-1/2
                        "
                    >

                        <div className="flex flex-col items-center gap-2">

                            <span
                                className="
                                    text-[10px]
                                    font-medium
                                    uppercase
                                    tracking-[0.3em]
                                    text-slate-400
                                "
                            >
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

                </motion.div>

            </section>


            {/* ======================================================
                POPULAR PRODUCTS
            ====================================================== */}

            <section
                id="products"
                className="
                    relative
                    z-30
                    overflow-hidden
                    rounded-t-[48px]
                    bg-white
                    shadow-[0_-25px_70px_rgba(16,47,85,0.12)]
                    sm:rounded-t-[64px]
                "
            >

                <PopularProducts />

            </section>


            {/* ======================================================
                SOLUTIONS
            ====================================================== */}

            <Solutions />


            {/* ======================================================
                WHY AUSTON
            ====================================================== */}

            <WhyAuston />


            {/* ======================================================
                HAPPY CLIENTS
            ====================================================== */}

            <section
                id="clients"
                className="
                    relative
                    overflow-hidden
                    bg-white
                    py-24
                    sm:py-28
                    lg:py-32
                "
            >

                {/* ==================================================
                    BACKGROUND
                ================================================== */}

                <div className="pointer-events-none absolute inset-0">

                    {/* Navy glow */}

                    <div
                        className="
                            absolute
                            left-[-180px]
                            top-[20%]
                            h-[420px]
                            w-[420px]
                            rounded-full
                            bg-[#123F73]/5
                            blur-[110px]
                        "
                    />

                    {/* Yellow glow */}

                    <div
                        className="
                            absolute
                            right-[-160px]
                            bottom-[5%]
                            h-[420px]
                            w-[420px]
                            rounded-full
                            bg-[#F7C600]/10
                            blur-[110px]
                        "
                    />

                </div>


                {/* ==================================================
                    FLOATING YELLOW SYMBOL
                ================================================== */}

                <motion.div
                    animate={{
                        y: [0, -18, 0],
                        rotate: [0, 12, -8, 0],
                        scale: [1, 1.08, 0.96, 1],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        pointer-events-none
                        absolute
                        right-[8%]
                        top-[8%]
                        z-10
                    "
                >

                    <div
                        className="
                            relative
                            flex
                            h-24
                            w-24
                            items-center
                            justify-center
                        "
                    >

                        <div
                            className="
                                absolute
                                inset-0
                                rounded-full
                                bg-[#F7C600]/20
                                blur-xl
                            "
                        />

                        <div
                            className="
                                relative
                                h-14
                                w-14
                                rotate-45
                                rounded-[14px]
                                bg-[#F7C600]
                                shadow-[0_12px_30px_rgba(247,198,0,0.25)]
                            "
                        />

                        <div
                            className="
                                absolute
                                h-6
                                w-6
                                rotate-45
                                rounded-[6px]
                                bg-white
                            "
                        />

                    </div>

                </motion.div>


                {/* ==================================================
                    FLOATING DOTS
                ================================================== */}

                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        x: [0, 8, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        pointer-events-none
                        absolute
                        left-[7%]
                        top-[25%]
                        h-3
                        w-3
                        rounded-full
                        bg-[#F7C600]
                        shadow-[0_0_20px_rgba(247,198,0,0.45)]
                    "
                />

                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="
                        pointer-events-none
                        absolute
                        left-[12%]
                        bottom-[18%]
                        h-2
                        w-2
                        rounded-full
                        bg-[#F7C600]
                    "
                />

                <motion.div
                    animate={{
                        y: [0, 25, 0],
                        x: [0, -10, 0],
                    }}
                    transition={{
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5,
                    }}
                    className="
                        pointer-events-none
                        absolute
                        right-[14%]
                        bottom-[20%]
                        h-3
                        w-3
                        rounded-full
                        bg-[#F7C600]
                    "
                />


                {/* ==================================================
                    MAIN CONTENT
                ================================================== */}

                <div
                    className="
                        relative
                        z-20
                        mx-auto
                        max-w-[1600px]
                    "
                >

                    {/* ==================================================
                        HEADING
                    ================================================== */}

                    <div
                        className="
                            mx-auto
                            max-w-7xl
                            px-6
                            text-center
                            sm:px-8
                        "
                    >

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
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
                            className="
                                mb-5
                                inline-flex
                                items-center
                                gap-3
                                rounded-full
                                border
                                border-[#123F73]/10
                                bg-[#F7F9FC]
                                px-4
                                py-2
                            "
                        >

                            <span
                                className="
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-[#F7C600]
                                    shadow-[0_0_12px_rgba(247,198,0,0.5)]
                                "
                            />

                            <span
                                className="
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#123F73]
                                "
                            >
                                Our Clients
                            </span>

                        </motion.div>


                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: 25,
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
                                duration: 0.8,
                                delay: 0.1,
                            }}
                            className="
                                text-4xl
                                font-bold
                                tracking-tight
                                text-[#102F55]
                                sm:text-5xl
                                lg:text-6xl
                            "
                        >
                            Happy Clients
                            <span className="text-[#F7C600]">
                                .
                            </span>
                        </motion.h2>


                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 20,
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
                                delay: 0.2,
                            }}
                            className="
                                mx-auto
                                mt-5
                                max-w-2xl
                                text-base
                                leading-7
                                text-slate-500
                                sm:text-lg
                            "
                        >
                            Trusted by hotels, resorts and businesses
                            that value cleaner environments and better
                            experiences.
                        </motion.p>

                    </div>


                    {/* ==================================================
                        MARQUEES
                    ================================================== */}

                    <div className="relative mt-16">

                        {/* LEFT FADE */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                left-0
                                top-0
                                z-30
                                h-full
                                w-20
                                bg-gradient-to-r
                                from-white
                                to-transparent
                                sm:w-32
                                lg:w-48
                            "
                        />


                        {/* RIGHT FADE */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                right-0
                                top-0
                                z-30
                                h-full
                                w-20
                                bg-gradient-to-l
                                from-white
                                to-transparent
                                sm:w-32
                                lg:w-48
                            "
                        />


                        {/* ==================================================
                            ROW 1 — LEFT
                        ================================================== */}

                        <div className="group overflow-hidden">

                            <motion.div
                                animate={{
                                    x: ["0%", "-50%"],
                                }}
                                transition={{
                                    duration: 38,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="
                                    flex
                                    w-max
                                    items-center
                                    gap-5
                                    group-hover:[animation-play-state:paused]
                                "
                            >

                                {/* COPY 1 */}

                                <div className="flex items-center gap-5">

                                    {clientLogos.map((logo, index) => (

                                        <motion.div
                                            key={`row1-a-${index}`}
                                            whileHover={{
                                                y: -6,
                                                scale: 1.04,
                                            }}
                                            className="
                                                flex
                                                h-28
                                                w-44
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                border
                                                border-slate-100
                                                bg-white
                                                px-6
                                                shadow-[0_8px_30px_rgba(16,47,85,0.05)]
                                                transition-shadow
                                                duration-300
                                                hover:shadow-[0_18px_40px_rgba(16,47,85,0.12)]
                                            "
                                        >

                                            <img
                                                src={logo}
                                                alt="Auston Hospitality client"
                                                className="
                                                    max-h-16
                                                    max-w-[125px]
                                                    object-contain
                                                    opacity-70
                                                    grayscale
                                                    transition-all
                                                    duration-300
                                                "
                                            />

                                        </motion.div>

                                    ))}

                                </div>


                                {/* COPY 2 */}

                                <div className="flex items-center gap-5">

                                    {clientLogos.map((logo, index) => (

                                        <motion.div
                                            key={`row1-b-${index}`}
                                            className="
                                                flex
                                                h-28
                                                w-44
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                border
                                                border-slate-100
                                                bg-white
                                                px-6
                                                shadow-[0_8px_30px_rgba(16,47,85,0.05)]
                                            "
                                        >

                                            <img
                                                src={logo}
                                                alt="Auston Hospitality client"
                                                className="
                                                    max-h-16
                                                    max-w-[125px]
                                                    object-contain
                                                    opacity-70
                                                    grayscale
                                                "
                                            />

                                        </motion.div>

                                    ))}

                                </div>

                            </motion.div>

                        </div>


                        {/* ==================================================
                            CENTER YELLOW LINE
                        ================================================== */}

                        <div
                            className="
                                mx-auto
                                my-8
                                flex
                                max-w-7xl
                                items-center
                                gap-4
                                px-6
                            "
                        >

                            <div className="h-px flex-1 bg-slate-100" />

                            <motion.div
                                animate={{
                                    scaleX: [1, 1.5, 1],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    h-1
                                    w-10
                                    rounded-full
                                    bg-[#F7C600]
                                "
                            />

                            <div className="h-px flex-1 bg-slate-100" />

                        </div>


                        {/* ==================================================
                            ROW 2 — RIGHT
                        ================================================== */}

                        <div className="group overflow-hidden">

                            <motion.div
                                animate={{
                                    x: ["-50%", "0%"],
                                }}
                                transition={{
                                    duration: 45,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="
                                    flex
                                    w-max
                                    items-center
                                    gap-5
                                "
                            >

                                {/* COPY 1 */}

                                <div className="flex items-center gap-5">

                                    {clientLogos.map((logo, index) => (

                                        <motion.div
                                            key={`row2-a-${index}`}
                                            whileHover={{
                                                y: -6,
                                                scale: 1.04,
                                            }}
                                            className="
                                                flex
                                                h-28
                                                w-44
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                border
                                                border-slate-100
                                                bg-[#F8FAFC]
                                                px-6
                                                transition-all
                                                duration-300
                                                hover:bg-white
                                                hover:shadow-[0_18px_40px_rgba(16,47,85,0.10)]
                                            "
                                        >

                                            <img
                                                src={logo}
                                                alt="Auston Hospitality client"
                                                className="
                                                    max-h-16
                                                    max-w-[125px]
                                                    object-contain
                                                    opacity-60
                                                    grayscale
                                                "
                                            />

                                        </motion.div>

                                    ))}

                                </div>


                                {/* COPY 2 */}

                                <div className="flex items-center gap-5">

                                    {clientLogos.map((logo, index) => (

                                        <motion.div
                                            key={`row2-b-${index}`}
                                            className="
                                                flex
                                                h-28
                                                w-44
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                border
                                                border-slate-100
                                                bg-[#F8FAFC]
                                                px-6
                                            "
                                        >

                                            <img
                                                src={logo}
                                                alt="Auston Hospitality client"
                                                className="
                                                    max-h-16
                                                    max-w-[125px]
                                                    object-contain
                                                    opacity-60
                                                    grayscale
                                                "
                                            />

                                        </motion.div>

                                    ))}

                                </div>

                            </motion.div>

                        </div>

                    </div>


                    {/* ==================================================
                        BOTTOM TRUST TEXT
                    ================================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="
                            mx-auto
                            mt-16
                            flex
                            items-center
                            justify-center
                            gap-3
                            px-6
                            text-center
                        "
                    >

                        <span
                            className="
                                h-2
                                w-2
                                shrink-0
                                rounded-full
                                bg-[#F7C600]
                            "
                        />

                        <p
                            className="
                                text-xs
                                font-medium
                                uppercase
                                tracking-[0.2em]
                                text-slate-400
                            "
                        >
                            Trusted hospitality & facility solutions
                        </p>

                        <span
                            className="
                                h-2
                                w-2
                                shrink-0
                                rounded-full
                                bg-[#F7C600]
                            "
                        />

                    </motion.div>

                </div>

            </section>


            {/* ======================================================
                CONTACT CTA
            ====================================================== */}

            <ContactCTA />


            {/* ======================================================
                FOOTER
            ====================================================== */}

            <Footer />

        </main>
    );
}

export default Home;