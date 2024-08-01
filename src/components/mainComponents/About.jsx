import React from "react";
import testProjectImg from "../../assets/testProject.jpg";
import portrait from "../../assets/dev-portrait_bgTest-L.png";
import { ABOUT_TEXT, ABOUT_EXPERT } from "../../constants/data";
import Socials from "../sharedComponents/Socials";
import { CgRadioChecked } from "react-icons/cg";

function About() {
  return (
    <>
      <h2 className="text-center">
        About <span>Me</span>
      </h2>
      <div className="grid sm:grid-cols-12 gap-10">
        <div className="  flex items-center justify-center align-top sm:col-span-5">
          <div>
            <img
              src={portrait}
              alt="image of kelvin"
              className="rounded-md border-2 border-green -mt-10"
            />
          </div>
        </div>
        <div className="sm:col-span-7">
          <div className="flex flex-col justify-center text-center gap-4 pb-4">
            <h3>
              Driven, Result-Oriented
              <br /> Front-End Developer
            </h3>
          </div>
          <p className="text-md">{ABOUT_TEXT}</p>
          <h4 className="pl-1 py-1">I take pride in, inter alia;</h4>
          <ul className="pl-2 text-sm list-none ">
            {ABOUT_EXPERT.map((bullet, index) => (
              <>
                <li key={index} className="flex flex-nowrap gap-2 ">
                  <span className="  pt-1">
                    <CgRadioChecked className="w-3 text-green" />
                  </span>
                  {bullet}
                </li>
              </>
            ))}
          </ul>

          <div className="flex justify-center gap-4 mt-4 sm:justify-start ">
            <Socials />
          </div>

          <p className="hidden ">
            <span>site visits: 0</span>
            interview likelihood score: 0
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
