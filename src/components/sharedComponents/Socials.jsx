import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaMedium } from "react-icons/fa6";
import { useReducedMotion, motion, easeInOut } from "framer-motion";

const socialIons = [
  {
    name: "Github Profile",
    href: "https://github.com/mutugi310",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/mutugikelvin",
    Icon: FaLinkedin,
  },
  {
    name: "X Profile",
    href: "https://x.com/KevMutugi?t=-iCJKi2ijV4q4o3nkJ_hyg&s=08",
    Icon: FaXTwitter,
  },
  {
    name: "Medium Profile",
    href: "https://medium.com/@kelvinmutugi210",
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: reduceMotion ? 0 : i * 0.2,
          }}
          viewport={{ once: true }}
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
