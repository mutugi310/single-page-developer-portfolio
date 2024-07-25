import React from "react";
import Skill from "./mainComponents/Skill";
import About from "./mainComponents/About";
import data from "../assets/data/data.json";
import testProjectImg from "../assets/testProject.jpg";
import Button from "./sharedComponents/Button";
import Project from "./mainComponents/Project";
import Contact from "./mainComponents/Contact";
import rightOvals from "../assets/ovals-right.png";
import {
  SKILLS,
  ABOUT_TEXT,
  ABOUT_EXPERT,
  ABOUT_TEXT_Bottom,
} from "../constants/data";

function Main() {
  return (
    <main className="relative w-full overflow-hidden">
      <div className="  absolute top-[50rem] -right-[12rem] w-[24rem] max-h-[4rem] z-100 opacity-3 rounded-full sm:-right-[16rem] md:-right-[12rem] md:top-[20rem] lg:-right-[14rem] lg:top-[12rem]">
        <img src={rightOvals} alt="ovals overlay" />
      </div>
      <div className="container relative mx-auto px-4 sm:px-15 lg:px-32">
        <section className="grid py-6 border-t-[1.5px] border-t-gray rounded-sm sm:grid-cols-7  gap-10">
          <About
            aboutDescription={ABOUT_TEXT}
            aboutBottomText={ABOUT_TEXT_Bottom}
          />
        </section>
        <section className=" border-y-[1.5px] border-y-gray pt-10 ">
          <h2 className="text-center">Professional Skills</h2>
          <div className="grid grid-cols-2 items-center gap-4 py-10  sm:grid-cols-4 lg:grid-cols-5 ">
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

        <section className="py-10">
          <div className="flex flex-col justify-center text-center gap-4">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">
              Projects
            </h2>
            <p>Exprore my latest Projects</p>
          </div>
          <div className="grid grid-cols-1  gap-4 py-8  flex-wrap sm:grid-cols-2 ">
            {/* <article className=" relative group py-4 ">
              <img
                src={testProjectImg}
                alt="project name"
                className="w-full "
              />
              <h3 className="py-2">Design portfolio</h3>
              <div className="flex gap-2">
                <p>HTML</p>
                <p>CSS</p>
              </div>
              <div className="flex gap-4 lg:flex-col lg:hidden lg:group-hover:flex lg:absolute lg:justify-center lg:items-center lg:bottom-20 lg:left-4 right-4 top-4 lg:bg-opacity-75 lg:bg-black ">
                <Button
                  href="https://kelvin-audiophile-ecommerce-website.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  text="View project"
                />
                <Button
                  href="https://kelvin-audiophile-ecommerce-website.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  text="View code"
                />
              </div>
            </article> */}
            {data.projects.map((project) => (
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
      </div>

      <section className="bg-black-light">
        <div className=" container relative mx-auto px-4 flex flex-col justify-between gap-10 py-16 sm:px-15 lg:px-32 lg:flex-row ">
          <Contact />
        </div>
      </section>
    </main>
  );
}

export default Main;
