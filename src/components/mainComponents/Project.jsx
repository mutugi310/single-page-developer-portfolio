import React, { useEffect, useRef, useState } from "react";
import defaultImg from "../../assets/testProject.jpg";
import { motion } from "framer-motion";
import { useAnimateInView } from "../../hooks/useAnimateInView";

function Project({ name, alt, gitHub, hosted, techStack, index }) {
  //set initial image source
  const [imgSrc, setImgSrc] = useState(
    new URL(`../../assets/projectImgs/${name}.png`, import.meta.url).href
  );
  //handle error incase url doesn't exist
  const handleError = () => {
    setImgSrc(defaultImg);
  };
  //use useAnimate custom hook for animations
  const { textVariants, reduceMotion } = useAnimateInView();

  //ref
  const articleRef = useRef(null);
  const linksRef = useRef(null);
  useEffect(() => {
    const handleFocus = () => {
      const firstLink = linksRef.current.querySelector("a");
      if (firstLink) {
        firstLink.focus();
      }
    };

    const articleElement = articleRef.current;
    articleElement.addEventListener("focus", handleFocus);

    return () => {
      articleElement.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <motion.article
      variants={textVariants}
      className="relative group py-4 rounded-lg shadow "
      ref={articleRef}
      tabIndex="0"
    >
      <motion.div
        initial={{ scale: reduceMotion ? 0 : 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src={imgSrc}
          alt={alt}
          onError={handleError}
          className=" w-full min-h-40"
        />
      </motion.div>

      <h3 className="py-2 ">{name}</h3>

      <p className="flex gap-2 text-sm">
        {techStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </p>

      <div
        className="flex gap-4 md:gap-2 md:hidden md:group-hover:flex md:group-focus-within:flex md:flex-col md:absolute md:justify-center md:items-center md:bottom-16 md:left-0 right-0 top-0 md:bg-opacity-85 md:bg-black "
        role="links"
        aria-label="Links to the project, live and github"
        ref={linksRef}
      >
        <a
          href={hosted}
          target="_blank"
          rel="noopener noreferrer"
          className="md:group-focus:flex uppercase cursor-pointer border-b-2 w-fit rounded-md p-1 text-sm hover:bg-black-light border-green my-2  hover:text-green hover:font-bold focus:text-green focus:font-bold"
          tabIndex="0"
        >
          View project
        </a>
        <a
          href={gitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase cursor-pointer border-b-2 w-fit rounded-md p-1 text-sm hover:bg-black-light border-green my-2  hover:text-green hover:font-bold focus:text-green focus:font-bold"
          tabIndex="0"
        >
          View code
        </a>
      </div>
    </motion.article>
  );
}

export default Project;
