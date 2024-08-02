import React from "react";

function Skill({ skill, experience, icon: Icon, className }) {
  return (
    <>
      <article className=" flex flex-col gap-2 items-center text-center py-3 px-2 bg-black-light rounded-xl ">
        <Icon className={className}></Icon>
        <h3 className="text-md pb-2  ">{skill}</h3>
        <p className="text-sm">
          {experience} Year{experience > 1 ? "s" : ""}
        </p>
      </article>
    </>
  );
}

export default Skill;
