import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { GoDownload } from "react-icons/go";
import portrait from "../../assets/dev-portrait_bgTest.png";
import leftOvals from "../../assets/ovals-left.png";
import Socials from "../sharedComponents/Socials";
import { HERO_TEXT } from "../../constants/data";

function Hero() {
  return (
    <Element name="hero-section">
      <div className="grid relative grid-cols-1 gap-8 md:grid-cols-12 justify-between  ">
        <div className="  absolute top-[3rem] -left-[15rem] w-[24rem]  max-h-[4rem] z-20 md:top-[1rem] md:-left-[12rem] md:w-[24rem] md:max-h-[3rem] md:z-10  opacity-3 rounded-full sm:-left-[10rem] lg:-left-[2rem]">
          <img src={leftOvals} alt="ovals overlay" />
        </div>
        <aside className="hidden relative z-20 gap-4 mx-auto  md:flex md:flex-col md:justify-center col-span-1   ">
          <Socials />
        </aside>
        <section className="md:col-span-11 ">
          <div className="flex relative w-full  flex-col flex-nowrap pt-2 gap-2 sm:flex-row-reverse justify-center sm:justify-between">
            <div className=" relative z-9  w-2/3   mx-auto  grow sm:w-[50%]  ">
              <div className="absolute border-4 border-green  w-full  rounded-full bottom-0 top-8 right-0 z-9 "></div>
              <img
                src={portrait}
                alt="developer portrait"
                className=" w-full relative rounded-full pb-1 z-10 "
              />
            </div>

            <div className="flex flex-col grow  w-full items-center justify-between  relative left-0   sm:w-2/3 sm:items-start sm:justify-end sm:-pr-10 lg:justify-center ">
              <h1 className="font-bold text-3xl py-6 text-center sm:text-start md:text-4xl lg:tracking-wide lg:text-5xl ">
                <span className=" text-lg">Hello 👋, I’m</span> <br />
                <span className=" bg-gradient-custom bg-clip-text text-transparent underline underline-offset-8 decoration-green decoration-2 bold">
                  Kelvin Mutugi
                </span>
                .
              </h1>
              <p className="mb-4 text-xl text-center sm:text-left ">
                {HERO_TEXT}
              </p>
              <p>Let's build something amazing together!</p>
              <div className="flex flex-col py-2 gap-4  ">
                <div className="flex flex-col pt-2 gap-2 items-center sm:flex-row sm:gap-4">
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
                </div>
                <div className="flex justify-start gap-2 mt-4 md:hidden  ">
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
}

export default Hero;
