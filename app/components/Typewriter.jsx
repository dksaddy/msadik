'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Typewriter({ texts }) {
  const [textIndex, setTextIndex] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => {
    const text = texts[textIndex].slice(0, latest);
    return text === "" ? "\u00A0" : text; // Use non-breaking space for empty string
  });

  useEffect(() => {
    const controls = animate(count, texts[textIndex].length, {
      type: 'tween',
      duration: 3,
      ease: 'linear',
      onComplete: () => {
        setTimeout(() => {
          const backspaceControls = animate(count, 0, {
            type: 'tween',
            duration: 2,
            ease: 'linear',
            onComplete: () => {
              setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            },
          });
          return backspaceControls.stop;
        }, 2000); // Pause before deleting
      },
    });
    return controls.stop;
  }, [textIndex, texts, count]);

  return (
    <motion.span>
      {displayText}
    </motion.span>
  );
}