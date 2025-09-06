import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaLongArrowAltLeft } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiVite, SiMui } from "react-icons/si";
import { CgSmileNone } from "react-icons/cg";

export default function Backend() {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <RiNextjsFill className="text-black dark:text-white" /> },
        { name: "Tailwind", icon: <RiTailwindCssFill className="text-cyan-500" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "Vite", icon: <SiVite className="text-purple-500" /> },
        { name: "Mui", icon: <SiMui className="text-blue-400" /> },
        { name: "More...", icon: <CgSmileNone className="text-gray-400" /> },
        { name: "More...", icon: <CgSmileNone className="text-gray-400" /> },
        { name: "More...", icon: <CgSmileNone className="text-gray-400" /> },
        { name: "More...", icon: <CgSmileNone className="text-gray-400" /> },
        { name: "More...", icon: <CgSmileNone className="text-gray-400" /> },
    ];

    // Generate rows: 5, 4, 3, 2, 1
    const rowPattern = [5, 4, 3];
    let index = 0;
    const rows = rowPattern.map((count) => {
        const rowItems = skills.slice(index, index + count);
        index += count;
        return rowItems;
    });

    return (
        <div className="flex flex-col items-end gap-4 rounded-lg">
            <div className="flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-gray-200">
                <span><FaLongArrowAltLeft /></span>
                <h3>BACKEND</h3>
            </div>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-row gap-2 sm:gap-4 justify-start">
                    {row.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center w-16 h-16 
                     border rounded-xl shadow-md 
                     hover:shadow-lg hover:scale-105 transition-transform duration-300 
                     bg-white dark:bg-gray-800 cursor-pointer"
                        >
                            <p className="text-2xl sm:text-4xl mb-1 drop-shadow-sm">{skill.icon}</p>
                            <p className="text-center text-[10px] font-bold text-gray-800 dark:text-gray-200">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            ))}
        </div>

    );
}
