"use client";
import { motion } from 'framer-motion';
export default function Experience() {
  const experiences = [
    {
      title: "WordPress Developer",
      company: "Preferito Perfume",
      period: "February 2025 - June 2025",
      details: [
        "Developed and deployed a custom e-commerce website using WordPress and WooCommerce",
        "Customized WordPress plugins and edited PHP code for business needs",
        "Trained employees on website management and order processing",
      ],
      skills: ["WordPress", "WooCommerce", "PHP", "E-commerce"],
    },

  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Work <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            My professional journey and contributions
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
        >
          {experiences.map((exp, idx) => (
            <div key={idx} className="group">
              <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3 mb-5">
                  {exp.details.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <svg
                        className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}