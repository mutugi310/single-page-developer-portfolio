import React from "react";
import Socials from "./sharedComponents/Socials";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/kelvinMutugi.svg";

function Footer() {
  return (
    <footer className="bg-black-light">
      <div className="container mx-auto px-4 sm:px-15 lg:px-32">
        <div className="pt-16 pb-4">
          <section className="flex flex-col py-4 w-full gap-4 items-center md:flex-row md:justify-between  ">
            <nav>
              <ScrollLink to="hero-section" smooth="true" tabIndex="0">
                <img
                  src={logo}
                  alt="kelvin mutugi logo"
                  className="max-h-6 cursor-pointer"
                />
              </ScrollLink>

              <ul className=" flex flex-col justify-center gap-3 items-center md:flex-row md:justify-evenly  ">
                <li>
                  <ScrollLink
                    to="hero-section"
                    smooth="true"
                    tabIndex="0"
                    activeClass="active"
                    className="text-md cursor-pointer hover:border-b-2 hover:border-b-green focus:border-b-2 focus:border-b-green  active:text-green"
                  >
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="about-section"
                    smooth="true"
                    tabIndex="0"
                    activeClass="active"
                    className="text-md cursor-pointer hover:border-b-2 hover:border-b-green focus:border-b-2 focus:border-b-green  active:text-green"
                  >
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="skills-section"
                    smooth="true"
                    tabIndex="0"
                    activeClass="active"
                    className="text-md cursor-pointer hover:border-b-2 hover:border-b-green focus:border-b-2 focus:border-b-green  active:text-green"
                  >
                    Skills
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="project-section"
                    smooth="true"
                    tabIndex="0"
                    activeClass="active"
                    className="text-md cursor-pointer hover:border-b-2 hover:border-b-green focus:border-b-2 focus:border-b-green  active:text-green"
                  >
                    Projects
                  </ScrollLink>
                </li>
              </ul>
            </nav>
            <div className="flex justify-evenly gap-4  ">
              <Socials bgColor="bg-black" />
            </div>
          </section>
          <section className="flex justify-center ">
            &copy; kelvin {new Date().getFullYear()}
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
