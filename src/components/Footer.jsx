import React from "react";
import Socials from "./sharedComponents/Socials";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/kelvinMutugi.svg";
import { useAnimateInView } from "../hooks/useAnimateInView";
import { motion } from "framer-motion";

function Footer() {
  const { text2Variant, textVariants, containerVariants } = useAnimateInView();
  return (
    <footer className="bg-black-light">
      <div className="container mx-auto px-4 sm:px-15 lg:px-32">
        <div className="pt-16 pb-4">
          <section className="flex flex-col py-4 w-full gap-4 items-center md:flex-row md:justify-between  ">
            <motion.nav
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              <ScrollLink to="hero-section" smooth="true" tabIndex="0">
                <motion.img
                  variants={textVariants}
                  src={logo}
                  alt="kelvin mutugi logo"
                  className="max-h-6 cursor-pointer"
                />
              </ScrollLink>

              <motion.ul
                variants={textVariants}
                className=" flex flex-col justify-center gap-3 items-center md:flex-row md:justify-evenly  "
              >
                {[
                  { name: "Home", to: "hero-section" },
                  { name: "About", to: "about-section" },
                  { name: "Skills", to: "skills-section" },
                  { name: "Projects", to: "project-section" },
                ].map((item) => (
                  <li key={item.name}>
                    <ScrollLink
                      to={item.to}
                      smooth="true"
                      tabIndex="0"
                      activeClass="active"
                      className=" text-lg cursor-pointer hover:border-b-2 hover:border-b-green focus:border-b-2 focus:border-b-green  active:text-green"
                    >
                      {item.name}
                    </ScrollLink>
                  </li>
                ))}
              </motion.ul>
            </motion.nav>
            <div className="flex justify-evenly gap-4  ">
              <Socials bgColor="bg-black" />
            </div>
          </section>
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={text2Variant}
            viewport={{ once: true }}
            className="flex justify-center "
          >
            &copy; kelvin {new Date().getFullYear()}
          </motion.section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
