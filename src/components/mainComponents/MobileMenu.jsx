import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaXTwitter, FaMedium } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function MobileMenu({ onClose }) {
  return (
    <>
      <nav className="absolute right-0 top-0 rounded-md flex flex-col justify-center items-center gap-4 bg-black py-8 min-w-1/2 max-h-2/3  ">
        <div
          className=" cursor-pointer absolute right-2 top-2 bg-black-light p-1 rounded-sm hover:text-green hover:scale-105 focus:text-green focus:scale-105"
          onClick={onClose}
        >
          <IoMdClose size="20"></IoMdClose>
        </div>
        <ul className=" flex flex-col w-1/3 gap-2 pt-4 ">
          <li>
            <ScrollLink
              to="hero-section"
              smooth="true"
              tabIndex="0"
              activeClass="active"
              onClick={onClose}
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
              onClick={onClose}
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
              onClick={onClose}
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
              onClick={onClose}
              className="text-md cursor-pointer hover:border-b-2 hover:border-b-green focus:border-b-2 focus:border-b-green  active:text-green"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact-section"
              smooth="true"
              tabIndex="0"
              activeClass="active"
              onClick={onClose}
              className="text-md cursor-pointer hover:border-b-2 hover:border-b-green focus:border-b-2 focus:border-b-green  active:text-green"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
        <h3 className="uppercase  text-center pr-2 mt-4">Find Me</h3>
        <div className="flex justify-start gap-4  border-y-2 border-y-green py-2 px-2 rounded-sm ">
          <a
            href="https://www.linkedin.com/in/mutugikelvin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black-light p-2 rounded-md hover:text-green hover:scale-110"
          >
            <FaGithub className="size size-4 " />
          </a>
          <a
            href="https://www.linkedin.com/in/mutugikelvin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black-light p-2 rounded-md hover:text-green hover:scale-110"
          >
            <FaMedium className="size size-4 " />
          </a>
          <a
            href="https://www.linkedin.com/in/mutugikelvin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black-light p-2 rounded-md hover:text-green hover:scale-110"
          >
            <FaLinkedin className="size size-4 " />
          </a>
          <a
            href="https://www.linkedin.com/in/mutugikelvin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black-light p-2 rounded-md hover:text-green hover:scale-110"
          >
            <FaXTwitter className="size size-4 " />
          </a>
        </div>
      </nav>
    </>
  );
}

export default MobileMenu;
