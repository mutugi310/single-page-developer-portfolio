import React from "react";
import Skill from "./mainComponents/Skill";
import data from "../assets/data/data.json";
import testProjectImg from "../assets/testProject.jpg";
import Button from "./sharedComponents/Button";

function Main() {
  return (
    <main>
      <div className="container mx-auto  px-4  sm:px-15 lg:px-32">
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
          <div className="flex flex-col  gap-4 py-8 justify-between flex-nowrap sm:flex-row ">
            <article className=" w-full grow relative group sm:w-1/3 ">
              <img
                src={testProjectImg}
                alt="project name"
                className="w-full group/first"
              />
              <h3 className="py-2">Design portfolio</h3>
              <div className="flex gap-2">
                <p>HTML</p>
                <p>CSS</p>
              </div>
              <div className="flex-1 gap-3 lg:flex-col lg:hidden lg:group-hover:flex lg:absolute lg:justify-center lg:items-center lg:bottom-20 lg:left-4 right-4 top-4 lg:bg-opacity-75 lg:bg-black ">
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
            </article>
            <article className=" w-full grow relative group sm:w-1/3 ">
              <img
                src={testProjectImg}
                alt="project name"
                className="w-full group/first"
              />
              <h3 className="py-2">Design portfolio</h3>
              <div className="flex gap-2">
                <p>HTML</p>
                <p>CSS</p>
              </div>
              <div className="flex-1 gap-3 lg:flex-col lg:hidden lg:group-hover:flex lg:absolute lg:justify-center lg:items-center lg:bottom-20 lg:left-4 right-4 top-4 lg:bg-opacity-75 lg:bg-black ">
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
            </article>
            <article className=" w-full grow relative group sm:w-1/3 ">
              <img
                src={testProjectImg}
                alt="project name"
                className="w-full group/first"
              />
              <h3 className="py-2">Design portfolio</h3>
              <div className="flex gap-2">
                <p>HTML</p>
                <p>CSS</p>
              </div>
              <div className="flex-1 gap-3 lg:flex-col lg:hidden lg:group-hover:flex lg:absolute lg:justify-center lg:items-center lg:bottom-20 lg:left-4 right-4 top-4 lg:bg-opacity-75 lg:bg-black ">
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
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
