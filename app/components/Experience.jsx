import "../CSS/experience.css";

export default function Experience() {
  const experiences = [
    {
      title: "WordPress Developer",
      company: "Preferito Perfume",
      period: "February 2025 - June 2025",
      details: [
        "Developed and deployed a custom e-commerce website using WordPress and WooCommerce, including product listings.",
        "Installed, configured, and customized WordPress plugins; edited PHP code to tailor functionality to business needs.",
        "Conducted training sessions for employees on website management, including order processing, inventory updates, and plugin usage.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "TechNova Solutions",
      period: "July 2024 - January 2025",
      details: [
        "Built responsive user interfaces with React and Tailwind CSS.",
        "Collaborated with backend developers to integrate RESTful APIs.",
        "Optimized web applications for speed and accessibility.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-20 w-full bg-gray-50 dark:bg-gray-900 py-12 px-4 md:px-16 lg:px-32"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-blue-700 dark:text-blue-400 text-center">
        Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 transition-colors duration-300 flex flex-col h-full animate-fade-in-up"
            style={{ animationDelay: `${idx * 0.15 + 0.1}s`, animationFillMode: "both" }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {exp.title}
                </h3>
                <span className="text-blue-600 dark:text-blue-300 font-medium">{exp.company}</span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                {exp.period}
              </span>
            </div>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 mt-2">
              {exp.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}