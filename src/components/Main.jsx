import React from "react";
import Skill from "./mainComponents/Skill";
import data from "../assets/data/data.json";
import testProjectImg from "../assets/testProject.jpg";
import Button from "./sharedComponents/Button";
import Project from "./mainComponents/Project";
import Contact from "./mainComponents/Contact";

function Main() {
  return (
    <main>
      <div className="container  mx-auto  px-4  sm:px-15 lg:px-32">
        <section className="flex flex-col flex-1 border-t-[1.5px] border-t-gray items-center gap-4 py-10 flex-wrap sm:flex-row  justify-between">
          {data.skills.map((skill) => (
            <Skill
              key={skill.name}
              skill={skill.name}
              experience={skill.experienceYrs}
            />
          ))}
        </section>

        <section className="py-10">
          <h2>Project</h2>
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
        <div className="container mx-auto px-4  flex flex-col justify-between gap-10 py-16 sm:px-15 lg:px-32 lg:flex-row ">
          <Contact></Contact>
        </div>
      </section>
    </main>
  );
}

export default Main;
