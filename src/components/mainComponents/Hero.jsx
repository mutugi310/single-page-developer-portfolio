import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { GoDownload } from "react-icons/go";
import portrait from "../../assets/image-portrait2.png";
import Socials from "../sharedComponents/Socials";
import { HERO_TEXT } from "../../constants/data";

function Hero() {
  return (
    <Element name="hero-section">
      <section>
        <div className="flex flex-col flex-nowrap relative pt-2 sm:flex-row-reverse justify-center  sm:right-0">
          <div className=" absolute border-2 border-white h-16 w-16 rounded-full bottom-[50%] right-[15%] z-99 sm:h-20 sm:w-20  sm:bottom-[6%] md:bottom-[10%] md:right-[28%]"></div>
          <div className="  bg-black-light  grow w-1/2 mx-auto sm:w-1/3  ">
            <img
              src={portrait}
              alt="developer portrait"
              className=" w-full pt-24  "
            />
          </div>

          <div className="flex flex-col grow  w-full items-center justify-between  relative left-0 z-9  sm:w-2/3 sm:items-start sm:justify-end sm:-pr-10 lg:justify-center ">
            <h1 className="font-bold text-3xl py-6 md:text-4xl lg:tracking-wide lg:text-5xl ">
              <span className=" text-lg">Hello 👋, I’m</span> <br />
              <span className=" bg-gradient-to-r-custom bg-clip-text text-transparent underline underline-offset-8 decoration-green decoration-2">
                Kelvin Mutugi
              </span>
              .
            </h1>
            <p className="mb-4 text-xl text-center sm:text-left ">
              {HERO_TEXT}
            </p>
            <p>Let's build something amazing together!</p>
            <div className="flex flex-col pt-2 gap-4 items-center sm:flex-row">
              <ScrollLink
                to="contact-section"
                smooth="true"
                tabIndex="0"
                className="uppercase cursor-pointer border-b-2 w-fit rounded-md p-1 hover:bg-black-light border-green my-2  hover:text-green hover:font-bold focus:text-green focus:font-bold"
              >
                Contact Me
              </ScrollLink>
              <a
                href="../../assets/KelvinMutugi_Resume.pdf"
                download="KelvinMutugi_Resume.pdf"
                className="bg-black-light p-1 rounded-md uppercase w-fit border-b-2 my-2 hover:bg-black text-green tracking-wider  border-green  hover:text-white hover:font-bold focus:text-green focus:font-bold"
              >
                <span className="flex gap-2 ">
                  Resume <GoDownload className="size-5 pt-1 " />
                </span>
              </a>
              <div className="flex justify-start gap-4 mt-4 sm:hidden  ">
                <Socials />
              </div>
            </div>
          </div>
        </div>
        <aside className="hidden md:flex md:justify-center gap-4  ">
          <Socials />
        </aside>
      </section>
    </Element>
  );
}

export default Hero;
