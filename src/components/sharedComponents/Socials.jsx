import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaMedium } from "react-icons/fa6";
import { useReducedMotion, motion, easeInOut } from "framer-motion";

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

function Socials({ bgColor = "bg-black-light" }) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      {socialIons.map((social, i) => (
        <motion.a
          initial={{ opacity: 0, y: reduceMotion ? 0 : i === 0 ? 0 : -i * 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: reduceMotion ? 0 : i * 0.2,
          }}
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
          className={`${bgColor} p-2  rounded-full hover:text-green hover:scale-110 focus:text-green focus:scale-110`}
        >
          <social.Icon className="size-4 hover:scale-110" />
        </motion.a>
      ))}
    </>
  );
}

export default Socials;
