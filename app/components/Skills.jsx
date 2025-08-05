import {
  FaCode,
  FaCogs,
  FaDatabase,
  FaCloud,
  FaBolt,
  FaGitAlt,
  FaPalette,
  FaMoneyCheckAlt,
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
  SiPostgresql,
  SiMysql,
  SiMongoose,
  SiJitsi,
  SiSocketdotio,
  SiWebrtc,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiSupabase,
  SiC,
  SiCplusplus,
  SiJsonwebtokens,
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
  "REST APIs": { icon: <SiPostman />, color: "bg-orange-500 text-white" },
  "JWT Authentication": { icon: <SiJsonwebtokens />, color: "bg-yellow-500 text-black" },
  MongoDB: { icon: <SiMongodb />, color: "bg-green-700 text-white" },
  "SQL (MySQL/PostgreSQL)": { icon: <SiMysql />, color: "bg-blue-500 text-white" },
  Mongoose: { icon: <SiMongoose />, color: "bg-red-400 text-white" },
  Multer: { icon: <FaToolbox />, color: "bg-gray-500 text-white" },
  Supabase: { icon: <SiSupabase />, color: "bg-green-500 text-white" },
  "Cloud Storage": { icon: <FaCloud />, color: "bg-blue-400 text-white" },
  Jitsi: { icon: <SiJitsi />, color: "bg-indigo-500 text-white" },
  "Socket.io": { icon: <SiSocketdotio />, color: "bg-black text-white" },
  WebRTC: { icon: <SiWebrtc />, color: "bg-green-500 text-white" },
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
    icon: <FaCode className="text-red-400 text-4xl" />,
    items: ["JavaScript", "TypeScript", "Python", "C", "C++", "Java"],
  },
  {
    name: "Frontend",
    icon: <FaPalette className="text-blue-400 text-4xl" />,
    items: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    name: "Backend",
    icon: <FaCogs className="text-green-400 text-4xl" />,
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    name: "Database",
    icon: <FaDatabase className="text-purple-400 text-4xl" />,
    items: ["MongoDB", "SQL (MySQL/PostgreSQL)", "Mongoose"],
  },
  {
    name: "File & Media Handling",
    icon: <FaCloud className="text-cyan-400 text-4xl" />,
    items: ["Multer", "Supabase", "Cloud Storage"],
  },
  {
    name: "Real-Time & Communication",
    icon: <FaBolt className="text-pink-400 text-4xl" />,
    items: ["Jitsi", "Socket.io", "WebRTC"],
  },
  {
    name: "Version Control",
    icon: <FaGitAlt className="text-orange-400 text-4xl" />,
    items: ["Git", "GitHub"],
  },
  {
    name: "Payment Integration",
    icon: <FaMoneyCheckAlt className="text-yellow-400 text-4xl" />,
    items: ["SSLCommerz"],
  },
  {
    name: "Tools & Others",
    icon: <FaToolbox className="text-gray-400 text-4xl" />,
    items: ["Postman", "VS Code", "Netlify", "Vercel", "NPM"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-4 md:px-12 pt-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Skills
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6"
          >
            <div className="flex items-center justify-start mb-4">
              {skill.icon}
              <h3 className="text-2xl font-bold text-gray-800 ml-3">
                {skill.name}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => {
                const tech = techIcons[item] || {
                  icon: <FaToolbox />,
                  color: "bg-gray-300 text-black",
                };
                return (
                  <li
                    key={i}
                    className={`flex items-center gap-1 px-2 py-1 rounded ${tech.color} text-xs font-semibold`}
                  >
                    <span className="text-sm">{tech.icon}</span>
                    {item.toUpperCase()}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
