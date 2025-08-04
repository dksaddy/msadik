import "../CSS/about.css"

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-12 px-6 md:px-16 lg:px-32 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Left: Image with animation */}
      <div className="flex-1 flex justify-center md:justify-start mt-8 md:mt-0">
        <div className="relative group">
          <img
            src="./Mohiuddin Mohammad Sadik_Software Engineer.jpg"
            alt="Mohiuddin Mohammad Sadik"
            className="w-40 h-40 md:w-56 md:h-56 border-4 border-blue-500 dark:border-blue-400 shadow-xl object-cover
              transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 animate-fade-in"
          />
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 text-xs px-4 py-2 rounded-full shadow-lg opacity-90 animate-fade-in-up text-center whitespace-nowrap">
            Software Engineer
          </span>
        </div>
      </div>
      {/* Right: About Me with animation */}
      <div className="flex-1 text-center md:text-left animate-fade-in-right px-2 md:px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-700 dark:text-blue-400">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
          Hi, I am{" "}
          <span className="font-semibold text-blue-700 dark:text-blue-400">
            Mohiuddin Mohammad Sadik
          </span>
          , a passionate software engineer with experience in building modern web
          applications. I love learning new technologies and solving real-world
          problems.
        </p>
      </div>
    </section>
  );
}