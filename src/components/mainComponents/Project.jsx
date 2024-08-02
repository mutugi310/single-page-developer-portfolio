import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-scroll";
import defaultImg from "../../assets/testProject.jpg";

function Project({ name, alt, gitHub, hosted, techStack }) {
  //set initial image source
  const [imgSrc, setImgSrc] = useState(
    new URL(`../../assets/projectImgs/${name}.png`, import.meta.url).href
  );
  //handle error incase url doesn't exist
  const handleError = () => {
    setImgSrc(defaultImg);
  };
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
    <article
      className="relative group py-4 rounded-lg shadow "
      ref={articleRef}
      tabIndex="0"
    >
      <div>
        <img
          src={imgSrc}
          alt={alt}
          onError={handleError}
          className=" w-full min-h-40"
        />
      </div>

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
    </article>
  );
}

export default Project;
