export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 flex justify-center items-center py-16 px-6 md:px-16 lg:px-32 bg-gradient-to-b from-white to-indigo-50"
    >
      <div className="w-full max-w-3xl bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl overflow-hidden">
        <div className="relative flex flex-col md:flex-row">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full opacity-10 transform translate-x-12 -translate-y-12"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400 rounded-full opacity-10 transform -translate-x-12 translate-y-12"></div>

          {/* Image with decorative elements */}
          <div className="flex-1 p-8 flex flex-col items-center justify-center relative z-10">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-blue-300 rounded-xl rotate-12 opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-4 border-indigo-300 rounded-xl -rotate-12 opacity-50"></div>

              <div className="relative group">
                <img
                  src="./Mohiuddin Mohammad Sadik_Software Engineer.jpg"
                  alt="Mohiuddin Mohammad Sadik"
                  className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-xl border-4 border-white shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
                />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-sm px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                  Software Engineer
                </span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 p-8 bg-white/80 backdrop-blur-sm relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-1 bg-blue-500 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                About Me
              </h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Hi, I am{" "}
              <span className="font-semibold text-blue-600">
                Mohiuddin Mohammad Sadik
              </span>
              , a passionate software engineer with experience in building modern web
              applications. I love learning new technologies and solving real-world
              problems through clean, scalable code and creative solutions.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Web Development</span>
              <span className="px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Clean Code</span>
              <span className="px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Creative Solutions</span>
            </div>
          </div>
        </div>

        {/* Card footer */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-center">
          <p className="text-white/90 text-sm font-medium">Let's build something amazing together!</p>
        </div>
      </div>
    </section>
  );
}