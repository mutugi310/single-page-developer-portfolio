import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaMedium } from "react-icons/fa6";

function Socials({ bgColor = "bg-black-light" }) {
  const socialIons = [
    {
      name: "Github Profile",
      href: "https://www.linkedin.com/in/mutugikelvin",
      Icon: FaGithub,
    },
    {
      name: "Medium Profile",
      href: "https://www.linkedin.com/in/mutugikelvin",
      Icon: FaLinkedin,
    },
    {
      name: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/mutugikelvin",
      Icon: FaXTwitter,
    },
    {
      name: "X Profile",
      href: "https://www.linkedin.com/in/mutugikelvin",
      Icon: FaMedium,
    },
  ];
  return (
    <>
      {socialIons.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
          className={`${bgColor} p-2  rounded-full hover:text-green hover:scale-110 focus:text-green focus:scale-110`}
        >
          <social.Icon className="size-4 " />
        </a>
      ))}
    </>
  );
}

export default Socials;
