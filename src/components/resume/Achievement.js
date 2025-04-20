import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont px-4"
    >
      {/* Title Section */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Extra Curricular</h2>
        </div>
      </div>

      {/* Resume Cards Section */}
      <div className="w-full md:max-w-4xl mx-auto">
        <div className="mt-14 border-l-6 border-l-black border-opacity-30 flex flex-col gap-10">
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
            title="Digital Marketing Head of Department of CSE."
            result="2021-2022"
            des="As the Head of the Department of Computer Science and Engineering (CSE), I actively promoted extracurricular activities related to digital marketing, enhancing practical knowledge, creativity, and communication skills."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
