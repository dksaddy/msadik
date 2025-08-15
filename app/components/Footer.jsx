import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import EmailCopy from "../helper/EmailAddress";

export default function Footer() {
  const buttonStayle = "p-1 bg-white rounded hover:bg-yellow-200 transition-colors duration-300 border border-gray-300"

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
            <EmailCopy hero={false}/>
          </div>
        </div>


        {/* Social Media */}
        <div className="flex space-x-3 justify-center">
          <a
            href="https://github.com/dksaddy"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStayle}
            aria-label="GitHub"
          >
           <FaGithubSquare className="text-xl"/> 
          </a>
          <a
            href="https://linkedin.com/in/msadik3086"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStayle}
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
