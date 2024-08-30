import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/kelvinMutugi.svg";
import Hero from "./mainComponents/Hero";
import MobileMenu from "./mainComponents/MobileMenu";
import CustomScrollingLink from "./sharedComponents/CustomScrollLink";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className=" bg-black  w-full">
      <div
        className={`fixed top-0 left-0 right-0 bg-black  z-50 transition-opacity duration-300 ${
          isScrolled ? "bg-opacity-90 py-0" : "bg-opacity-100 py-2"
        }`}
      >
        <nav className="container mx-auto flex justify-between w-full py-2 px-4   sm:px-15 lg:px-32">
          <ScrollLink to="hero-section" smooth="true" tabIndex="0">
            <img
              src={logo}
              alt="kelvin mutugi logo"
              className="max-h-6 cursor-pointer"
            />
          </ScrollLink>
          <div
            className="md:hidden bg-black-light p-1 rounded-sm hover:text-green hover:scale-105 focus:text-green focus:scale-105"
            onClick={toggleMenu}
          >
            <CiMenuFries size="20" />
          </div>
          {menuOpen && (
            <div className="absolute inset-0  h-screen bg-black-light bg-opacity-50 md:hidden">
              <MobileMenu onClose={toggleMenu}></MobileMenu>
            </div>
          )}

          <ul className="hidden md:flex justify-evenly gap-8  ">
            {/*  {[
              { name: "Home", to: "hero-section" },
              { name: "About", to: "about-section" },
              { name: "Skills", to: "skills-section" },
              { name: "Projects", to: "project-section" },
            ].map((linkName) => (
              <li key={linkName.name}>
                <CustomScrollingLink
                  to={linkName.to}
                  activeClass={"active"}
                  className={
                    'className="text-md cursor-pointer hover:border-b-2 hover:border-b-green focus:border-b-2 focus:border-b-green  active:text-green'
                  }
                >
                  {linkName.name}
                </CustomScrollingLink>
              </li>
            ))} */}

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
                className="text-base cursor-pointer hover:border-b-2 hover:border-b-green focus:border-b-2 focus:border-b-green  active:text-green"
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
                className="text-base cursor-pointer hover:border-b-2 hover:border-b-green focus:border-b-2 focus:border-b-green  active:text-green"
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
      </div>
      <div className="container mx-auto pb-10 px-4 sm:px-15 lg:px-32 ">
        <Hero />
      </div>
    </header>
  );
}

export default Header;
