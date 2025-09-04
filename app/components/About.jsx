"use client";
import { motion } from "framer-motion";
import SectionHeader from "../helper/SectionHeader";

function GodRays({ raysCount = 20 }) {
  const rays = Array.from({ length: raysCount }, (_, i) => ({
    id: i,
    rotate: -60 + (i * 120) / raysCount, // fan out diagonally
    opacity: 0.05 + Math.random() * 0.1,
    duration: 2 + Math.random() * 10,
    delay: Math.random() * 1,
    scale: 1 + Math.random() * 0.2,
  }));

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="rayGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(66, 53, 243, 0.6)" />
          <stop offset="100%" stopColor="rgba(211, 233, 13, 0.5)" />
        </linearGradient>
      </defs>

      {rays.map((ray) => (
        <motion.rect
          key={ray.id}
          x="400" // center X
          y="-300" // start above
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

      {/* Soft radial glow at top-center */}
      <circle
        cx="400"
        cy="0"
        r="150"
        fill="url(#rayGradient)"
        opacity={0.3}
        filter="url(#blurFilter)"
      />

      <defs>
        <filter id="blurFilter">
          <feGaussianBlur stdDeviation="50" />
        </filter>
      </defs>
    </svg>
  );
}



export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-15 bg-white dark:bg-background relative overflow-hidden"
    >
      {/* God Rays Background */}
      <GodRays raysCount={30} />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          header="About ME"
          tittle="A Little More About Me"
          mb="mb-2"
        />

        <div className="relative md:flex md:items-center max-w-4xl mx-auto gap-2">
          {/* Image */}
          <motion.div
            className="relative z-10 md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img
                src="/Mohiuddin Mohammad Sadik_Software Engineer1.jpg"
                alt="Mohiuddin Mohammad Sadik"
                className="relative rounded-lg shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Text Card */}
          <motion.div
            className="relative z-10 md:w-3/4 text-gray-800 rounded-xl shadow-2xl p-8 md:p-12 border"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 dark:text-foreground">
              Software Engineer & Lifelong Learner
            </h3>
            <p className="text-base mb-4 leading-relaxed dark:text-foreground">
              I'm a Computer Science graduate from United International University,
              driven by a passion for software engineering. I thrive in environments
              where I can work on both the front-end and back-end, bringing ideas to life.
            </p>
            <p className="text-base mb-4 leading-relaxed dark:text-foreground">
              Java and JavaScript are my go-to languages, but I also have a soft spot for C.
              There's a unique thrill in communicating with a computer through code. My
              experience includes four academic projects and an e-commerce site built
              on WordPress, which gave me a solid grasp of CMS platforms.
            </p>
            <p className="text-base leading-relaxed dark:text-foreground">
              On the design front, I'm comfortable with Figma and Framer. I live by
              the idea of being a versatile "jack of all trades," constantly learning
              and growing. I'm excited to collaborate on projects that push boundaries
              and make a real-world impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
