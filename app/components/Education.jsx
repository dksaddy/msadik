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
      year: "2017 - 2019",
      details: "GPA: 3.67/5.00",
    },
    {
      degree: "SSC (Science)",
      institution: "Govt. Mohammadpur Model School and College, Dhaka",
      year: "2015 - 2017",
      details: "GPA: 4.86/5.00",
    },
  ];

  return (
    <section id="education" className="py-12 px-4 md:px-12 pt-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Education
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {edu.degree}
            </h3>
            <p className="text-blue-500 font-medium mb-1">{edu.institution}</p>
            <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
            <p className="text-gray-600">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
