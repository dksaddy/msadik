import { FaGitAlt, FaGithub, FaNpm, FaFileImport, FaLongArrowAltLeft, } from "react-icons/fa";
import { SiTypescript, SiVite, SiPostman, SiVercel, SiSupabase } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { CgSmileNone } from "react-icons/cg";
import { motion } from "framer-motion";

export default function Frontend() {
    const skills = [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
        { name: "Vercel", icon: <SiVercel className="text-black" /> },
        { name: "NPM", icon: <FaNpm className="text-red-600" /> },
        { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
        { name: "Supabase", icon: <SiSupabase className="text-green-600" /> },
        { name: "Multer", icon: <FaFileImport className="text-purple-600" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
        { name: "Hire", icon: <CgSmileNone className="text-gray-400" /> },
        { name: "Me", icon: <CgSmileNone className="text-gray-400" /> },
        { name: "Please!", icon: <CgSmileNone className="text-gray-400" /> },
        { name: "HAHA", icon: <CgSmileNone className="text-gray-400" /> },
        { name: "More...", icon: <CgSmileNone className="text-gray-400" /> },
    ];

    // Triangle rows: 5, 4, 3
    const rowPattern = [3, 4, 5];
    let index = 0;
    const rows = rowPattern.map((count) => {
        const rowItems = skills.slice(index, index + count);
        index += count;
        return rowItems;
    });

    return (
        <div className="flex flex-col items-end gap-4 rounded-lg">
            {/* Header */}
            <motion.div
                className="flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-gray-200 mt-2"
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            >
                <span><FaLongArrowAltLeft /></span>
                <h3>TOOLS</h3>
            </motion.div>

            {/* Triangle pattern (always visible) */}
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-row gap-2 sm:gap-4 justify-start">
                    {row.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center 
                         w-16 h-16
                         border rounded-xl shadow-md 
                         hover:shadow-lg hover:scale-105 transition-transform duration-300 
                         bg-white dark:bg-gray-800 cursor-pointer"
                        >
                            <p className="text-2xl sm:text-4xl mb-1 drop-shadow-sm">
                                {skill.icon}
                            </p>
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
