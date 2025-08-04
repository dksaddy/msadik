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
} from "react-icons/fa";

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
    <section id="skills" className="bg-gray-50 py-12 px-4 md:px-12 pt-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Skills
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6"
          >
            <div className="flex items-center justify-center mb-4">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-3">
              {skill.name}
            </h3>
            <ul className="text-sm text-gray-600 space-y-1 text-center">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
