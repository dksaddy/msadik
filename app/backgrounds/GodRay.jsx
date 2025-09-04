import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default
function GodRays({ raysCount = 20 }) {
  const [rays, setRays] = useState([]);

  useEffect(() => {
    setRays(
      Array.from({ length: raysCount }, (_, i) => ({
        id: i,
        rotate: -60 + (i * 120) / raysCount,
        opacity: 0.05 + Math.random() * 0.1,
        duration: 2 + Math.random() * 10,
        delay: Math.random() * 1,
        scale: 1 + Math.random() * 0.2,
      }))
    );
  }, [raysCount]);

  if (rays.length === 0) return null; // prevent SSR rendering mismatch

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="rayGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(14, 10, 241, 0.6)" />
          <stop offset="100%" stopColor="rgba(211, 233, 13, 0.5)" />
        </linearGradient>
        <filter id="blurFilter">
          <feGaussianBlur stdDeviation="50" />
        </filter>
      </defs>

      {rays.map((ray) => (
        <motion.rect
          key={ray.id}
          x="400"
          y="-300"
          width="6"
          height="800"
          rx="3"
          fill="url(#rayGradient)"
          style={{ transformOrigin: "center bottom" }}
          initial={{ rotate: ray.rotate, scaleY: ray.scale }}
          animate={{ rotate: ray.rotate + 2, scaleY: ray.scale * 1.05 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: ray.duration,
            ease: "easeInOut",
            delay: ray.delay,
          }}
          opacity={ray.opacity}
        />
      ))}

      <circle
        cx="400"
        cy="0"
        r="150"
        fill="url(#rayGradient)"
        opacity={0.3}
        filter="url(#blurFilter)"
      />
    </svg>
  );
}
