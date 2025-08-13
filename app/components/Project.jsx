"use client"
import { motion } from "framer-motion"
import SectionHeader from '../helper/SectionHeader';
import { GoRocket } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";

export default function Projects() {
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
    },
    {
      title: "Hospital Management",
      role: "Desktop Application | Advance OOP",
      description: "Java-based desktop application for hospital management, supporting appointment scheduling, patient records, prescriptions, Implements file-based storage with multithreading and object-oriented design principles.",
      techStack: ["Java", "File System", "Socket.io", "Thread", "Collection", "File Database", "JavaFX"],
      githubLinks: {
        Project: "https://github.com/dksaddy/AOOP-Project-",
      },
    },
  ];

  return (
    <section id="projects" className="py-15 px-4 md:px-8 lg:px-15 bg-white">
      <div className="max-w-7xl mx-auto">

        <SectionHeader header="Featured PROJECTS" tittle="A Little More About Me" />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative">

              <div className="relative h-full rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                <div className="p-6">

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    {/* Title + Role */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                      <p className="text-indigo-600 font-medium">{project.role}</p>
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
                          {key.toLowerCase().includes("live") || key.toLowerCase().includes("deploy") ? (
                            <GoRocket className="text-xl text-black" />
                          ) : (
                            <FaGithub className="text-xl text-black" />
                          )}
                          <span className="mt-1 text-xs text-gray-600 capitalize font-bold">{key}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">TECH STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium bg-yellow-200 text-gray-800 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}