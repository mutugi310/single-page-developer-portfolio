import React, { useRef } from "react";
import Skills from "./mainComponents/Skills";
import About from "./mainComponents/About";
import Project from "./mainComponents/Project";
import Contact from "./mainComponents/Contact";
import rightOvals from "../assets/ovals-right.png";
import { PROJECTS } from "../constants/data";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useAnimateInView } from "../hooks/useAnimateInView";

function Main() {
  const { text2Variant, containerVariants, reduceMotion } = useAnimateInView();

  return (
    <main className="relative w-full overflow-hidden">
      <div className="  absolute top-[50rem] -right-[12rem] w-[24rem] max-h-[4rem] z-100 opacity-3 rounded-full sm:-right-[16rem] md:-right-[12rem] md:top-[20rem] lg:-right-[14rem] lg:top-[12rem]">
        <motion.img
          initial={{ opacity: 0, x: reduceMotion ? 0 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src={rightOvals}
          alt="ovals overlay"
        />
      </div>
      <div className="container  mx-auto px-4  sm:px-15 lg:px-32">
        <Element name="about-section">
          <section
            className="  pt-8 mt-8 border-t-[1.5px] border-t-gray rounded-sm "
            tabIndex="0"
          >
            <About />
          </section>
        </Element>

        <Element name="skills-section">
          <Skills />
        </Element>

        <Element name="project-section">
          <section className=" py-12">
            <div className="flex flex-col justify-center text-center">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                variants={text2Variant}
                viewport={{ once: true }}
                className="text-center"
              >
                Latest <span className="text-green">Projects</span>
              </motion.h2>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 "
              role="list"
              aria-label="List of latest projects"
              tabIndex="0"
            >
              {PROJECTS.map((project, index) => (
                <Project
                  index={index}
                  key={project.name}
                  name={project.name}
                  alt={project.name}
                  techStack={project.techStack}
                  gitHub={project.gitHub}
                  hosted={project.hosted}
                ></Project>
              ))}
            </motion.div>
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
