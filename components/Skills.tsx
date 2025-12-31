export default function Skills() {
  const skills = [
    {
      title: "FRONTEND DEVELOPMENT",
      description: "React.js, JavaScript, HTML, CSS, Material-UI, responsive design",
    },
    {
      title: "BACKEND DEVELOPMENT",
      description: ".NET MVC, .NET Core, Node.js, Express.js, Django, Flask",
    },
    {
      title: "DATABASE & DATA",
      description: "SQL Server, MongoDB, MySQL, PostgreSQL, Oracle, data mining",
    },
    {
      title: "AI & MACHINE LEARNING",
      description: "Python, ML models, deep learning, predictive analytics",
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">
              {skill.title}
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

