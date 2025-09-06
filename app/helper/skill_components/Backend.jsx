import { FaNode, FaLongArrowAltLeft, FaMoneyBillAlt } from "react-icons/fa";
import { SiExpress, SiAegisauthenticator, SiJitsi, SiSocketdotio, SiMongodb, SiMysql } from "react-icons/si";
import { CgSmileNone } from "react-icons/cg";
import { motion } from "framer-motion";

export default function Backend() {
    const skills = [
        { name: "Express", icon: <SiExpress className="text-black" /> },
        { name: "Node", icon: <FaNode className="text-green-600" /> },
        { name: "JWT Auth", icon: <SiAegisauthenticator className="text-yellow-500" /> },
        { name: "SSLComerz", icon: <FaMoneyBillAlt className="text-blue-400" /> },
        { name: "Jitsi", icon: <SiJitsi className="text-black dark:text-white" /> },
        { name: "Socket.io", icon: <SiSocketdotio className="text-cyan-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Mysql", icon: <SiMysql className="text-purple-900" /> },
        { name: "What", icon: <CgSmileNone className="text-gray-400" /> },
        { name: "To", icon: <CgSmileNone className="text-gray-400" /> },
        { name: "Do", icon: <CgSmileNone className="text-gray-400" /> },
        { name: "Now!", icon: <CgSmileNone className="text-gray-400" /> },
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
            <motion.div
                className="flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-gray-200"
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            >
                <span><FaLongArrowAltLeft /></span>
                <h3>BACKEND</h3>
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
