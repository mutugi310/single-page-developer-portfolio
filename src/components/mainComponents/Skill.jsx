import React from "react";

function Skill({ skill, experience, icon: Icon, className }) {
  return (
    <>
      <article className=" flex flex-col gap-2 items-center text-center py-3 px-2 bg-black-light rounded-xl ">
        <Icon className={className}></Icon>
        <h2 className="text-md pb-2  ">{skill}</h2>
        <p className="text-sm">{experience} Years Experience</p>
      </article>
    </>
  );
}

export default Skill;
