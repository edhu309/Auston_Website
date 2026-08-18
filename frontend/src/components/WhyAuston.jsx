import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const highlights = [
    {
        number: "01",
        title: "Professional Solutions",
        text: "Purpose-focused hygiene, cleaning and facility solutions for professional environments.",
    },
    {
        number: "02",
        title: "Quality Focused",
        text: "Solutions selected with a focus on dependable performance and professional standards.",
    },
    {
        number: "03",
        title: "Hospitality Expertise",
        text: "Solutions designed around the practical needs of hospitality and service environments.",
    },
];

function WhyAuston() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(
        scrollYProgress,
        [0, 1],
        [80, -80]
    );

    const circleRotate = useTransform(
        scrollYProgress,
        [0, 1],
        [-20, 35]
    );

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative overflow-hidden bg-white py-24 sm:py-32"
        >

            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <div className="pointer-events-none absolute inset-0">

                <div
                    className="
                        absolute
                        left-0
                        top-1/3
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-[#F7C600]/[0.06]
                        blur-[120px]
                    "
                />

                <div
                    className="
                        absolute
                        right-0
                        bottom-0
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-[#123F73]/[0.05]
                        blur-[120px]
                    "
                />

            </div>


            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* =====================================================
                    TOP INTRO
                ===================================================== */}

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
                    className="max-w-4xl"
                >

                    <div className="flex items-center gap-3">

                        <span
                            className="
                                h-2.5
                                w-2.5
                                rounded-full
                                bg-[#F7C600]
                                shadow-[0_0_15px_rgba(247,198,0,0.5)]
                            "
                        />

                        <span
                            className="
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.3em]
                                text-[#123F73]
                            "
                        >
                            Why Auston
                        </span>

                    </div>


                    <h2
                        className="
                            mt-6
                            max-w-4xl
                            text-4xl
                            font-bold
                            leading-[1.05]
                            tracking-tight
                            text-[#102F55]
                            sm:text-5xl
                            lg:text-7xl
                        "
                    >
                        More than products.
                        <br />

                        <span className="text-[#123F73]">
                            Solutions that work.
                        </span>

                        <span className="text-[#F7C600]">
                            .
                        </span>
                    </h2>


                    <p
                        className="
                            mt-7
                            max-w-2xl
                            text-base
                            leading-7
                            text-slate-500
                            sm:text-lg
                        "
                    >
                        Auston Hospitality brings together professional
                        hygiene, cleaning and facility solutions to help
                        create cleaner, safer and better environments.
                    </p>

                </motion.div>


                {/* =====================================================
                    MAIN CONTENT
                ===================================================== */}

                <div
                    className="
                        mt-20
                        grid
                        gap-12
                        lg:grid-cols-[1fr_0.9fr]
                        lg:items-center
                    "
                >

                    {/* =================================================
                        LEFT — HIGHLIGHTS
                    ================================================= */}

                    <div>

                        <div className="divide-y divide-slate-200">

                            {highlights.map((item, index) => (

                                <motion.div
                                    key={item.number}
                                    initial={{
                                        opacity: 0,
                                        x: -30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.3,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    className="
                                        group
                                        flex
                                        gap-6
                                        py-8
                                        first:pt-0
                                    "
                                >

                                    {/* Number */}

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-[#123F73]/10
                                            bg-[#F7F9FC]
                                            text-xs
                                            font-semibold
                                            text-[#123F73]
                                            transition-all
                                            duration-300
                                            group-hover:border-[#F7C600]
                                            group-hover:bg-[#F7C600]
                                        "
                                    >
                                        {item.number}
                                    </div>


                                    {/* Content */}

                                    <div>

                                        <h3
                                            className="
                                                text-xl
                                                font-semibold
                                                text-[#102F55]
                                                sm:text-2xl
                                            "
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-3
                                                max-w-lg
                                                text-sm
                                                leading-6
                                                text-slate-500
                                                sm:text-base
                                            "
                                        >
                                            {item.text}
                                        </p>

                                    </div>

                                </motion.div>

                            ))}

                        </div>


                        {/* Small statement */}

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
                                duration: 0.6,
                                delay: 0.3,
                            }}
                            className="
                                mt-8
                                flex
                                items-center
                                gap-4
                                rounded-2xl
                                border
                                border-[#F7C600]/20
                                bg-[#F7C600]/[0.07]
                                px-5
                                py-4
                            "
                        >

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#F7C600]
                                    text-[#102F55]
                                "
                            >
                                ✦
                            </div>

                            <p
                                className="
                                    text-sm
                                    font-medium
                                    leading-6
                                    text-[#123F73]
                                "
                            >
                                Cleaner spaces.
                                <span className="text-[#102F55]">
                                    {" "}
                                    Better experiences.
                                </span>
                            </p>

                        </motion.div>

                    </div>


                    {/* =================================================
                        RIGHT — VISUAL
                    ================================================= */}

                    <div className="relative min-h-[500px]">

                        {/* Outer circle */}

                        <motion.div
                            style={{
                                rotate: circleRotate,
                            }}
                            className="
                                absolute
                                left-1/2
                                top-1/2
                                h-[430px]
                                w-[430px]
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-full
                                border
                                border-[#123F73]/10
                            "
                        />

                        {/* Yellow circle */}

                        <motion.div
                            animate={{
                                scale: [1, 1.06, 1],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                                absolute
                                left-1/2
                                top-1/2
                                h-[350px]
                                w-[350px]
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-full
                                bg-[#F7C600]/10
                            "
                        />


                        {/* Navy circle */}

                        <div
                            className="
                                absolute
                                left-1/2
                                top-1/2
                                h-[280px]
                                w-[280px]
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-full
                                bg-[#123F73]
                                shadow-[0_30px_80px_rgba(18,63,115,0.2)]
                            "
                        />


                        {/* Inner white circle */}

                        <div
                            className="
                                absolute
                                left-1/2
                                top-1/2
                                flex
                                h-[210px]
                                w-[210px]
                                -translate-x-1/2
                                -translate-y-1/2
                                items-center
                                justify-center
                                rounded-full
                                bg-[#F7F9FC]
                                shadow-xl
                            "
                        >

                            <div className="text-center">

                                <div
                                    className="
                                        mx-auto
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#F7C600]/15
                                        text-2xl
                                        text-[#F7C600]
                                    "
                                >
                                    ✦
                                </div>

                                <p
                                    className="
                                        mt-5
                                        text-lg
                                        font-semibold
                                        text-[#102F55]
                                    "
                                >
                                    Clean Spaces.
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        font-medium
                                        text-[#123F73]
                                    "
                                >
                                    Better Experiences.
                                </p>

                            </div>

                        </div>


                        {/* =================================================
                            FLOATING QUALITY CARD
                        ================================================= */}

                        <motion.div
                            style={{
                                y: imageY,
                            }}
                            className="
                                absolute
                                right-0
                                top-12
                                rounded-2xl
                                border
                                border-white
                                bg-white
                                px-5
                                py-4
                                shadow-[0_20px_50px_rgba(16,47,85,0.14)]
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
                                        text-[#102F55]
                                    "
                                >
                                    ✓
                                </div>

                                <div>

                                    <p
                                        className="
                                            text-[10px]
                                            font-semibold
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


                        {/* =================================================
                            FLOATING HOSPITALITY CARD
                        ================================================= */}

                        <motion.div
                            animate={{
                                y: [0, -12, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                                absolute
                                bottom-10
                                left-0
                                rounded-2xl
                                border
                                border-white
                                bg-[#102F55]
                                px-5
                                py-4
                                shadow-[0_20px_50px_rgba(16,47,85,0.2)]
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
                                        text-[#102F55]
                                    "
                                >
                                    ✦
                                </div>

                                <div>

                                    <p
                                        className="
                                            text-[10px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.2em]
                                            text-white/40
                                        "
                                    >
                                        Focus
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            font-semibold
                                            text-white
                                        "
                                    >
                                        Hospitality
                                    </p>

                                </div>

                            </div>

                        </motion.div>


                        {/* Small yellow shape */}

                        <motion.div
                            animate={{
                                rotate: [0, 15, 0],
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                                absolute
                                bottom-24
                                right-12
                                h-10
                                w-10
                                rounded-xl
                                border-2
                                border-[#F7C600]
                            "
                        />

                    </div>

                </div>


                {/* =====================================================
                    BOTTOM LINE
                ===================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="
                        mt-24
                        border-t
                        border-slate-200
                        pt-8
                    "
                >

                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        "
                    >

                        <p className="text-sm text-slate-400">
                            Professional hygiene and facility solutions.
                        </p>

                        <div className="flex items-center gap-2">

                            <span className="h-2 w-2 rounded-full bg-[#F7C600]" />

                            <span
                                className="
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#123F73]
                                "
                            >
                                Auston Hospitality
                            </span>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}

export default WhyAuston;