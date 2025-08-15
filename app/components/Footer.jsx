import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 py-6 px-4 md:px-8 lg:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">

        {/* About Section */}
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0 text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900 flex items-center justify-center md:justify-start">
              <span className="bg-blue-500 w-2 h-6 rounded-full mr-2"></span>
              Mohiuddin Sadik
            </h3>
            <p className="text-gray-600 text-sm">Full Stack Developer | Software Engineer</p>
            <a href="mailto:msadik3086@gmail.com" className="text-blue-600 hover:underline text-sm flex items-center justify-center md:justify-start space-x-1">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>msadik3086@gmail.com</span>
            </a>
          </div>
        </div>


        {/* Social Media */}
        <div className="flex space-x-3 justify-center">
          <a
            href="https://github.com/dksaddy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-200 rounded hover:bg-blue-300 transition-colors"
            aria-label="GitHub"
          >
           <FaGithubSquare className="text-xl"/> 
          </a>
          <a
            href="https://linkedin.com/in/msadik3086"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-200 rounded hover:bg-blue-300 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl"/> 
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-4 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Mohiuddin Sadik. All rights reserved.
          <span className="mx-1 md:mx-2">•</span>
          Built with NextJS, Tailwind CSS, Framer Motion
        </p>
      </div>
    </footer>
  );
}
