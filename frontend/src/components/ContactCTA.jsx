import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function ContactCTA() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const circleY = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const circleRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative overflow-hidden bg-[#102F55] py-24 sm:py-32"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#F7C600]/10 blur-[120px]" />

            <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#123F73] blur-[100px]" />

            {/* Parallax circle */}
            <motion.div
                style={{
                    y: circleY,
                    rotate: circleRotate,
                }}
                className="pointer-events-none absolute -right-20 top-10 h-[420px] w-[420px] rounded-full border border-[#F7C600]/15"
            />

            <motion.div
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 8, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-[8%] top-20 hidden h-10 w-10 rounded-xl border border-[#F7C600]/40 lg:block"
            />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] px-7 py-12 backdrop-blur-sm sm:px-12 sm:py-16 lg:px-16 lg:py-20">

                    {/* Decorative yellow circle */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F7C600]/10 blur-3xl" />

                    <div className="relative z-10 max-w-4xl">

                        {/* Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-3"
                        >
                            <span className="h-2.5 w-2.5 rounded-full bg-[#F7C600] shadow-[0_0_15px_rgba(247,198,0,0.6)]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F7C600]">
                                Let's Work Together
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: 0.1,
                            }}
                            className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl"
                        >
                            Ready to create
                            <br />

                            <span className="text-[#F7C600]">
                                cleaner spaces?
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2,
                            }}
                            className="mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg"
                        >
                            Talk to our team about professional hygiene,
                            cleaning and hospitality solutions for your
                            environment.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                            }}
                            className="mt-9 flex flex-col gap-3 sm:flex-row"
                        >
                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#F7C600] px-7 py-3.5 text-sm font-semibold text-[#102F55] shadow-lg shadow-[#F7C600]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F7C600]/20"
                            >
                                Contact Us

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>

                            <a
                                href="/products"
                                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#F7C600]/50 hover:bg-white/10"
                            >
                                Explore Products
                            </a>
                        </motion.div>

                    </div>

                    {/* Right decorative visual */}
                    <div className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-[42%] lg:block">

                        {/* Large circle */}
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 5, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute right-[-80px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border-[55px] border-[#F7C600]/10"
                        />

                        {/* Inner circle */}
                        <div className="absolute right-[-20px] top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full border border-white/10" />

                        {/* Center icon */}
                        <motion.div
                            animate={{
                                y: [0, -12, 0],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                                rotate: {
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                },
                            }}
                            className="absolute right-[105px] top-1/2 flex h-24 w-24 -translate-y-1/2 items-center justify-center rounded-full bg-[#F7C600] text-3xl text-[#102F55] shadow-[0_0_50px_rgba(247,198,0,0.15)]"
                        >
                            ✦
                        </motion.div>

                    </div>

                </div>

                {/* Bottom line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-8 flex flex-col gap-3 text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between"
                >
                    <span>
                        Professional hygiene & hospitality solutions.
                    </span>

                    <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#F7C600]" />
                        Auston Hospitality
                    </span>
                </motion.div>

            </div>
        </section>
    );
}

export default ContactCTA;