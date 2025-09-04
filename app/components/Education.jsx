"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";
import SectionHeader from '../helper/SectionHeader';
import { containerVariants, itemVariants } from "../utils/SpanAnimation";

export default function Education() {
  const education = {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "United International University",
    year: "2020 - 2024",
    details: "CGPA: 3.05/4.00",
    courses: [
      "Software Quality Assurance",
      "Software Architecture",
      "Software Engineering",
      "Mobile Application Development",
      "System Analysis and Design",
      "Human Computer Interaction",
      "Database Management System",
      "Object Oriented Programming",
      "Data Structure & Algorithm",
      "Web Technology",
      "Operating System",
    ],
  };

  // === DreamDots component ===
  const DreamDots = ({ dotCount = 80 }) => {
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
  // === End DreamDots ===

  return (
    <section
      id="education"
      className="relative min-h-screen py-15 px-4 md:px-8 lg:px-16 bg-white dark:bg-background overflow-hidden"
    >
      {/* Animated dots behind content */}
      <DreamDots dotCount={900} />

      {/* Content above dots */}
      <div className="mx-auto relative z-10">
        <SectionHeader
          header="Education & LEARNING"
          tittle="A Short Details About My Learning Journey"
        />

        {/* Education Card */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src="/uiu.jpg"
              alt="uiu"
              className="w-lg rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Text Card */}
          <motion.div
            className="rounded-2xl shadow-xl p-8 w-full max-w-xl border hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-card"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 dark:text-foreground">
                {education.degree}
              </h3>
              <p className="text-gray-600 font-medium dark:text-foreground">
                {education.institution}
              </p>
              <span className="text-gray-500">{education.year}</span>
              <span className="text-gray-500 ml-2">|</span>
              <span className="text-gray-500 ml-2">{education.details}</span>
            </div>

            <p className="text-gray-700 mt-2 mb-6 dark:text-foreground">
              Throughout my academic career, I successfully completed several software projects 
              and was awarded two scholarships in recognition of my dedication and hard work.
            </p>

            {/* Courses */}
            <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2 dark:text-foreground">
              <FaBookOpen className="text-blue-500" /> Relevant Courses
            </h4>

            <motion.div
              className="flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              {education.courses.map((course, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="px-3 py-1 text-sm font-medium bg-yellow-200 text-gray-800 rounded-full hover:bg-blue-100 transition-colors duration-200 dark:bg-yellow-700 dark:text-gray-100"
                >
                  {course}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
