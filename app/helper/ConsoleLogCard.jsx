'use client';
import { motion } from 'framer-motion';

export default function ConsoleLogCard({ text, position, animation }) {
  return (
    <motion.div
      className={`absolute ${position} border-1 border-gray-400 rounded-xl p-3 text-xs font-mono`}
      animate={animation}
    >
      <div>console.log("{text}")</div>
    </motion.div>
  );
}