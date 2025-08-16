"use client";
import { motion } from "framer-motion"
import SectionHeader from "../helper/SectionHeader";
import {containerVariants, itemVariants} from "../utils/SpanAnimation"

export default function Certification() {
  const certifications = [
    {
      title: "JavaScript Full Stack Mastery (Node.js, React.js, Next.js)",
      institution: "Center for Development of IT Professionals (CDIP), United International University",
      completionDate: "March 2025",
      stack: ["React", "HTML5", "CSS3", "Javascript", "Prisma", "NextJS"],
      verifyLink: "https://cdip.uiu.ac.bd/verify/",
      logo: "/cdip.jpeg", // image file in /public or use full URL
    },
    {
      title: "Web Design and Development for Freelancing Level 3",
      institution: "National Skills Development Authority",
      completionDate: "August 2025",
      stack: ["Bootstrap", "HTML5", "CSS3", "Javascript", "UI", "UX"],
      verifyLink: "#",
      logo: "/nsda.png", // image file in /public or use full URL
    },
  ];

  return (
    <section id="certification" className="py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          header="Certification & RECOGNITION"
          tittle="The Recognition I Have Achieved Over Courses"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: index % 2 !== 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="relative h-full border border-gray-200 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 p-6">

                {/* Header: Logo + Institution */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 border-b border-gray-300 pb-4">
                  <img
                    src={cert.logo}
                    alt="Institution Logo"
                    className="w-15 h-15 rounded object-cover border border-blue-400"
                  />
                  <p className="text-sm font-semibold text-gray-800">{cert.institution}</p>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-800 mb-4">{cert.title}</h3>

                {/* Completion date */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-bold bg-gray-100 text-gray-600 rounded-full">
                    Completed: {cert.completionDate}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">TECH STACK</h4>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }} // triggers on scroll in view
                  >
                    {cert.stack.map((tech, i) => (
                      <motion.span
                        key={i}
                        variants={itemVariants}
                        className="px-3 py-1 text-xs font-medium bg-yellow-200 text-gray-800 rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                </div>

                {/* Verify Link Button */}
                <div className="text-right">
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-md transition-colors"
                  >
                    Verify Link
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
