import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Extra Curricular</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="IEEE Senior Member."
            result="2022-2023"
            des="Achieving IEEE Senior Member status is a significant extracurricular accomplishment, showcasing expertise and contributions to the field of engineering and technology."
          />
          <ResumeCard
            title="IEEE (SB) CS Chair Person."
            result="2021-2022"
            des="As an extra-curricular activity, I served as the Chairperson of the IEEE Student Branch Computer Society (SB-CS)."
          />
          <ResumeCard
            title="Digital Marketing Head of department of CSE."
            result="2021-2022"
            des="As the Head of the Department of Computer Science and Engineering (CSE), I actively promote and encourage students to engage in extracurricular activities related to digital marketing. These activities aim to enhance students' practical knowledge, creativity, and communication skills, providing them with valuable real-world experiences that complement their academic learning. Through workshops, seminars, and hands-on projects, we strive to foster a well-rounded educational environment that prepares our students for successful careers in the ever-evolving digital landscape."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Achievement;
