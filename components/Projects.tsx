"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";

interface Project {
  title: string;
  description: string;
  tech: string[];
  fullDescription?: string;
  images?: string[];
  features?: string[];
  link?: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "Sound Recognition System",
      description: "Building a Sound Recognition App utilizing Deep Learning, Mel-spectrogram Extraction, CNN model for accuracy comparison",
      fullDescription: "A comprehensive sound recognition application that leverages deep learning techniques to identify and classify various audio patterns. The system uses Mel-spectrogram extraction for feature representation and implements CNN models for accurate sound classification. The project focuses on comparing different model architectures to achieve optimal accuracy for real-world audio recognition scenarios.",
      tech: ["Python", "Deep Learning", "CNN", "TensorFlow"],
      images: ["image1", "image2", "image3"],
      features: [
        "Mel-spectrogram extraction for audio feature representation",
        "CNN-based deep learning models for sound classification",
        "Model accuracy comparison and optimization",
        "Real-time audio processing capabilities",
        "Support for multiple audio formats"
      ],
    },
    {
      title: "Eye Donation App",
      description: "Developed a streamlined platform for eye-donation registration and donor management",
      fullDescription: "A comprehensive web application designed to streamline the eye donation registration process and manage donor information efficiently. The platform provides an intuitive interface for donors to register, allows administrators to manage donor records, and facilitates communication between donors and medical institutions.",
      tech: ["React.js", "Node.js", "MongoDB"],
      images: ["image1", "image2"],
      features: [
        "User-friendly donor registration system",
        "Secure donor information management",
        "Real-time database updates",
        "Admin dashboard for donor management",
        "Notification system for donation requests"
      ],
    },
    {
      title: "AI-based Education Recommendation APP",
      description: "Created an advanced Django project for education recommendations using OpenAI, HTML, CSS, and Bootstrap 5",
      fullDescription: "An intelligent education recommendation system powered by OpenAI's API that provides personalized learning paths and course recommendations. The application analyzes user preferences, learning history, and career goals to suggest the most suitable educational content and resources.",
      tech: ["Django", "OpenAI", "Python", "Bootstrap"],
      images: ["image1", "image2", "image3", "image4"],
      features: [
        "AI-powered personalized recommendations",
        "Integration with OpenAI API for intelligent suggestions",
        "User profile and learning history tracking",
        "Responsive design with Bootstrap 5",
        "Course and resource management system"
      ],
    },
    {
      title: "Healthcare Management System",
      description: "Developed .NET MVC interfaces to support efficient healthcare and administrative workflows",
      fullDescription: "A comprehensive healthcare management system built with .NET MVC that streamlines patient records, appointment scheduling, billing, and administrative tasks. The system provides secure access controls, real-time data updates, and seamless integration with SQL Server for reliable data management.",
      tech: [".NET MVC", "SQL Server", "C#"],
      images: ["image1", "image2", "image3"],
      features: [
        "Patient record management system",
        "Appointment scheduling and calendar integration",
        "Billing and payment processing",
        "Secure authentication and role-based access",
        "Real-time data synchronization",
        "Reporting and analytics dashboard"
      ],
    },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto" id="portfolio">
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
              PORTFOLIO
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-md">
              Explore my recent projects and discover how I turn ideas into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => handleProjectClick(project)}
                className="bg-white p-6 sm:p-8 border border-gray-200 hover:border-[#1A1A1A] hover:shadow-lg transition-all space-y-4 cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] group-hover:text-[#2A2A2A] transition-colors">
                    {project.title}
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-[#1A1A1A] transition-colors"
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
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

