export default function Certification() {
  const certifications = [
    {
      title: "JavaScript Full Stack Mastery (Node.js, React.js, Next.js)",
      institution: "Center for Development of IT Professionals (CDIP), United International University",
      completionDate: "March 2025",
      verifyLink: "https://cdip.uiu.ac.bd/verify/",  // Replace with the actual verification link
    },
  ];

  return (
    <section id="certification" className="bg-gray-50 py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Certification
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-1">
              {cert.title}
            </h3>
            <p className="text-gray-700 font-medium mb-2">
              {cert.institution}
            </p>
            <p className="text-sm text-gray-500 mb-4">Completed: {cert.completionDate}</p>
            <a
              href={cert.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium hover:underline"
            >
              Verify
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
