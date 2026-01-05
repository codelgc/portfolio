"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section ref={ref} className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="space-y-2 p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">
              {skill.title}
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

