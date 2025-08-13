'use client';
import { motion } from 'framer-motion';
import SectionHeader from '../helper/SectionHeader';

export default function About() {
  return (
    <section id="about" className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-6">

        <SectionHeader header="About ME" tittle="A Little More About Me" mb="mb-2"/>

        <div className="relative md:flex md:items-center max-w-4xl mx-auto">
          {/* Image */}
          <motion.div
            className="relative z-10 md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img
                src="./Mohiuddin Mohammad Sadik_Software Engineer1.jpg"
                alt="Mohiuddin Mohammad Sadik"
                className="relative rounded-lg shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Text Card */}
          <motion.div
            className="relative z-10 md:w-3/4 bg-white text-gray-800 rounded-xl shadow-2xl p-8 md:p-12"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            
          >
            <h3 className="text-2xl font-bold mb-4">Software Engineer & Lifelong Learner</h3>
            <p className="text-base mb-4 leading-relaxed">
              I'm a Computer Science graduate from United International University, driven by a passion for software engineering. I thrive in environments where I can work on both the front-end and back-end, bringing ideas to life.
            </p>
            <p className="text-base mb-4 leading-relaxed">
              Java and JavaScript are my go-to languages, but I also have a soft spot for C. There's a unique thrill in communicating with a computer through code. My experience includes four academic projects and an e-commerce site built on WordPress, which gave me a solid grasp of CMS platforms.
            </p>
            <p className="text-base leading-relaxed">
              On the design front, I'm comfortable with Figma and Framer. I live by the idea of being a versatile "jack of all trades," constantly learning and growing. I'm excited to collaborate on projects that push boundaries and make a real-world impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}