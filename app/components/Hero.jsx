'use client';
import { motion } from 'framer-motion';
import Typewriter from '../helper/Typewriter';
import ConsoleLogCard from '../helper/ConsoleLogCard';
import MatrixClock from '../helper/Clock';
import { LuContact } from "react-icons/lu";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import DownloadCV from '../helper/DownloadCV';
import EmailCopy from '../helper/EmailAddress';
import FloatingPaths from '../backgrounds/FloatingPath';


export default function Hero() {
  const consoleLogMessages = [
    { text: 'Initializing portfolio...', position: 'top-20 left-4 md:top-20 md:left-10' },
    { text: 'Loading components...', position: 'top-28 right-4 md:top-28 md:right-10' },
    { text: 'Compiling assets...', position: 'bottom-8 left-4 md:bottom-20 md:left-20' },
    { text: 'Deployment successful!', position: 'bottom-4 right-4 md:bottom-10 md:right-20' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center bg-white text-gray-800 overflow-hidden py-24 lg:py-10
    dark:bg-background"
    >

      {/*<div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>*/}
      {/* Console Log Cards */}
      {consoleLogMessages.map((msg, index) => (
        <ConsoleLogCard
          key={index}
          text={msg.text}
          position={msg.position}
          animation={{
            y: [0, -20, 0],
            transition: {
              duration: 3 + index,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6 md:w-4/2">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}

          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >

          <MatrixClock />

          <div className="rounded-lg p-2 max-w-sm w-full mx-auto">
            <div className="flex items-center space-x-5 shadow-sm rounded-l-4xl p-5 dark:border">

              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-300">
                <img
                  src="/Mohiuddin Mohammad Sadik_Software Engineer.jpg"
                  alt="Mohiuddin Mohammad Sadik"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <h3
                  className="font-semibold text-gray-900 text-sm md:text-base dark:text-foreground"
                >
                  Mohiuddin Mohammad Sadik
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mb-1 dark:text-foreground">Dhaka, Bangladesh</p>
                <EmailCopy hero={true} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <h1
            className="text-2xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-black/80 bg-clip-text text-transparent
           dark:bg-white/80"
          >
            <Typewriter texts={["FULL STACK DEVELOPER", "FRONTEND DEVELOPER", "MOBILE APPS DEVELOPER"]} />
          </h1>
          <p
            className="text-md md:text-md lg:text-xl max-w-2xl mx-auto text-gray-600 mb-10 
           dark:text-foreground font-medium">
            <span className='text-xl md:text-3xl'>"</span>
            Hey, This is Saddy a software engineer who wants to collaborate and develop great thing to ease Life.
            <span className='text-xl md:text-3xl'>"</span>
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center items-center gap-10 mb-5 p-2 lg:w-1/3 sm:w-full mx-auto rounded-xl"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <a href="#contact">
            <LuContact className="lg:text-4xl text-3xl dark:text-foreground" />
          </a>

          <a href="https://github.com/dksaddy" target="_blank">
            <FaGithubSquare className="lg:text-4xl text-3xl dark:text-foreground" />
          </a>

          <a href="https://linkedin.com/in/msadik3086" target="_blank">
            <FaLinkedin className="lg:text-4xl text-3xl dark:text-foreground" />
          </a>

          <a href="https://leetcode.com/u/saddypro1/" target="_blank">
            <SiLeetcode className="lg:text-4xl text-3xl dark:text-foreground" />
          </a>

        </motion.div>


        <DownloadCV />

      </div>
    </section>
  );
}