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
    gradient: "from-red-400 to-pink-500"
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
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    name: "Backend",
    icon: <FaCogs className="text-green-400 text-4xl" />,
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    gradient: "from-green-400 to-emerald-500"
  },
  {
    name: "Database",
    icon: <FaDatabase className="text-purple-400 text-4xl" />,
    items: ["MongoDB", "SQL (MySQL/PostgreSQL)", "Mongoose"],
    gradient: "from-purple-400 to-violet-500"
  },
  {
    name: "File & Media Handling",
    icon: <FaCloud className="text-cyan-400 text-4xl" />,
    items: ["Multer", "Supabase", "Cloud Storage"],
    gradient: "from-cyan-400 to-sky-500"
  },
  {
    name: "Real-Time & Communication",
    icon: <FaBolt className="text-pink-400 text-4xl" />,
    items: ["Jitsi", "Socket.io", "WebRTC"],
    gradient: "from-pink-400 to-rose-500"
  },
  {
    name: "Version Control",
    icon: <FaGitAlt className="text-orange-400 text-4xl" />,
    items: ["Git", "GitHub"],
    gradient: "from-orange-400 to-amber-500"
  },
  {
    name: "Payment Integration",
    icon: <FaMoneyCheckAlt className="text-yellow-400 text-4xl" />,
    items: ["SSLCommerz"],
    gradient: "from-yellow-400 to-amber-500"
  },
  {
    name: "Tools & Others",
    icon: <FaToolbox className="text-gray-400 text-4xl" />,
    items: ["Postman", "VS Code", "Netlify", "Vercel", "NPM"],
    gradient: "from-gray-400 to-gray-500"
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>

              <div className="relative h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 p-6">
                <div className="flex items-center mb-6">
                  <div className={`p-3 ${skill.gradient} rounded-lg text-white`}>
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
                      <div
                        key={i}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg ${tech.color} shadow-sm hover:shadow-md transition-all duration-200`}
                      >
                        <span className="text-base">{tech.icon}</span>
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}