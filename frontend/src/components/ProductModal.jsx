import { AnimatePresence, motion } from "motion/react";

function ProductModal({ product, onClose }) {
    return (
        <AnimatePresence>
            {product && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071C35]/70 px-4 py-8 backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.92,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.92,
                            y: 30,
                        }}
                        transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        onClick={(event) => event.stopPropagation()}
                        className="relative grid w-full max-w-4xl overflow-hidden rounded-[32px] bg-white shadow-2xl md:grid-cols-2"
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close product details"
                            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#102F55] shadow-md transition-all duration-300 hover:bg-[#F7C600]"
                        >
                            ✕
                        </button>

                        {/* Product image */}
                        <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#123F73] p-10">
                            <div className="absolute h-64 w-64 rounded-full bg-[#F7C600]/15 blur-3xl" />

                            <motion.img
                                src={product.image}
                                alt={product.name}
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="relative z-10 max-h-[330px] w-full object-contain"
                            />

                            <div className="absolute left-6 top-6 h-1 w-10 rounded-full bg-[#F7C600]" />
                        </div>

                        {/* Details */}
                        <div className="flex flex-col justify-center p-8 md:p-10">

                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123F73]">
                                {product.category}
                            </p>

                            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#102F55]">
                                {product.name}
                            </h2>

                            <div className="mt-5 h-1 w-12 rounded-full bg-[#F7C600]" />

                            <p className="mt-6 text-sm leading-7 text-slate-500">
                                {product.description}
                            </p>

                            <div className="mt-8 rounded-2xl bg-[#F8F9FB] p-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                                    Auston Hospitality
                                </p>

                                <p className="mt-2 text-sm leading-6 text-[#123F73]">
                                    Professional hygiene and hospitality solutions.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={onClose}
                                className="mt-8 flex w-fit items-center gap-3 rounded-full bg-[#F7C600] px-6 py-3 text-sm font-semibold text-[#102F55] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#F7C600]/20"
                            >
                                Close

                                <span>→</span>
                            </button>

                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ProductModal;