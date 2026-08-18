import { useState, useRef } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
} from "motion/react";

const solutions = [
    {
        id: 1,
        number: "01",
        title: "Hospitality",
        shortTitle: "Hospitality",
        description:
            "Professional hygiene and facility solutions for hospitality environments.",
    },
    {
        id: 2,
        number: "02",
        title: "Facility Management",
        shortTitle: "Facility Management",
        description:
            "Solutions designed to support cleaner, safer and more efficient facilities.",
    },
    {
        id: 3,
        number: "03",
        title: "Healthcare",
        shortTitle: "Healthcare",
        description:
            "Hygiene and cleaning solutions for demanding healthcare environments.",
    },
    {
        id: 4,
        number: "04",
        title: "Life Science",
        shortTitle: "Life Science",
        description:
            "Professional solutions for environments where hygiene and cleanliness matter.",
    },
    {
        id: 5,
        number: "05",
        title: "Food & Beverage",
        shortTitle: "Food & Beverage",
        description:
            "Cleaning and hygiene solutions for professional food environments.",
    },
    {
        id: 6,
        number: "06",
        title: "Catering & Food Service",
        shortTitle: "Catering",
        description:
            "Professional hygiene solutions for catering and food service environments.",
    },
    {
        id: 7,
        number: "07",
        title: "Retail",
        shortTitle: "Retail",
        description:
            "Cleaning and hygiene solutions for modern retail environments.",
    },
    {
        id: 8,
        number: "08",
        title: "Commercial Laundry",
        shortTitle: "Laundry",
        description:
            "Professional laundry solutions for commercial operations.",
    },
    {
        id: 9,
        number: "09",
        title: "Education",
        shortTitle: "Education",
        description:
            "Hygiene and cleaning solutions for educational environments.",
    },
    {
        id: 10,
        number: "10",
        title: "Dairy & Poultry",
        shortTitle: "Dairy & Poultry",
        description:
            "Professional hygiene solutions for demanding production environments.",
    },
];

