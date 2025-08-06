export default function Certification() {
  const certifications = [
    {
      title: "JavaScript Full Stack Mastery (Node.js, React.js, Next.js)",
      institution: "Center for Development of IT Professionals (CDIP), United International University",
      completionDate: "March 2025",
      verifyLink: "https://cdip.uiu.ac.bd/verify/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  return (
    <section id="certification" className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
            Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              
              <div className="relative h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                    <p className="text-blue-600 font-medium">{cert.institution}</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
                  <div className="px-3 py-1.5 bg-blue-50 rounded-full w-fit">
                    <p className="text-sm font-medium text-blue-600">Completed: {cert.completionDate}</p>
                  </div>
                  
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium w-fit"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Verify Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}