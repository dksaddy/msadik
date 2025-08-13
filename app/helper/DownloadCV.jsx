"use client";
import { motion } from "framer-motion";
import { IoIosDownload } from "react-icons/io";
import "../globals.css"; // Ensure global styles are imported

export default function DownloadCV() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
                <a
                    href="Resume of MOHIUDDIN MOHAMMAD SADIK.pdf"
                    download
                    className="animated-border-btn inline-flex items-center p-6 font-semibold my-5"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <IoIosDownload className="text-2xl animate-bounce mr-2" />
                    Resume
                </a>

            </motion.div>
        </>
    );
}
