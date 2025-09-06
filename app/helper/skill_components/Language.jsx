import { FaJsSquare, FaPython, FaPhp, FaJava, FaLongArrowAltRight } from "react-icons/fa";
import { SiTypescript, SiC, SiCplusplus } from "react-icons/si";
import { CgSmileNone } from "react-icons/cg";
import { motion } from "framer-motion";

export default function Backend() {
    const skills = [
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "Java", icon: <FaJava className="text-blue-600" /> },
        { name: "Python", icon: <FaPython className="text-purple-600" /> },
        { name: "Php", icon: <FaPhp className="text-blue-400" /> },
        { name: "C", icon: <SiC className="text-black dark:text-white" /> },
        { name: "C++", icon: <SiCplusplus className="text-cyan-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "What", icon: <CgSmileNone className="text-gray-400" /> },
        { name: "To", icon: <CgSmileNone className="text-gray-400" /> },
        { name: "Learn", icon: <CgSmileNone className="text-gray-400" /> },
        { name: "Next", icon: <CgSmileNone className="text-gray-400" /> },
        { name: "!!!", icon: <CgSmileNone className="text-gray-400" /> },
    ];

    // Generate rows: 5, 4, 3, 2, 1
    const rowPattern = [3, 4, 5];
    let index = 0;
    const rows = rowPattern.map((count) => {
        const rowItems = skills.slice(index, index + count);
        index += count;
        return rowItems;
    });

    return (
        <div className="flex flex-col items-start gap-4 rounded-lg">

            <motion.div
                className="flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-gray-200 mt-2"
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            >
                <h3>LANGUAGE</h3>
                <span><FaLongArrowAltRight /></span>
            </motion.div>

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
