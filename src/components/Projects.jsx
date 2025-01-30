import React, { useState, useEffect, useRef } from "react";
import FadeInSection from "./FadeInSection";
import projects from "../data/projectsData"; // Assure-toi que le chemin est correct

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const carouselRef = useRef(null);

  // 🔥 Met à jour le mode mobile/déktop
  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setProjectsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setProjectsPerPage(2);
      } else {
        setProjectsPerPage(1);
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const maxIndex = Math.max(0, projects.length - projectsPerPage);

  // Drag (uniquement sur mobile)
  const handleDragStart = (e) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging || !isMobile) return;
    const currentX = e.clientX || e.touches[0].clientX;
    setTranslateX(currentX - startX);
  };

  const handleDragEnd = () => {
    if (!isMobile) return;
    if (translateX < -50 && currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (translateX > 50 && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
    setIsDragging(false);
    setTranslateX(0);
  };

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 py-16 relative">
      <FadeInSection>
        <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-6">
          Projects
        </h1>
        <p className="max-w-3xl mx-auto text-base text-center text-gray-600 mb-12">
          Here you can explore some of the projects I've worked on. Each project
          showcases different aspects of my skills and experience in web
          development. From interactive applications to useful utilities, these
          projects represent a range of technologies and challenges I've
          tackled. Click on "More info" to view the project's repository and
          learn more about its development.
        </p>

        {/* 🔥 Container qui gère le drag uniquement sur mobile */}
        <div
          className="relative bg-slate-200 rounded-lg py-6 overflow-hidden"
          ref={carouselRef}
          onMouseDown={isMobile ? handleDragStart : null}
          onMouseMove={isMobile ? handleDragMove : null}
          onMouseUp={isMobile ? handleDragEnd : null}
          onMouseLeave={isMobile ? handleDragEnd : null}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${
                  currentIndex * (100 / projectsPerPage)
                }% + ${translateX}px))`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / projectsPerPage}%` }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                    <div className="aspect-video relative overflow-hidden bg-gray-100">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {project.description}
                      </p>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#001b5e] text-white px-6 py-2 rounded-md hover:bg-[#002a8e] transition-colors mt-auto"
                      >
                        More Info
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🔥 Flèches affichées UNIQUEMENT sur Desktop */}
        {!isMobile && (
          <>
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-opacity ${
                currentIndex === 0 ? "opacity-0" : "opacity-100"
              }`}
              disabled={currentIndex === 0}
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setCurrentIndex(Math.min(maxIndex, currentIndex + 1))}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-opacity ${
                currentIndex >= maxIndex ? "opacity-0" : "opacity-100"
              }`}
              disabled={currentIndex >= maxIndex}
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </FadeInSection>
    </div>
  );
};

export default Projects;
