"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Delivered" },
    { value: "*95%", label: "Client Satisfaction" },
    { value: "10+", label: "Technologies" },
  ];

  return (
    <section ref={ref} className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
              className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-2"
            >
              {stat.value}
            </motion.div>
            <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

