"use client";

import { useEffect, useState } from "react";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    fullDescription?: string;
    images?: string[];
    features?: string[];
    link?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setImageErrors(new Set());
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index));
  };

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="sticky top-0 bg-white border-b border-gray-200 flex justify-end p-4 z-10">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-[#1A1A1A] transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
            {project.title}
          </h2>

          {/* Images Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Project Images</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.images.map((image, index) => {
                  // Check if image is a path (starts with /) or a placeholder
                  const isImagePath = image.startsWith('/');
                  const hasError = imageErrors.has(index);
                  
                  return (
                    <div
                      key={index}
                      className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden"
                    >
                      {isImagePath && !hasError ? (
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(index)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
                          <span className="text-gray-500 text-sm">
                            {hasError ? 'Image not found' : `Project Image ${index + 1}`}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#1A1A1A]">Overview</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-base text-gray-700 leading-relaxed flex items-start"
                  >
                    <span className="text-[#1A1A1A] mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#1A1A1A]">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Link */}
          {project.link && (
            <div className="pt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 text-sm font-medium hover:bg-[#2A2A2A] transition-colors"
              >
                <span>View Project</span>
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

