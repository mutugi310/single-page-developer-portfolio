import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaMedium } from "react-icons/fa6";

function Socials({ bgColor = "bg-black-light" }) {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/mutugikelvin"
        target="_blank"
        rel="noopener noreferrer"
        title="Github Profile"
        className={`${bgColor} p-2 rounded-md hover:text-green hover:scale-110 focus:text-green focus:scale-110`}
      >
        <FaGithub className="size size-4 " />
      </a>
      <a
        href="https://www.linkedin.com/in/mutugikelvin"
        target="_blank"
        rel="noopener noreferrer"
        title="Medium Profile"
        className={`${bgColor} p-2 rounded-md hover:text-green hover:scale-110 focus:text-green focus:scale-110`}
      >
        <FaMedium className="size size-4 " />
      </a>
      <a
        href="https://www.linkedin.com/in/mutugikelvin"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn Profile"
        className={`${bgColor} p-2 rounded-md hover:text-green hover:scale-110 focus:text-green focus:scale-110`}
      >
        <FaLinkedin className="size size-4 " />
      </a>
      <a
        href="https://www.linkedin.com/in/mutugikelvin"
        target="_blank"
        rel="noopener noreferrer"
        title="X Profile"
        className={`${bgColor} p-2 rounded-md hover:text-green hover:scale-110 focus:text-green focus:scale-110`}
      >
        <FaXTwitter className="size size-4 " />
      </a>
    </>
  );
}

export default Socials;
