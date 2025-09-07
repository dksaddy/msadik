'use client';
import { motion } from 'framer-motion';

export default function ConsoleLogCard({ text, position, animation }) {
  return (
    <motion.div
      className={`absolute ${position} bg-black/80 text-background dark:bg-white border border-gray-200 rounded-lg p-3 text-xs font-mono shadow-lg`}
      animate={animation}
    >
      <div>console.log("{text}")</div>
    </motion.div>
  );
}