function Solutions() {
    const [activeSolution, setActiveSolution] = useState(0);

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const backgroundY = useTransform(
        scrollYProgress,
        [0, 1],
        [-80, 80]
    );

    const circleRotate = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 180]
    );

    return (
        <section
            id="solutions"
            ref={sectionRef}
            className="
                relative
                overflow-hidden
                bg-gradient-to-b
                from-[#F8FAFD]
                via-[#E8EFF7]
                to-[#102F55]
                py-24
                sm:py-32
            "
        >

            {/* =====================================================
                BACKGROUND DECORATION
            ===================================================== */}

            {/* Soft yellow glow near top */}
            <motion.div
                style={{ y: backgroundY }}
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    top-20
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#F7C600]/10
                    blur-[130px]
                "
            />

            {/* Blue atmospheric glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    left-[35%]
                    top-[35%]
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#123F73]/10
                    blur-[140px]
                "
            />

            {/* Rotating outer circle */}
            <motion.div
                style={{ rotate: circleRotate }}
                className="
                    pointer-events-none
                    absolute
                    -left-48
                    top-[35%]
                    h-[500px]
                    w-[500px]
                    rounded-full
                    border
                    border-[#123F73]/10
                "
            />

            {/* Inner circle */}
            <motion.div
                style={{ rotate: circleRotate }}
                className="
                    pointer-events-none
                    absolute
                    -left-32
                    top-[39%]
                    h-[340px]
                    w-[340px]
                    rounded-full
                    border
                    border-[#123F73]/5
                "
            />

            {/* Floating yellow square */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 12, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    right-[12%]
                    top-20
                    hidden
                    h-12
                    w-12
                    rounded-xl
                    border
                    border-[#F7C600]/50
                    lg:block
                "
            />

            {/* Floating yellow dot */}
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    right-[25%]
                    top-[30%]
                    h-4
                    w-4
                    rounded-full
                    bg-[#F7C600]
                    shadow-[0_0_20px_rgba(247,198,0,0.35)]
                "
            />


            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* =====================================================
                    SECTION HEADER
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
                    className="max-w-3xl"
                >

                    {/* Label */}

                    <div className="flex items-center gap-3">

                        <span
                            className="
                                h-2.5
                                w-2.5
                                rounded-full
                                bg-[#F7C600]
                                shadow-[0_0_15px_rgba(247,198,0,0.6)]
                            "
                        />

                        <span
                            className="
                                text-sm
                                font-semibold
                                uppercase
                                tracking-[0.28em]
                                text-[#123F73]
                            "
                        >
                            Our Solutions
                        </span>

                    </div>


                    {/* Heading */}

                    <h2
                        className="
                            mt-6
                            text-4xl
                            font-bold
                            leading-[1.05]
                            tracking-tight
                            text-[#102F55]
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        Solutions for
                        <br />

                        <span className="text-[#123F73]">
                            every environment
                        </span>

                        <span className="text-[#F7C600]">
                            .
                        </span>
                    </h2>


                    {/* Description */}

                    <p
                        className="
                            mt-6
                            max-w-2xl
                            text-base
                            leading-7
                            text-[#52677F]
                            sm:text-lg
                        "
                    >
                        Explore the professional environments and
                        industries supported by Auston Hospitality.
                    </p>

                </motion.div>


                {/* =====================================================
                    MAIN INTERACTIVE AREA
                ===================================================== */}

                <div
                    className="
                        mt-16
                        grid
                        gap-12
                        lg:grid-cols-[0.75fr_1.25fr]
                        lg:items-center
                    "
                >

                    {/* ===================================================
                        LEFT SIDE — INDUSTRY LIST
                    =================================================== */}

                    <div className="relative">

                        {/* Vertical line */}

                        <div
                            className="
                                absolute
                                bottom-4
                                left-[7px]
                                top-4
                                w-px
                                bg-[#123F73]/15
                            "
                        />


                        <div className="space-y-1">

                            {solutions.map((solution, index) => {

                                const isActive =
                                    activeSolution === index;

                                return (
                                    <motion.button
                                        key={solution.id}
                                        type="button"
                                        onClick={() =>
                                            setActiveSolution(index)
                                        }
                                        whileHover={{
                                            x: 5,
                                        }}
                                        className="group relative flex w-full items-center gap-5 py-3 text-left"
                                    >

                                        {/* Active indicator */}

                                        <div
                                            className="
                                                relative
                                                z-10
                                                flex
                                                h-4
                                                w-4
                                                shrink-0
                                                items-center
                                                justify-center
                                            "
                                        >

                                            <motion.div
                                                animate={{
                                                    scale: isActive
                                                        ? 1
                                                        : 0.55,
                                                }}
                                                transition={{
                                                    duration: 0.25,
                                                }}
                                                className={`
                                                    h-3
                                                    w-3
                                                    rounded-full
                                                    ${isActive
                                                        ? "bg-[#F7C600] shadow-[0_0_14px_rgba(247,198,0,0.7)]"
                                                        : "bg-[#123F73]/20"
                                                    }
                                                `}
                                            />

                                        </div>


                                        {/* Number */}

                                        <span
                                            className={`
                                                w-8
                                                text-xs
                                                font-medium
                                                transition-colors
                                                duration-300
                                                ${isActive
                                                    ? "text-[#123F73]"
                                                    : "text-[#123F73]/30"
                                                }
                                            `}
                                        >
                                            {solution.number}
                                        </span>


                                        {/* Title */}

                                        <span
                                            className={`
                                                text-base
                                                transition-all
                                                duration-300
                                                sm:text-lg
                                                ${isActive
                                                    ? "font-semibold text-[#102F55]"
                                                    : "font-medium text-[#52677F]/60 group-hover:text-[#102F55]"
                                                }
                                            `}
                                        >
                                            {solution.shortTitle}
                                        </span>

                                    </motion.button>
                                );
                            })}

                        </div>

                    </div>


                    {/* ===================================================
                        RIGHT SIDE — ACTIVE SOLUTION
                    =================================================== */}

                    <div
                        className="
                            relative
                            min-h-[460px]
                            overflow-hidden
                            rounded-[36px]
                            bg-[#102F55]
                            shadow-[0_30px_80px_rgba(16,47,85,0.18)]
                        "
                    >

                        {/* =================================================
                            CARD BACKGROUND
                        ================================================= */}

                        {/* Yellow glow */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                -right-20
                                -top-20
                                h-72
                                w-72
                                rounded-full
                                bg-[#F7C600]/15
                                blur-[100px]
                            "
                        />

                        {/* Blue glow */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                -bottom-32
                                -left-20
                                h-80
                                w-80
                                rounded-full
                                bg-[#123F73]
                                blur-[70px]
                            "
                        />


                        {/* Outer rotating circle */}

                        <motion.div
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="
                                pointer-events-none
                                absolute
                                left-1/2
                                top-1/2
                                h-[470px]
                                w-[470px]
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-full
                                border
                                border-[#F7C600]/15
                            "
                        />


                        {/* Inner circle */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                left-1/2
                                top-1/2
                                h-[340px]
                                w-[340px]
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-full
                                border
                                border-white/5
                            "
                        />


                        {/* Top left label */}

                        <div
                            className="
                                absolute
                                left-7
                                top-7
                                z-20
                                sm:left-10
                                sm:top-10
                            "
                        >
                            <span
                                className="
                                    rounded-full
                                    border
                                    border-white/15
                                    bg-white/[0.06]
                                    px-4
                                    py-2
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-white/60
                                    backdrop-blur-md
                                "
                            >
                                Auston Hospitality
                            </span>
                        </div>


                        {/* Large number */}

                        <div
                            className="
                                absolute
                                right-7
                                top-5
                                z-10
                                sm:right-10
                                sm:top-5
                            "
                        >
                            <span
                                className="
                                    text-7xl
                                    font-bold
                                    leading-none
                                    text-white/[0.06]
                                    sm:text-8xl
                                "
                            >
                                {solutions[activeSolution].number}
                            </span>
                        </div>


                        {/* =================================================
                            ACTIVE CONTENT
                        ================================================= */}

                        <AnimatePresence mode="wait">

                            <motion.div
                                key={activeSolution}
                                initial={{
                                    opacity: 0,
                                    scale: 0.92,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.95,
                                    y: -20,
                                }}
                                transition={{
                                    duration: 0.45,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
                                    absolute
                                    inset-0
                                    flex
                                    items-center
                                    justify-center
                                    px-6
                                    py-24
                                    sm:px-10
                                "
                            >

                                <div
                                    className="
                                        relative
                                        z-10
                                        w-full
                                        max-w-md
                                        rounded-[32px]
                                        border
                                        border-white/10
                                        bg-white/[0.08]
                                        p-7
                                        shadow-2xl
                                        backdrop-blur-xl
                                        sm:p-10
                                    "
                                >

                                    {/* Star */}

                                    <div
                                        className="
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#F7C600]
                                            text-xl
                                            text-[#102F55]
                                            shadow-[0_0_25px_rgba(247,198,0,0.15)]
                                        "
                                    >
                                        ✦
                                    </div>


                                    {/* Title */}

                                    <h3
                                        className="
                                            mt-7
                                            text-3xl
                                            font-semibold
                                            leading-tight
                                            text-white
                                            sm:text-4xl
                                        "
                                    >
                                        {solutions[activeSolution].title}
                                        <span className="text-[#F7C600]">
                                            .
                                        </span>
                                    </h3>


                                    {/* Yellow line */}

                                    <div
                                        className="
                                            mt-5
                                            h-1
                                            w-12
                                            rounded-full
                                            bg-[#F7C600]
                                        "
                                    />


                                    {/* Description */}

                                    <p
                                        className="
                                            mt-6
                                            text-sm
                                            leading-7
                                            text-white/60
                                            sm:text-base
                                        "
                                    >
                                        {solutions[activeSolution].description}
                                    </p>


                                    {/* Explore */}

                                    <div
                                        className="
                                            mt-8
                                            flex
                                            items-center
                                            gap-3
                                        "
                                    >

                                        <motion.span
                                            whileHover={{
                                                x: 4,
                                            }}
                                            className="
                                                flex
                                                h-11
                                                w-11
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-[#F7C600]
                                                text-[#102F55]
                                            "
                                        >
                                            →
                                        </motion.span>

                                        <span
                                            className="
                                                text-sm
                                                font-medium
                                                text-white
                                            "
                                        >
                                            Explore solutions
                                        </span>

                                    </div>

                                </div>

                            </motion.div>

                        </AnimatePresence>


                        {/* Floating yellow dot */}

                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                                absolute
                                right-[8%]
                                top-[18%]
                                z-20
                                h-5
                                w-5
                                rounded-full
                                bg-[#F7C600]
                                shadow-[0_0_20px_rgba(247,198,0,0.4)]
                            "
                        />


                        {/* Floating small circle */}

                        <motion.div
                            animate={{
                                y: [0, 15, 0],
                                rotate: [0, 90, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                                absolute
                                bottom-[14%]
                                left-[7%]
                                z-20
                                h-10
                                w-10
                                rounded-full
                                border
                                border-[#F7C600]/40
                            "
                        />


                        {/* =================================================
                            BOTTOM CONTROLS
                        ================================================= */}

                        <div
                            className="
                                absolute
                                bottom-7
                                left-7
                                right-7
                                z-20
                                flex
                                items-center
                                justify-between
                                sm:bottom-9
                                sm:left-10
                                sm:right-10
                            "
                        >

                            {/* Pagination */}

                            <div className="flex items-center gap-1.5">

                                {solutions.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        aria-label={`View solution ${index + 1}`}
                                        onClick={() =>
                                            setActiveSolution(index)
                                        }
                                        className="group p-1"
                                    >
                                        <span
                                            className={`
                                                block
                                                h-1.5
                                                rounded-full
                                                transition-all
                                                duration-300
                                                ${activeSolution === index
                                                    ? "w-8 bg-[#F7C600]"
                                                    : "w-1.5 bg-white/20 group-hover:bg-white/50"
                                                }
                                            `}
                                        />
                                    </button>
                                ))}

                            </div>


                            {/* Arrows */}

                            <div className="flex items-center gap-2">

                                <button
                                    type="button"
                                    aria-label="Previous solution"
                                    onClick={() =>
                                        setActiveSolution(
                                            (activeSolution -
                                                1 +
                                                solutions.length) %
                                            solutions.length
                                        )
                                    }
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/15
                                        text-sm
                                        text-white
                                        transition-all
                                        duration-300
                                        hover:border-[#F7C600]
                                        hover:text-[#F7C600]
                                    "
                                >
                                    ←
                                </button>

                                <button
                                    type="button"
                                    aria-label="Next solution"
                                    onClick={() =>
                                        setActiveSolution(
                                            (activeSolution + 1) %
                                            solutions.length
                                        )
                                    }
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#F7C600]
                                        text-sm
                                        text-[#102F55]
                                        transition-transform
                                        duration-300
                                        hover:scale-105
                                    "
                                >
                                    →
                                </button>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    BOTTOM MESSAGE
                ===================================================== */}

                <motion.div
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
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="
                        mt-20
                        flex
                        flex-col
                        justify-between
                        gap-5
                        border-t
                        border-[#123F73]/10
                        pt-8
                        sm:flex-row
                        sm:items-center
                    "
                >

                    <p className="text-sm text-[#52677F]">
                        Professional hygiene. Cleaner environments.
                        Better experiences.
                    </p>

                    <div className="flex items-center gap-2">

                        <span className="h-2 w-2 rounded-full bg-[#F7C600]" />

                        <span
                            className="
                                text-xs
                                font-medium
                                uppercase
                                tracking-[0.2em]
                                text-[#123F73]/60
                            "
                        >
                            Auston Hospitality
                        </span>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}

export default Solutions;