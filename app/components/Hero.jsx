'use client';
import { motion } from 'framer-motion';
import Typewriter from './Typewriter';
import ConsoleLogCard from './ConsoleLogCard';

export default function Hero() {
  const consoleLogMessages = [
    { text: 'Initializing portfolio...', position: 'top-4 left-4 md:top-10 md:left-10' },
    { text: 'Loading components...', position: 'top-8 right-4 md:top-20 md:right-10' },
    { text: 'Compiling assets...', position: 'bottom-8 left-4 md:bottom-20 md:left-20' },
    { text: 'Deployment successful!', position: 'bottom-4 right-4 md:bottom-10 md:right-20' },
  ];

  return (
    <section id="home" className="relative flex items-center justify-center bg-white text-gray-800 overflow-hidden py-24">
      {/* Console Log Cards */}
      {consoleLogMessages.map((msg, index) => (
        <ConsoleLogCard
          key={index}
          text={msg.text}
          position={msg.position}
          animation={{
            y: [0, -10, 0],
            transition: {
              duration: 3 + index,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="bg-gray-100 rounded-2xl shadow-lg p-6 max-w-sm w-full mx-auto">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-500">
                <img
                  src="Mohiuddin Mohammad Sadik_Software Engineer.jpg"
                  alt="Mohiuddin Mohammad Sadik"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">Mohiuddin Mohammad Sadik</h3>
                <p className="text-gray-600 text-xs md:text-sm">Dhaka, Bangladesh</p>
                <p className="text-gray-600 text-xs md:text-sm truncate">msadik3086@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
            <Typewriter texts={["FULL STACK DEVELOPER", "FRONTEND DEVELOPER", "MOBILE APPS DEVELOPER"]} />
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 mb-10">
            "Hey, This is Sadik a passionate software engineer want to collaborate and invent great thing to ease Life."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-transform duration-300 transform hover:scale-105 shadow-lg"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}