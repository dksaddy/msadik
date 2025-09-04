import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DreamDots({ dotCount = 80 }) {
    const [dots, setDots] = useState([]);

    useEffect(() => {
        const newDots = Array.from({ length: dotCount }, () => ({
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            size: 2 + Math.random() * 4,
            color: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
                Math.random() * 255
            )},${Math.floor(Math.random() * 255)})`,
            duration: 4 + Math.random() * 4,
            delay: Math.random() * 2,
        }));
        setDots(newDots);
    }, [dotCount]);

    if (!dots.length) return null;

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {dots.map((dot, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 0.8, 0.2],
                        scale: [0, 1, 0.7],
                        x: ["0%", "3%", "-3%"],
                        y: ["0%", "3%", "-3%"],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: dot.duration,
                        delay: dot.delay,
                        ease: "easeInOut",
                    }}
                    style={{
                        position: "absolute",
                        left: dot.left,
                        top: dot.top,
                        width: dot.size,
                        height: dot.size,
                        borderRadius: "50%",
                        backgroundColor: dot.color,
                    }}
                />
            ))}
        </div>
    );
};