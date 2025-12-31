export default function About() {
  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Heading */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
            BUILDING SCALABLE
            <br />
            SYSTEMS & INTELLIGENT
            <br />
            SOLUTIONS
          </h2>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Hey, I'm Usama, a Software Engineer passionate about creating smart, scalable, and user-centric products, including web platforms and AI-driven systems that solve complex problems.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            With expertise in .NET (MVC & Core), JavaScript, React.js, Python, Machine Learning, and Full-Stack Development, I design and build systems that not only function flawlessly but also deliver exceptional user experiences. Whether it's developing enterprise applications, integrating AI/ML models, or building responsive web interfaces, I blend technical expertise, creativity, and strategic thinking to bring ideas to life. Let's collaborate and build something extraordinary.
          </p>
        </div>
      </div>
    </section>
  );
}

