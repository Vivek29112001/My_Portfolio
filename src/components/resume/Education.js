import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      // className="w-full  flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="mt-6 lgl:mt-14 w-full h-[auto] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Computer Science and Engeering"
            subTitle="Tula's Institute , Dehradun (2019-2023)"
            result="77.5%"
            des=""
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="B.L.M Academy, Haldwani (2018-2019)"
            result="61.5%"
            des=""
          />
        </div>
      </div>
      
    </motion.div>
  );
}

export default Education;