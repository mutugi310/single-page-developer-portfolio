import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { GoDownload } from "react-icons/go";
import portrait from "../../assets/dev-portrait_bgTest.png";
import leftOvals from "../../assets/ovals-left.png";
import Socials from "../sharedComponents/Socials";
import { HERO_TEXT } from "../../constants/data";
import { motion, useReducedMotion } from "framer-motion";

function Hero() {
  const reduceMotion = useReducedMotion();
  const ctaHeroText = "Let's build something amazing together !";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Element name="hero-section">
      <div className="grid  relative grid-cols-1 gap-8 pt-6 pb-2 md:grid-cols-12 justify-between">
        <div className="absolute top-[3rem] -left-[15rem] w-[24rem] max-h-[4rem] z-20 md:top-[3rem] md:-left-[12rem] md:w-[24rem] md:max-h-[3rem] md:z-10 opacity-3 rounded-full sm:-left-[10rem] lg:-left-[2rem]">
          <motion.img
            src={leftOvals}
            alt="ovals overlay"
            initial={{ opacity: 0, x: reduceMotion ? 0 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
        <aside className="hidden relative z-20 gap-4 mx-auto md:flex md:flex-col md:justify-center col-span-1">
          <Socials />
        </aside>
        <section className="md:col-span-11">
          <div className="flex relative w-full flex-col flex-nowrap pt-6 gap-2 sm:flex-row-reverse justify-center sm:justify-between">
            <div className="relative z-9 w-2/3 mx-auto grow sm:w-[50%]">
              <motion.div
                className="absolute border-4 border-green w-full rounded-full bottom-0 top-8 right-0 z-9"
                initial={{ scale: reduceMotion ? 1 : 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              ></motion.div>
              <motion.img
                src={portrait}
                alt="developer portrait"
                className="w-full relative rounded-full pb-1 z-10"
                initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
            </div>

            <div className="flex flex-col grow w-full items-center justify-between relative left-0 sm:w-2/3 sm:items-start sm:justify-end sm:-pr-10 lg:justify-center">
              <h1 className="font-bold text-3xl py-6 text-center sm:text-start md:text-4xl lg:tracking-wide lg:text-5xl">
                <motion.span
                  className="text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  Hello{" "}
                  <motion.span
                    className="inline-block"
                    initial={{ rotate: 0, y: 0 }}
                    animate={{
                      rotate: [0, 20, -20, 10, -10, 0],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    👋
                  </motion.span>
                  , I’m
                </motion.span>
                <br />
                <motion.span
                  className="tracking-wide bg-gradient-custom bg-clip-text text-transparent underline underline-offset-8 decoration-green decoration-2 bold"
                  initial={{ opacity: 0, x: reduceMotion ? 0 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  Kelvin Mutugi
                </motion.span>
                .
              </h1>
              <motion.p
                className="mb-4 text-lg text-center sm:text-left"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                {HERO_TEXT}
              </motion.p>
              <motion.p
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {ctaHeroText.split("").map((char, i) => (
                  <motion.span key={i} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
              <div className="flex flex-col py-2 gap-4">
                <motion.div
                  className="flex flex-col pt-2 gap-2 items-center sm:flex-row sm:gap-4"
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <ScrollLink
                    to="contact-section"
                    smooth="true"
                    tabIndex="0"
                    className="uppercase cursor-pointer border-b-2 w-fit rounded-full p-1 px-2 hover:bg-black-light border-green my-2 hover:text-green hover:font-bold focus:text-green focus:font-bold"
                  >
                    Contact Me
                  </ScrollLink>
                  <a
                    href="../../assets/KelvinMutugi_Resume.pdf"
                    download="KelvinMutugi_Resume.pdf"
                    className="bg-black-light p-1 px-2 rounded-full uppercase w-fit border-b-2 my-2 hover:bg-black text-green tracking-wider border-green hover:text-white hover:font-bold focus:text-green focus:font-bold"
                  >
                    <span className="flex gap-2">
                      Resume <GoDownload className="size-5 pt-1" />
                    </span>
                  </a>
                </motion.div>
                <motion.div
                  className="flex justify-start gap-2 mt-4 md:hidden"
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <Socials />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
}

export default Hero;
