export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-16 px-6 md:px-16 lg:px-32 bg-gray-50"
    >
      {/* Left: Image */}
      <div className="flex-1 flex justify-center md:justify-start">
        <div className="relative group">
          <img
            src="./Mohiuddin Mohammad Sadik_Software Engineer.jpg"
            alt="Mohiuddin Mohammad Sadik"
            className="w-40 h-40 md:w-56 md:h-56 object-cover rounded border-4 border-blue-400 shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
          />
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-400 text-white text-xs px-4 py-1 rounded-full shadow-md text-center whitespace-nowrap">
            Software Engineer
          </span>
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About Me
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
          Hi, I am{" "}
          <span className="font-semibold text-blue-500">
            Mohiuddin Mohammad Sadik
          </span>
          , a passionate software engineer with experience in building modern web
          applications. I love learning new technologies and solving real-world
          problems through clean, scalable code and creative solutions.
        </p>
      </div>
    </section>
  );
}
