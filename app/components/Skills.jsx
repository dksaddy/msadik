"use client";
import { motion } from "framer-motion";
import SectionHeader from '../helper/SectionHeader';
import {
  FaCode,
  FaCogs,
  FaMoneyCheckAlt,
  FaTools,
  FaToolbox,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaJava,
  FaJsSquare,
  FaGit,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJitsi,
  SiSocketdotio,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiSupabase,
  SiC,
  SiCplusplus,
  SiJsonwebtokens,
  SiPeakdesign
} from "react-icons/si";

// Tech icon map with optional colors
const techIcons = {
  JavaScript: { icon: <FaJsSquare />, color: "bg-yellow-400 text-black" },
  TypeScript: { icon: <SiTypescript />, color: "bg-blue-500 text-white" },
  Python: { icon: <FaPython />, color: "bg-blue-400 text-white" },
  C: { icon: <SiC />, color: "bg-gray-500 text-white" },
  "C++": { icon: <SiCplusplus />, color: "bg-gray-600 text-white" },
  Java: { icon: <FaJava />, color: "bg-red-600 text-white" },
  HTML5: { icon: <FaHtml5 />, color: "bg-orange-500 text-white" },
  CSS3: { icon: <FaCss3Alt />, color: "bg-blue-600 text-white" },
  "React.js": { icon: <FaReact />, color: "bg-cyan-500 text-black" },
  "Next.js": { icon: <FaReact />, color: "bg-black text-white" },
  "Tailwind CSS": { icon: <SiTailwindcss />, color: "bg-sky-400 text-white" },
  Vite: { icon: <SiVite />, color: "bg-purple-500 text-white" },
  "Node.js": { icon: <FaNodeJs />, color: "bg-green-500 text-white" },
  "Express.js": { icon: <SiExpress />, color: "bg-gray-800 text-white" },
  "JWT Authentication": { icon: <SiJsonwebtokens />, color: "bg-yellow-500 text-black" },
  MongoDB: { icon: <SiMongodb />, color: "bg-green-700 text-white" },
  "SQL (MySQL/PostgreSQL)": { icon: <SiMysql />, color: "bg-blue-500 text-white" },
  Multer: { icon: <FaToolbox />, color: "bg-gray-500 text-white" },
  Supabase: { icon: <SiSupabase />, color: "bg-green-500 text-white" },
  Jitsi: { icon: <SiJitsi />, color: "bg-indigo-500 text-white" },
  "Socket.io": { icon: <SiSocketdotio />, color: "bg-black text-white" },
  Git: { icon: <FaGit />, color: "bg-orange-500 text-white" },
  GitHub: { icon: <FaGithub />, color: "bg-black text-white" },
  SSLCommerz: { icon: <FaMoneyCheckAlt />, color: "bg-blue-600 text-white" },
  Postman: { icon: <SiPostman />, color: "bg-orange-500 text-white" },
  "VS Code": { icon: <FaCode />, color: "bg-blue-500 text-white" },
  Netlify: { icon: <SiNetlify />, color: "bg-teal-500 text-white" },
  Vercel: { icon: <SiVercel />, color: "bg-black text-white" },
  NPM: { icon: <FaNpm />, color: "bg-red-500 text-white" },
};

const skills = [
  {
    name: "Languages",
    icon: <FaCode className="text-blue-400 text-4xl" />,
    items: ["JavaScript", "TypeScript", "Python", "C", "C++", "Java"],
  },
  {
    name: "Frontend",
    icon: <SiPeakdesign className="text-blue-400 text-4xl" />,
    items: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Vite"],
  },
  {
    name: "Backend",
    icon: <FaCogs className="text-blue-400 text-4xl" />,
    items: [
      "Node.js", "Express.js", "JWT Authentication", "SSLCommerz", "Jitsi", "Socket.io",
      "MongoDB", "SQL (MySQL/PostgreSQL)"
    ],
  },
  {
    name: "Tools",
    icon: <FaTools className="text-blue-400 text-4xl" />,
    items: ["Postman", "VS Code", "Netlify", "Vercel", "NPM", "Git", "GitHub", "Supabase", "Multer"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-10 px-4 md:px-8 lg:px-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <SectionHeader header="Tech STACKS" tittle="Language, Framwork & Tools I Use For Work"/>


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: (index + 1) * 0.12 }}
            >
              <div className="relative h-full rounded-xl border border-gray-300 transition-all duration-300 
              group-hover:-translate-y-1 p-6 hover:shadow-xl"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg text-white`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">
                    {skill.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, i) => {
                    const tech = techIcons[item] || {
                      icon: <FaToolbox />,
                      color: "bg-gray-300 text-black",
                    };

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: i * 0.1, // stagger the badges
                        }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg ${tech.color} shadow-sm hover:shadow-md transition-all duration-200`}
                      >
                        <span className="text-base">{tech.icon}</span>
                        <span className="text-sm font-medium">{item}</span>
                      </motion.div>
                    );
                  })}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}