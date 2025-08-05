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
  ];

  return (
    <section id="experience" className="bg-gray-50 py-12 px-4 md:px-12 pt-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Experience
      </h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-7xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-1">
              {exp.title}
            </h3>
            <p className="text-gray-700 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
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
