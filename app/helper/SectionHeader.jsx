"use client"
import { motion } from "framer-motion"

export default function SectionHeader({header, tittle, mb="mb-10"}) {
    return (
        <>
            {/* Section Heading */}
            <motion.div
                className={`text-center ${mb}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-3">
                    {header}
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    {tittle}
                </p>
            </motion.div>
        </>
    );
}