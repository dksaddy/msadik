export default function Footer() {
    return (
        <footer className="bg-white text-gray-800 py-8 px-4 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Left Side: Contact and Links */}
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold mb-2">Mohiuddin Sadik</h3>
                    <p className="text-sm">Full Stack Developer | Software Engineer</p>
                    <p className="text-sm">Email: example@email.com</p>
                </div>

                {/* Right Side: Social Media Links */}
                <div className="flex justify-center gap-6 mb-6 md:mb-0">
                    <a
                        href="https://github.com/dksaddy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
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
                        href="https://linkedin.com/in/dksaddy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
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

            {/* Bottom: Copyright */}
            <div className="text-center text-sm text-gray-500 mt-6">
                <p>&copy; {new Date().getFullYear()} Mohiuddin Sadik. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
