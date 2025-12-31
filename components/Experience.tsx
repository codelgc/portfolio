export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Data Intuitions",
      period: "05/2025 - Present",
      website: "https://dataintuitions.com/",
      achievements: [
        "Developed a full enterprise website in .NET MVC with secure authentication, dynamic content, and SQL Server integration",
        "Created a module to fetch and save structured data using .NET MVC and SQL Server, enhancing internal workflow automation",
        "Created document intelligence systems extracting structured data from PDFs and images",
        "Integrated SmartyStreets API into a .NET MVC app for real-time address validation and accuracy",
        "Built AI-powered interactive pages and adaptive learning platforms for context-aware user experiences",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "Digital Optimizer",
      period: "04/2024 – 05/2025",
      website: "digitaloptimizer.co.uk",
      achievements: [
        "Developed and deployed AI/ML models for process optimization and decision support",
        "Experience in developing and maintaining web applications using MERN Stack (MongoDB, Express.js, React.js, Node.js)",
        "Integrated machine learning algorithms into real-time systems",
        "Applied predictive modeling to automate and improve business workflows",
      ],
    },
    {
      title: "Frontend Developer",
      company: "DevnbeansSolutions",
      period: "12/2021 - 02/2024",
      location: "Lahore",
      achievements: [
        "Developed responsive, user-friendly front-end interfaces using React.js and Material-UI",
        "Built server-side logic and APIs with Node.js, Express.js, and Django",
        "Managed and integrated databases like MySQL, MongoDB, and PostgreSQL",
        "Movie App: Built a movie browsing app with real-time data from APIs and a Material UI interface",
        "Reseller Dashboard: Developed a sales and inventory dashboard with real-time data updates",
        "Delivered complete e-commerce platforms with shopping carts, user authentication, and payment integrations (e.g., PayPal)",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="space-y-12">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            EXPERIENCE
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-300 pl-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-base text-gray-700 font-medium">
                      {exp.company}
                    </span>
                    {exp.website && (
                      <a
                        href={`https://${exp.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-[#1A1A1A] underline"
                      >
                        {exp.website}
                      </a>
                    )}
                    {exp.location && (
                      <span className="text-sm text-gray-500">• {exp.location}</span>
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-500 font-medium">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed flex items-start">
                    <span className="text-[#1A1A1A] mr-2">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

