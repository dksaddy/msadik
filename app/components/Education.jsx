export default function Education() {
  const education = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "United International University",
      year: "2020 - 2024",
      details: "CGPA: 3.05/4.00",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      degree: "HSC (Science)",
      institution: "Mohammadpur Preparatory School and College, Dhaka",
      year: "2017 - 2019",
      details: "GPA: 3.67/5.00",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      degree: "SSC (Science)",
      institution: "Govt. Mohammadpur Model School and College, Dhaka",
      year: "2015 - 2017",
      details: "GPA: 4.86/5.00",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
  ];

  return (
    <section id="education" className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full mb-4">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education <span className="text-indigo-600">History</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, idx) => (
            <div 
              key={idx}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              
              <div className="relative h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 p-6 border-l-4 border-indigo-500">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-indigo-100 rounded-full text-indigo-600 mb-4">
                    {edu.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-indigo-600 font-medium mb-2">{edu.institution}</p>
                  <p className="text-sm text-gray-500 mb-3">{edu.year}</p>
                  
                  <div className="px-4 py-2 bg-indigo-50 rounded-full">
                    <p className="text-indigo-700 font-medium">{edu.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}