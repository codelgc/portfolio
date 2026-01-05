"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("usamaamanat043@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-1 space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-medium text-[#1A1A1A]"
          >
            Hey. I'm Usama,
          </motion.h1>
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A]"
            >
              A SOFTWARE
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A]"
            >
              ENGINEER
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-[#1A1A1A]"
            >
              & Full-Stack Developer
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg"
          >
            Transforming ideas into scalable solutions—building web platforms and AI-driven systems that solve complex problems, streamline business processes, and deliver excellent user experiences.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={copyEmail}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 text-sm font-medium hover:bg-[#2A2A2A] transition-colors"
            >
              <span>{copied ? "EMAIL COPIED!" : "CONTACT ME"}</span>
              {copied ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </motion.button>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-flex items-center gap-2 border-2 border-[#1A1A1A] text-[#1A1A1A] px-6 py-3 text-sm font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              <span>DOWNLOAD RESUME</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Center Column - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-1 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          >
            <div className="absolute inset-0 rounded-full bg-gray-300 overflow-hidden shadow-2xl">
              {!imageError ? (
                <Image
                  src="/profile.jpg"
                  alt="Usama Amanat"
                  fill
                  className="object-cover rounded-full"
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-6xl font-bold text-gray-500">
                  UA
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="lg:col-span-1 space-y-8"
        >
          <div className="space-y-6">
            {[
              { value: "3+", label: "Years Experience" },
              { value: "20+", label: "Projects Delivered" },
              { value: "*95%", label: "Client Satisfaction" },
              { value: "10+", label: "Technologies Mastered" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="cursor-default"
              >
                <div className="text-5xl sm:text-6xl font-bold text-[#1A1A1A]">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

