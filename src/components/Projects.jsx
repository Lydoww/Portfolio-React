import React from "react";
import ProjectItem from "./ProjectItem";
import Lapince from "../assets/Lapince.png";
import Pokedex from "../assets/Pokedex.png";
import Todo from "../assets/Todo.png";
import FadeInSection from "./FadeInSection";
import Movie from "../assets/Movie.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <FadeInSection>
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">
          Projects
        </h1>
        <p className="py-8 text-base font-medium text-stone-600 text-center">
          Here you can explore some of the projects I’ve worked on. Each project
          showcases different aspects of my skills and experience in web
          development. From interactive applications to useful utilities, these
          projects represent a range of technologies and challenges I’ve
          tackled. Click on "More info" to view the project's repository and
          learn more about its development.
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
          <ProjectItem
            title="La Pince"
            img={Lapince}
            description="Banking app built with React, Node, Express, PostgreSQL, and Sequelize, enabling users to efficiently manage their finances."
            repoUrl="https://la-pince-front.vercel.app/"
          />
          <ProjectItem
            title="Pokedex"
            img={Pokedex}
            description="Pokedex application with React."
            repoUrl="https://github.com/Lydoww/Pokedex-React"
          />
          <ProjectItem
            title="Todo"
            img={Todo}
            description="A task management app with React & PostgreSQL."
            repoUrl="https://github.com/Lydoww/Todo-App-React"
          />
          <ProjectItem
            title="Movies"
            img={Movie}
            description="Movie App with React and SASS."
            repoUrl="https://github.com/Lydoww/Movie-App"
          />
        </div>
      </FadeInSection>
    </div>
  );
};

export default Projects;
