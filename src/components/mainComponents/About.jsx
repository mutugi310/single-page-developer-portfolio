import React, { useRef } from "react";
import testProjectImg from "../../assets/testProject.jpg";
import portrait from "../../assets/dev-portrait_bgTest-L.png";
import { ABOUT_TEXT, ABOUT_EXPERT } from "../../constants/data";
import Socials from "../sharedComponents/Socials";
import { CgRadioChecked } from "react-icons/cg";
import { motion, useReducedMotion } from "framer-motion";
import { useAnimateInView } from "../../hooks/useAnimateInView";

function About() {
  const reduceMotion = useReducedMotion();
  const { text2Variant, textVariants, containerVariants } = useAnimateInView();
  return (
    <div>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={text2Variant}
        viewport={{ once: true }}
        className="text-center "
      >
        About <span className="text-green">Me</span>
      </motion.h2>
      <div className=" mb-20 grid gap-5 sm:max-lg:grid-cols-2  lg:grid-cols-12 lg:gap-6">
        <div
          className="sm:max-lg:col-span-1 sm:max-lg:row-span-2 lg:col-span-5 lg:row-span-4"
          role="image"
          aria-label="dev portrait image"
        >
          <div>
            <motion.img
              initial={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.8,
                y: reduceMotion ? 0 : -20,
              }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src={portrait}
              alt="image of kelvin"
              className="rounded-md hover:border-y-2 border-green sm:max-lg:max-w-xs lg:-mt-18 "
            />
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="flex flex-col sm:max-lg:justify-center sm:max-lg:mt-16 sm:max-lg:row-span-2  lg:col-span-7 lg:row-span-1 "
          role="text"
          aria-label="about me writeup"
        >
          <motion.div
            variants={textVariants}
            className="flex justify-center gap-4 pb-4  sm:justify-start sm:max-lg:row-span-2 sm:pb-8 lg:col-span-7 "
          >
            <h3 className="font-bold text-xl lg:hidden">
              Driven, <span className="text-green">Result-Oriented</span>
              <br /> <span className="text-green"> Front-End </span> Developer
            </h3>
          </motion.div>
          <motion.p variants={textVariants}>{ABOUT_TEXT}</motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="sm:max-lg:col-span-2 grid sm:max-lg:grid-cols-2 lg:col-span-7 lg:row-span-2"
          role="bullets"
          aria-label="my specialty"
        >
          <motion.h4
            variants={textVariants}
            className="pl-1 py-1 text-xl sm:max-lg:col-span-2"
          >
            I take pride in, inter alia;
          </motion.h4>
          <ul className="pl-2  list-none grid gap-2 sm:max-lg:col-span-2 sm:max-lg:grid-cols-2 ">
            {ABOUT_EXPERT.map((bullet, index) => (
              <motion.li
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                viewport={{ once: true }}
                key={index}
                className="flex flex-nowrap gap-2 "
              >
                <span className="  pt-1">
                  <CgRadioChecked className="w-3 text-green" />
                </span>
                {bullet}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
          className="flex justify-start gap-4 lg:col-span-7 "
          role="socials"
          aria-label="social media icons"
        >
          <Socials />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
