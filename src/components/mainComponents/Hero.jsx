import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { GoDownload } from "react-icons/go";
import portrait from "../../assets/dev-portrait_bgTest.png";
import heroOvals from "../../assets/heroOvals.png";
import Socials from "../sharedComponents/Socials";
import { motion, useReducedMotion } from "framer-motion";
import { ReactTyped } from "react-typed";

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
      <div className="grid h-full  relative grid-cols-1 gap-8 mt-6 pb-2 align-top sm:mt-14 sm:align-bottom  sm:grid-cols-12  justify-between ">
        <div className="absolute top-[3rem] -left-[22rem]  z-20  opacity-3 rounded-full sm:top-[1rem]  sm:-left-[22rem]  sm:z-10 lg:top-[6rem] md:-left-[19rem] lg:-left-[15rem]">
          <motion.img
            src={heroOvals}
            alt="ovals overlay"
            initial={{ opacity: 0, x: reduceMotion ? 0 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
        <aside className="hidden relative z-20 mt-6  mx-auto col-span-1 md:block ">
          <div className="flex flex-col h-full justify-start my-auto gap-4  md:pt-10 lg:justify-center">
            <Socials />
          </div>
        </aside>
        <section className=" sm:col-span-12 md:col-span-11">
          <div className="flex relative w-full flex-col flex-nowrap pt-6 gap-2 sm:flex-row-reverse justify-center md:justify-between sm:align-bottom">
            <div className="relative   z-9 w-2/3 mx-auto grow  md:w-[50%]">
              <div className="relative">
                <motion.div
                  className="absolute border-b-4 border-b-green w-full rounded-full bottom-0 top-8 right-0 z-9"
                  initial={{ scale: reduceMotion ? 1 : 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                ></motion.div>
                <motion.img
                  src={portrait}
                  alt="developer portrait"
                  className="w-full relative rounded-full pb-1 z-10 "
                  initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>

            <div className="flex  flex-col grow w-full items-center align-middle relative gap-2 md:w-2/3 sm:items-start sm:justify-start sm:align-bottom md:-pr-10 md:justify-end lg:justify-center ">
              <div className=" h-full items-center flex flex-col my-auto relative gap-2 sm:items-start sm:justify-end ">
                <h1 className="font-bold text-3xl py-6 text-center sm:text-start md:text-4xl lg:tracking-wide lg:text-5xl">
                  <motion.span
                    className="text-2xl"
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
                  className="mb-2  text-xl text-center sm:text-left md:mb-4"
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  Passionate{" "}
                  <span className="text-green">
                    <ReactTyped
                      strings={[
                        "Front-End Developer",
                        "AWS Cloud Practitioner",
                      ]}
                      typeSpeed={60}
                      backSpeed={50}
                      loop
                    />
                  </span>{" "}
                  <br />
                  crafting seamless user experiences with modern web
                  technologies.
                </motion.p>
                <motion.p
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-lg"
                >
                  {ctaHeroText.split("").map((char, i) => (
                    <motion.span key={i} variants={letterVariants}>
                      {char}
                    </motion.span>
                  ))}
                </motion.p>
                <div className="flex flex-col py-2 gap-4 md:pt-4">
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
                      className="uppercase cursor-pointer border-b-2 w-fit rounded-full p-2 px-4 hover:bg-black-light border-green my-2 hover:text-green hover:font-bold focus:text-green focus:font-bold"
                    >
                      Contact Me
                    </ScrollLink>
                    <a
                      href="../../assets/KelvinMutugi_Resume.pdf"
                      download="KelvinMutugi_Resume.pdf"
                      className="bg-black-light p-2 px-4 rounded-full uppercase w-fit border-b-2 my-2 hover:bg-black text-green tracking-wider border-green hover:text-white hover:font-bold focus:text-green focus:font-bold"
                    >
                      <span className="flex gap-2">
                        Resume <GoDownload className="size-5 pt-1" />
                      </span>
                    </a>
                  </motion.div>
                  <motion.div
                    className="flex justify-center gap-2 mt-4 sm:justify-start md:hidden"
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
          </div>
        </section>
      </div>
    </Element>
  );
}

export default Hero;
