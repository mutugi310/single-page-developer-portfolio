import React from "react";
import testProjectImg from "../../assets/testProject.jpg";
import portrait from "../../assets/image-portrait2.png";
import { ABOUT_EXPERT } from "../../constants/data";
import Socials from "../sharedComponents/Socials";

function About({ aboutDescription, aboutBottomText }) {
  return (
    <>
      <div className="  my-auto bg-slate-600 sm:col-span-3">
        <img src={portrait} alt="image of kelvin" className="rounded-md" />
      </div>
      <div className="sm:col-span-4">
        <div className="flex flex-col justify-center text-center gap-4 pb-4">
          <h2>About Me</h2>
          <h3>
            Driven, Result-Oriented,
            <br /> Front-End Developer
          </h3>
        </div>
        <p>{aboutDescription}</p>
        <h4>Expertise</h4>
        <ul>
          {ABOUT_EXPERT.map((bullet, i) => {
            <li key={i}>
              <span>{">"}</span> {bullet}
            </li>;
          })}
        </ul>
        <p>{aboutBottomText}</p>
        <div className="flex justify-center gap-4 mt-4 ">
          <Socials bgColor="bg-black-light" />
        </div>

        <p className="hidden ">
          <span>site visits: 0</span>
          interview likelihood score: 0
        </p>
      </div>
    </>
  );
}

export default About;
