"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import SectionHeader from '../helper/SectionHeader';
import { GoRocket } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";
import { containerVariants, itemVariants } from "../utils/SpanAnimation";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      title: "UIU+",
      role: "Full Stack Developer | Software Engineering",
      description: "Full-stack platform with Q&A forums, real-time chat, buy/sell marketplace, and To-let listings. Features secure JWT authentication, file uploads with Multer, and role-based access for scalable user interactions.",
      techStack: ["React", "Vite", "Express.js", "SQL", "JWT", "Multer", "Socket.io"],
      githubLinks: {
        frontend: "https://github.com/dksaddy/frontend",
        backend: "https://github.com/dksaddy/backend",
      },
      category: "academic"
    },
    {
      title: "Telecure",
      role: "Full Stack Developer | Final Year Design Project",
      description: "Full-stack platform with appointment booking, video calls, prescriptions, and digital payments. Integrated SSLCommerz, Supabase, and GPT-based disease detection feature for primary diagnosis.",
      techStack: ["Next.js", "MongoDB", "Supabase", "SSLCommerz", "JWT", "WebRTC/Jitsi"],
      githubLinks: {
        fullstack: "https://github.com/dksaddy/telecure",
        "Deployed": "https://telecure.vercel.app"
      },
      category: "academic"
    },
    {
      title: "Hospital Management",
      role: "Desktop Application | Advance OOP",
      description: "Java-based desktop application for hospital management, supporting appointment scheduling, patient records, prescriptions, Implements file-based storage with multithreading and object-oriented design principles.",
      techStack: ["Java", "File System", "Socket.io", "Thread", "Collection", "File Database", "JavaFX"],
      githubLinks: {
        Project: "https://github.com/dksaddy/AOOP-Project-",
      },
      category: "academic"
    },
    {
      title: "Preferito Perfume",
      role: "Wordpress Developer | Ecommerce Website",
      description: "Java-based desktop application for hospital management, supporting appointment scheduling, patient records, prescriptions, Implements file-based storage with multithreading and object-oriented design principles.",
      techStack: ["Java", "File System", "Socket.io", "Thread", "Collection", "File Database", "JavaFX"],
      githubLinks: {
        Deployed: "https://preferitoperfume.com",
      },
      category: "production"
    },
  ];

  const getButtonClasses = (category) => `
  px-3 py-1 md:px-4 md:py-2 
  text-sm md:text-base 
  rounded-full font-bold 
  transition-all duration-300
  border cursor-pointer
  ${
    selectedCategory === category
      ? "bg-orange-500 text-white hover:bg-gray-400 hover:text-black"
      : "bg-yellow-200 dark:text-black hover:bg-gray-200 border-gray-300"
  }
`;



  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="min-h-screen py-15 px-4 md:px-8 lg:px-15 bg-white overflow-hidden dark:bg-background"
    >
      <div className="max-w-7xl mx-auto">

        <SectionHeader
          header="Featured PROJECTS"
          tittle="My Works and Collaborations"
          mb="mb-5"
        />

        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-5">
          <button
            onClick={() => setSelectedCategory("all")}
            className={getButtonClasses("all")}
          >
            ALL
          </button>
          <button
            onClick={() => setSelectedCategory("academic")}
            className={getButtonClasses("academic")}
          >
            ACADEMIC
          </button>
          <button
            onClick={() => setSelectedCategory("production")}
            className={getButtonClasses("production")}
          >
            PRODUCTION
          </button>
          <button
            onClick={() => setSelectedCategory("hobby")}
            className={getButtonClasses("hobby")}
          >
            HOBBY
          </button>
        </div>


        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative h-full rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                <div className="p-6 sm:bg-white dark:sm:bg-background">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    {/* Title + Role */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-gary-600 font-medium dark:text-foreground">
                        {project.role}
                      </p>
                    </div>

                    {/* GitHub/Deployed Links */}
                    <div className="flex space-x-4">
                      {Object.entries(project.githubLinks).map(([key, value]) => (
                        <a
                          key={key}
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                          aria-label={`${key} code`}
                        >
                          {key.toLowerCase().includes("live") ||
                            key.toLowerCase().includes("deploy") ? (
                            <GoRocket className="text-xl text-black" />
                          ) : (
                            <FaGithub className="text-xl text-black" />
                          )}
                          <span className="mt-1 text-xs text-gray-600 capitalize font-bold">
                            {key}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-foreground mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">
                      TECH STACK
                    </h4>

                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.5 }}
                    >
                      {project.techStack.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-yellow-200 text-gray-800 rounded-full"
                          variants={itemVariants}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
