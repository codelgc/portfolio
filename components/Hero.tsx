"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="pt-24 pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="lg:col-span-1 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-medium text-[#1A1A1A]">
            Hey. I'm Usama,
          </h1>
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A]">
              A SOFTWARE
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A]">
              ENGINEER
            </h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-[#1A1A1A]">
              & Full-Stack Developer
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg">
            Transforming ideas into scalable solutions—building web platforms and AI-driven systems that solve complex problems, streamline business processes, and deliver excellent user experiences.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 text-sm font-medium hover:bg-[#2A2A2A] transition-colors"
          >
            <span>CONTACT ME</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Center Column - Profile Image */}
        <div className="lg:col-span-1 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gray-300 overflow-hidden">
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
          </div>
        </div>

        {/* Right Column - Stats */}
        <div className="lg:col-span-1 space-y-8">
          <div className="space-y-6">
            <div>
              <div className="text-5xl sm:text-6xl font-bold text-[#1A1A1A]">3+</div>
              <div className="text-sm text-gray-600 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-bold text-[#1A1A1A]">20+</div>
              <div className="text-sm text-gray-600 mt-1">Projects Delivered</div>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-bold text-[#1A1A1A]">*95%</div>
              <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-bold text-[#1A1A1A]">10+</div>
              <div className="text-sm text-gray-600 mt-1">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

