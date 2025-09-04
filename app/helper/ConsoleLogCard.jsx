'use client';
import { motion } from 'framer-motion';

export default function ConsoleLogCard({ text, position, animation }) {
  return (
    <motion.div
      className={`absolute ${position} bg-white border border-gray-200 rounded-lg p-3 text-xs text-gray-600 font-mono shadow-lg`}
      animate={animation}
    >
      <div>console.log("{text}")</div>
    </motion.div>
  );
}