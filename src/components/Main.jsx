import React from "react";
import Skill from "./mainComponents/Skill";
import About from "./mainComponents/About";
import data from "../assets/data/data.json";
import testProjectImg from "../assets/testProject.jpg";
import Button from "./sharedComponents/Button";
import Project from "./mainComponents/Project";
import Contact from "./mainComponents/Contact";
import rightOvals from "../assets/ovals-right.png";
import { SKILLS, PROJECTS } from "../constants/data";
import { Element } from "react-scroll";

function Main() {
  return (
    <main className="relative w-full overflow-hidden">
      <div className="  absolute top-[50rem] -right-[12rem] w-[24rem] max-h-[4rem] z-100 opacity-3 rounded-full sm:-right-[16rem] md:-right-[12rem] md:top-[20rem] lg:-right-[14rem] lg:top-[12rem]">
        <img src={rightOvals} alt="ovals overlay" />
      </div>
      <div className="container relative mx-auto px-4 sm:px-15 lg:px-32">
        <Element name="about-section">
          <section
            className="py-6 border-t-[1.5px] border-t-gray rounded-sm "
            tabIndex="0"
          >
            <About />
          </section>
        </Element>

        <Element name="skills-section">
          <section className=" border-y-[1.5px] border-y-gray pt-10 ">
            <h2 className="text-center">Professional Skills</h2>
            <div
              className="grid grid-cols-2 items-center gap-4 py-8  sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 "
              role="list"
              aria-label="List of professional skills"
              tabIndex="0"
            >
              {SKILLS.map((skill) => (
                <Skill
                  key={skill.name}
                  icon={skill.icon}
                  skill={skill.name}
                  experience={skill.experienceYrs}
                  className={skill.className}
                />
              ))}
            </div>
          </section>
        </Element>

        <Element name="project-section">
          <section className="py-10">
            <div className="flex flex-col justify-center text-center">
              <h2 className="text-center">Projects</h2>
              <h3 className="capitalize ">
                Explore my <span className="text-green">latest Projects</span>
              </h3>
            </div>
            <div
              className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 "
              role="list"
              aria-label="List of latest projects"
              tabIndex="0"
            >
              {PROJECTS.map((project) => (
                <Project
                  key={project.name}
                  name={project.name}
                  alt={project.name}
                  techStack={project.techStack}
                  gitHub={project.gitHub}
                  hosted={project.hosted}
                />
              ))}
            </div>
          </section>
        </Element>
      </div>

      <Element name="contact-section">
        <section className="bg-black-light">
          <div className=" container relative border-b-[1.5px] border-b-gray rounded-md mx-auto px-4 flex flex-col justify-between gap-10 py-16 sm:px-15 md:flex-row lg:px-32  ">
            <Contact />
          </div>
        </section>
      </Element>
    </main>
  );
}

export default Main;
