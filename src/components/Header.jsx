import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
//import { FaTwitter } from "react-icons/fa";
import portrait from "../assets/image-potrait2.png";

function Header() {
  return (
    <header className="relative bg-black">
      <div className="container  max-h-fit  mx-auto py-4 px-4 sm:px-15 lg:px-32 ">
        <div className="flex flex-col w-1/3 gap-2 mx-auto sm:flex-row sm:w-full  justify-between relative z-10">
          <p className="text-2xl text-center">mutugiKelvin</p>
          <div className="flex justify-evenly sm:gap-4  ">
            <FaGithub className="size size-4 sm:size-6"></FaGithub>
            <FaMedium className="size size-4 sm:size-6"></FaMedium>
            <FaLinkedin className="size size-4 sm:size-6"></FaLinkedin>
            <FaXTwitter className="size size-4 sm:size-6"></FaXTwitter>
          </div>
        </div>
        <div className="flex flex-col flex-nowrap relative -top-[4.5rem] sm:flex-row-reverse justify-center sm:-top-12 sm:right-0">
          <div className="  bg-black-light grow w-1/2 mx-auto sm:w-1/3  ">
            <img
              src={portrait}
              alt="developer portrait"
              className=" w-full pt-24 z-0"
            />
          </div>
          <div className="flex flex-col grow  w-full items-center justify-center  relative left-0 z-9  sm:w-2/3 sm:items-start sm:justify-end sm:-pr-10 lg:justify-center ">
            <h1 className="font-bold text-3xl  py-6 md:text-4xl lg:tracking-wide lg:text-5xl ">
              Nice to <br className="hidden sm:block lg:hidden " /> meet you!
              <br className="sm:hidden lg:block" /> I’m
              <br className="hidden sm:block lg:hidden" />
              <span className="underline underline-offset-8 decoration-green decoration-2">
                {" "}
                Kelvin Mutugi
              </span>
              .
            </h1>
            <p className="mb-4 text-xl">
              Based in the UK, I’m a front-end developer
              <br className="hidden sm:block" /> passionate about building
              accessible web apps
              <br className="hidden md:block" /> that users love.
            </p>
            <button className="uppercase border-b-2 w-fit border-green my-2  hover:text-green hover:font-bold">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
