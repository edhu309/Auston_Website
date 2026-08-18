import { motion } from "motion/react";

function ProductCard({ product }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group relative h-[460px] overflow-hidden rounded-[28px] bg-[#102F55] shadow-lg"
        >
            {/* Product image */}
            <motion.img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Default dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071C35]/90 via-[#071C35]/20 to-transparent" />

            {/* Hover overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-[#123F73]/85"
            />

            {/* Category */}
            <div className="absolute left-6 top-6 z-10">
                <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    {product.category}
                </span>
            </div>

            {/* Product information */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-6">

                <motion.div
                    className="transition-transform duration-500 group-hover:-translate-y-2"
                >
                    <h3 className="text-2xl font-semibold leading-tight text-white">
                        {product.name}
                    </h3>

                    {/* Description */}
                    <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                        <div className="overflow-hidden">
                            <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                                {product.description}
                            </p>
                        </div>
                    </div>

                    {/* View button */}
                    <div className="mt-5 flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7C600] text-[#102F55] transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>

                        <span className="text-sm font-medium text-white">
                            Explore Product
                        </span>
                    </div>
                </motion.div>

            </div>
        </motion.article>
    );
}

export default ProductCard;