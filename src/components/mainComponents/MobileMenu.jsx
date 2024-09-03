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
          <IoMdClose size="22"></IoMdClose>
        </div>
        <ul className=" flex flex-col w-1/3 gap-2 pt-4 ">
          {[
            { name: "Home", to: "hero-section" },
            { name: "About", to: "about-section" },
            { name: "Skills", to: "skills-section" },
            { name: "Projects", to: "project-section" },
            { name: "Contact", to: "contact-section" },
          ].map((item) => (
            <li key={item.name}>
              <ScrollLink
                to={item.to}
                spy={true}
                smooth="true"
                tabIndex="0"
                activeClass="border-b-2 border-b-green"
                onClick={onClose}
                className="text-lg cursor-pointer hover:border-b-2 hover:border-b-green focus:border-b-2 focus:border-b-green  active:text-green"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <h3 className="uppercase  text-center pr-2 mt-4">Find Me</h3>
        <div className="flex justify-start gap-4  border-y-2 border-y-green py-2 px-2 rounded-sm ">
          <a
            href="https://www.linkedin.com/in/mutugikelvin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black-light p-2 rounded-md hover:text-green hover:scale-110"
          >
            <FaGithub className="size size-5 " />
          </a>
          <a
            href="https://www.linkedin.com/in/mutugikelvin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black-light p-2 rounded-md hover:text-green hover:scale-110"
          >
            <FaMedium className="size size-5 " />
          </a>
          <a
            href="https://www.linkedin.com/in/mutugikelvin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black-light p-2 rounded-md hover:text-green hover:scale-110"
          >
            <FaLinkedin className="size size-5 " />
          </a>
          <a
            href="https://www.linkedin.com/in/mutugikelvin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black-light p-2 rounded-md hover:text-green hover:scale-110"
          >
            <FaXTwitter className="size size-5 " />
          </a>
        </div>
      </nav>
    </>
  );
}

export default MobileMenu;
