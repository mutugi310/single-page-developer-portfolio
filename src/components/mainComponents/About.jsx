import React, { useRef } from "react";
import testProjectImg from "../../assets/testProject.jpg";
import portrait from "../../assets/dev-portrait_bgTest-L.png";
import { ABOUT_TEXT, ABOUT_EXPERT } from "../../constants/data";
import Socials from "../sharedComponents/Socials";
import { CgRadioChecked } from "react-icons/cg";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useAnimateInView } from "../../hooks/useAnimateInView";

function About() {
  /* const ref = useRef(null);
  const isInView = useInView(ref);
  const reduceMotion = useReducedMotion();
  const textVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  }; */
  const reduceMotion = useReducedMotion();
  const { ref, text2Variant, textVariants, containerVariants } =
    useAnimateInView();
  return (
    <div ref={ref}>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={text2Variant}
        viewport={{ once: true }}
        className="text-center  md:pl-7"
      >
        About <span className="text-green">Me</span>
      </motion.h2>
      <div className="grid sm:grid-cols-12 gap-10">
        <div
          className="  flex items-center justify-center align-top sm:col-span-5"
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
              className="rounded-md  hover:border-y-2 border-green md:-mt-20"
            />
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="sm:col-span-7"
          role="text"
          aria-label="about me writeup"
        >
          <motion.div
            variants={textVariants}
            className="flex flex-col justify-center text-center gap-4 pb-4 md:text-start"
          >
            <h3 className="font-bold text-lg sm:hidden">
              Driven, <span className="text-green">Result-Oriented</span>
              <br /> <span className="text-green"> Front-End </span> Developer
            </h3>
          </motion.div>
          <motion.p variants={textVariants} className="text-md">
            {ABOUT_TEXT}
          </motion.p>
          <motion.h4 variants={textVariants} className="pl-1 py-1">
            I take pride in, inter alia;
          </motion.h4>
          <ul className="pl-2 text-sm list-none ">
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mt-4 sm:justify-start "
            role="socials"
            aria-label="social media icons"
          >
            <Socials />
          </motion.div>

          <p className="hidden ">
            <span>site visits: 0</span>
            interview likelihood score: 0
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
