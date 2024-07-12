import React, { useState } from "react";
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

  return (
    <article className="relative group py-4 ">
      <div>
        <img
          src={imgSrc}
          alt={alt}
          onError={handleError}
          className="w-full min-h-40 object-cover"
        />
      </div>

      <h3 className="py-2 ">{name}</h3>
      <div className="flex gap-2">
        <p>{techStack}</p>
      </div>

      <div className="flex gap-4 lg:flex-col lg:hidden lg:group-hover:flex lg:absolute lg:justify-center lg:items-center lg:bottom-20 lg:left-4 right-4 top-4 lg:bg-opacity-75 lg:bg-black ">
        <a
          href={hosted}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase border-b-2 w-fit border-green my-2 hover:text-green hover:font-bold focus:text-green focus:font-bold"
        >
          View project
        </a>
        <a
          href={gitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase border-b-2 w-fit border-green my-2 hover:text-green hover:font-bold focus:text-green focus:font-bold"
        >
          View code
        </a>
        {/* <Button
          href={gitHub}
          target="_blank"
          rel="noopener noreferrer"
          text="View project"
        />
        <Button
          href={hosted}
          target="_blank"
          rel="noopener noreferrer"
          text="View code"
        /> */}
      </div>
    </article>
  );
}

export default Project;
