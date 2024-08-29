import React from "react";
import { SKILLS } from "../../constants/data";
import { useAnimateInView } from "../../hooks/useAnimateInView";
import { motion } from "framer-motion";

function Skills() {
  const { text2Variant, textVariants, containerVariants } = useAnimateInView();
  return (
    <section className=" border-y-[1.5px] border-y-gray pt-10 ">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={text2Variant}
        viewport={{ once: true }}
        className="text-center"
      >
        Professional <span className="text-green">Skills</span>
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="grid grid-cols-2 items-center gap-4 py-8  sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 "
        role="list"
        aria-label="List of professional skills"
        tabIndex="0"
      >
        {SKILLS.map((skill) => (
          <motion.article
            variants={textVariants}
            className=" flex flex-col gap-2 items-center text-center py-3 px-2 bg-black-light rounded-xl "
            key={skill.name}
          >
            <skill.icon className={skill.className}></skill.icon>
            <h3 className="text-md pb-2  ">{skill.name}</h3>
            <p className="text-sm">
              {skill.experienceYrs} Year{skill.experienceYrs > 1 ? "s" : ""}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
