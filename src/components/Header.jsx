import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/kelvinMutugi.svg";
import leftOvals from "../assets/ovals-left.png";
import Button from "./sharedComponents/Button";
import Hero from "./mainComponents/Hero";
import MobileMenu from "./mainComponents/MobileMenu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };
  return (
    <header className="relative bg-black  w-full overflow-hidden">
      <div className="container relative  mx-auto py-4 px-4 sm:px-15 lg:px-32 ">
        <div className="  absolute top-[4rem] -left-[12rem] w-[24rem] max-h-[4rem] z-99 opacity-3 rounded-full sm:-left-[10rem] lg:-left-[2rem]">
          <ScrollLink to="hero-section" smooth="true" tabIndex="0">
            <img src={leftOvals} alt="ovals overlay" />
          </ScrollLink>
        </div>

        <nav className="flex sticky justify-between w-full  z-10">
          <img
            src={logo}
            alt="kelvin mutugi logo"
            className="max-h-6 cursor-pointer"
          />
          <div
            className="md:hidden bg-black-light p-1 rounded-sm hover:text-green hover:scale-105 focus:text-green focus:scale-105"
            onClick={toggleMenu}
          >
            <CiMenuFries size="20" />
          </div>
          {!menuOpen && (
            <div className="absolute inset-0  h-screen bg-black-light bg-opacity-50 md:hidden">
              <MobileMenu onClose={toggleMenu}></MobileMenu>
            </div>
          )}

          <ul className="hidden md:flex justify-evenly gap-8  ">
            <li>
              <ScrollLink
                to="contact-section"
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
        <Hero></Hero>
      </div>
    </header>
  );
}

export default Header;
