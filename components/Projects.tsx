"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: Project[] = [
    {
      title: "Sound Recognition System",
      description: "Building a Sound Recognition App utilizing Deep Learning, Mel-spectrogram Extraction, CNN model for accuracy comparison",
      fullDescription: "A comprehensive sound recognition application that leverages deep learning techniques to identify and classify various audio patterns. The system uses Mel-spectrogram extraction for feature representation and implements CNN models for accurate sound classification. The project focuses on comparing different model architectures to achieve optimal accuracy for real-world audio recognition scenarios.",
      tech: ["Python", "Deep Learning", "CNN", "TensorFlow"],
      images: ["https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1633356122544-f134324a6ce1?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&h=600&fit=crop"],
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
      images: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1559757148-5c3507fa8d5b?w=800&h=600&fit=crop"],
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
      images: ["https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"],
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
      images: ["https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"],
      features: [
        "Patient record management system",
        "Appointment scheduling and calendar integration",
        "Billing and payment processing",
        "Secure authentication and role-based access",
        "Real-time data synchronization",
        "Reporting and analytics dashboard"
      ],
    },
    {
      title: "Enterprise Website - Data Intuitions",
      description: "Full enterprise website in .NET MVC with secure authentication, dynamic content, and SQL Server integration",
      fullDescription: "A complete enterprise-level website built with .NET MVC featuring secure user authentication, dynamic content management, and robust SQL Server database integration. The platform includes admin panels, user dashboards, and seamless data flow between frontend and backend systems.",
      tech: [".NET MVC", "SQL Server", "C#", "JavaScript"],
      images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"],
      features: [
        "Secure authentication and authorization",
        "Dynamic content management system",
        "SQL Server database integration",
        "Admin dashboard and user management",
        "Responsive design for all devices",
        "Real-time data updates"
      ],
    },
    {
      title: "Document Intelligence System",
      description: "Created document intelligence systems extracting structured data from PDFs and images using AI",
      fullDescription: "An advanced document processing system that uses AI and machine learning to extract structured data from PDFs and images. The system can recognize text, tables, and forms, converting unstructured documents into usable data formats for business processes.",
      tech: ["Python", "Machine Learning", "OCR", ".NET Core"],
      images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop"],
      features: [
        "PDF and image text extraction",
        "Table recognition and extraction",
        "Form field detection and data extraction",
        "AI-powered document classification",
        "Structured data output",
        "Batch processing capabilities"
      ],
    },
    {
      title: "Address Validation System",
      description: "Integrated SmartyStreets API into .NET MVC app for real-time address validation and accuracy",
      fullDescription: "A real-time address validation system integrated with SmartyStreets API to ensure address accuracy and completeness. The system validates addresses as users type, provides suggestions, and standardizes address formats for improved data quality.",
      tech: [".NET MVC", "SmartyStreets API", "C#", "JavaScript"],
      images: ["https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"],
      features: [
        "Real-time address validation",
        "Address autocomplete and suggestions",
        "Address standardization",
        "Integration with SmartyStreets API",
        "Error handling and validation feedback",
        "Bulk address processing"
      ],
    },
    {
      title: "AI-Powered Interactive Learning Platform",
      description: "Built AI-powered interactive pages and adaptive learning platforms for context-aware user experiences",
      fullDescription: "An intelligent learning platform that uses AI to create personalized, adaptive learning experiences. The system analyzes user behavior and learning patterns to provide context-aware content, interactive exercises, and personalized recommendations.",
      tech: ["React.js", "Python", "Machine Learning", "Node.js"],
      images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"],
      features: [
        "AI-powered content personalization",
        "Adaptive learning paths",
        "Interactive exercises and assessments",
        "Context-aware recommendations",
        "Progress tracking and analytics",
        "Real-time feedback system"
      ],
    },
    {
      title: "Movie Browsing Application",
      description: "Built a movie browsing app with real-time data from APIs and a Material UI interface",
      fullDescription: "A modern movie browsing application that fetches real-time movie data from external APIs. Features include movie search, detailed information, ratings, trailers, and a beautiful Material-UI interface for seamless user experience.",
      tech: ["React.js", "Material-UI", "REST APIs", "JavaScript"],
      images: ["https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop"],
      features: [
        "Real-time movie data from APIs",
        "Advanced search and filtering",
        "Movie details and ratings",
        "Trailer integration",
        "Material-UI design",
        "Responsive and mobile-friendly"
      ],
    },
    {
      title: "Reseller Dashboard",
      description: "Developed a sales and inventory dashboard with real-time data updates and analytics",
      fullDescription: "A comprehensive reseller dashboard for managing sales, inventory, and business operations. The platform provides real-time updates, analytics, reporting, and inventory management tools to help resellers track performance and optimize their business.",
      tech: ["React.js", "Node.js", "MongoDB", "Chart.js"],
      images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"],
      features: [
        "Real-time sales tracking",
        "Inventory management system",
        "Analytics and reporting dashboard",
        "Data visualization with charts",
        "User authentication and roles",
        "Export functionality for reports"
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
      <section ref={ref} className="py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto" id="portfolio">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
              PORTFOLIO
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-md">
              Explore my recent projects and discover how I turn ideas into reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleProjectClick(project)}
                className="bg-white border border-gray-200 hover:border-[#1A1A1A] hover:shadow-lg transition-all cursor-pointer group overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative w-full h-48 sm:h-56 bg-gray-200 overflow-hidden">
                  {project.images && project.images.length > 0 ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        unoptimized
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          const parent = target.closest('.relative');
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400">
                                <span class="text-white font-semibold text-lg text-center px-4">${project.title}</span>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400">
                      <span className="text-white font-semibold text-lg text-center px-4">{project.title}</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-5 h-5 text-[#1A1A1A]"
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
                </div>
                
                {/* Project Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] group-hover:text-[#2A2A2A] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed line-clamp-2">
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
              </motion.div>
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

