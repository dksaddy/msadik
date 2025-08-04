export default function Project() {
  const projects = [
    {
      title: "UIU+",
      role: "Full Stack Developer | Software Engineering",
      description:
        "Full-stack web app enabling Q&A, chat, marketplace, and To-let listings with JWT auth and file uploads.",
      techStack: "React, Vite, Express.js, SQL, JWT, Multer, Socket.io",
      githubLinks: {
        frontend: "https://github.com/your-frontend-link",
        backend: "https://github.com/your-backend-link",
      },
    },
    {
      title: "Telecure",
      role: "Full Stack Developer | Final Year Design Project",
      description:
        "Full-stack platform with appointment booking, video calls, prescriptions, and digital payments. Integrated SSLCommerz, Supabase, and GPT-based disease detection feature for primary diagnosis.",
      techStack: "Next.js, MongoDB, Supabase, SSLCommerz, JWT, WebRTC/Jitsi",
      githubLinks: {
        fullstack: "https://github.com/your-fullstack-link",
      },
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-1">
              {project.title}
            </h3>
            <p className="text-gray-700 font-medium">{project.role}</p>
            <p className="text-sm text-gray-500 mb-4">Tech Stack: {project.techStack}</p>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-4 mt-2">
              {project.githubLinks.frontend && (
                <a
                  href={project.githubLinks.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-500 hover:underline"
                >
                  Frontend
                </a>
              )}
              {project.githubLinks.backend && (
                <a
                  href={project.githubLinks.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-500 hover:underline"
                >
                  Backend
                </a>
              )}
              {project.githubLinks.fullstack && (
                <a
                  href={project.githubLinks.fullstack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-500 hover:underline"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
