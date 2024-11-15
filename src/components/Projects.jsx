import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import FadeInSection from "./FadeInSection";
import projects from "../data/projectsData"; // Assure-toi que le chemin est correct

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    if (currentIndex < projects.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 py-16">
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

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-12"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-video relative overflow-hidden bg-gray-100">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#001b5e] text-white px-6 py-2 rounded-md hover:bg-[#002a8e] transition-colors"
                      >
                        More Info
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevProject}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-opacity ${
              currentIndex === 0 ? 'opacity-0' : 'opacity-100'
            }`}
            disabled={currentIndex === 0}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextProject}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-opacity ${
              currentIndex >= projects.length - 3 ? 'opacity-0' : 'opacity-100'
            }`}
            disabled={currentIndex >= projects.length - 3}
          >
            <svg
              className="w-6 h-6 text-gray-600"
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
          </button>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Projects;
