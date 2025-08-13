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
            className="p-2 bg-gray-200 rounded-full hover:bg-blue-100 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5 text-gray-700 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73
                1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.335-5.467-5.93
                0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404
                c1.02.005 2.047.137 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.648 1.653.243 2.873.12 3.176.765.84 1.23 1.91
                1.23 3.22 0 4.61-2.807 5.625-5.48 5.92.42.36.81 1.096.81 2.213 0 1.6-.015 2.887-.015 3.28 0 .317.21.69.825.573C20.565
                21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/msadik3086"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-200 rounded-full hover:bg-blue-100 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 text-gray-700 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M20.447 20.452H17.21v-5.569c0-1.328-.025-3.038-1.851-3.038-1.854 0-2.138 
                1.446-2.138 2.939v5.668h-3.24V9h3.111v1.561h.045c.434-.82 1.494-1.683 3.075-1.683 3.289 0 
                3.894 2.164 3.894 4.977v6.597zM5.337 7.433c-1.04 0-1.882-.843-1.882-1.882 0-1.04.842-1.882 
                1.882-1.882 1.039 0 1.882.842 1.882 1.882 0 1.039-.843 1.882-1.882 1.882zM6.765 
                20.452H3.91V9h2.855v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 
                1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-4 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Mohiuddin Sadik. All rights reserved.
          <span className="mx-1 md:mx-2">•</span>
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
