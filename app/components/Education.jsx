export default function Education() {
  const education = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "United International University",
      year: "2020 - 2024",
      details: "CGPA: 3.05/4.00",
    },
    {
      degree: "HSC (Science)",
      institution: "Mohammadpur Preparatory School and College, Dhaka",
      year: "2018 - 2020",
      details: "GPA: 3.67/5.00",
    },
    {
      degree: "SSC (Science)",
      institution: "Govt. Mohammadpur Model School and College, Dhaka",
      year: "2016 - 2018",
      details: "GPA: 4.86/5.00",
    },
  ];

  return (
    <section
      id="education"
      className="scroll-mt-20 w-full bg-gray-50 dark:bg-gray-900 py-12 px-4 md:px-8 lg:px-32"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-blue-700 dark:text-blue-400 text-center">
        Education
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300 flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{edu.degree}</h3>
            <span className="text-blue-600 dark:text-blue-300 font-medium mb-1">{edu.institution}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.year}</span>
            <span className="text-gray-700 dark:text-gray-300">{edu.details}</span>
          </div>
        ))}
      </div>
    </section>
  );
}