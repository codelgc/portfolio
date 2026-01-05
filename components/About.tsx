"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
            BUILDING SCALABLE
            <br />
            SYSTEMS & INTELLIGENT
            <br />
            SOLUTIONS
          </h2>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-700 leading-relaxed"
          >
            Hey, I'm Usama, a Software Engineer passionate about creating smart, scalable, and user-centric products, including web platforms and AI-driven systems that solve complex problems.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-700 leading-relaxed"
          >
            With expertise in .NET (MVC & Core), JavaScript, React.js, Python, Machine Learning, and Full-Stack Development, I design and build systems that not only function flawlessly but also deliver exceptional user experiences. Whether it's developing enterprise applications, integrating AI/ML models, or building responsive web interfaces, I blend technical expertise, creativity, and strategic thinking to bring ideas to life. Let's collaborate and build something extraordinary.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

