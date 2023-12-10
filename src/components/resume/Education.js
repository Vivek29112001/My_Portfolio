import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full  flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019-2023</p>
          <h2 className="text-3xl md:text-3xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[850px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022(July-Sep)</p>
          <h2 className="text-3xl md:text-3xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[900px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React Intern"
            subTitle="Trihari  Solution (July, 2022 – september,2022)"
            result="Dehradun"
            des="Developed an e-commerce website from scratch using HTML, CSS, JavaScript, and React, which led to a significant X% increase in customer engagement.
            Collaborated with cross-functional teams to understand project requirements and contribute to the development of cutting-edge web applications.
            Implemented best practices for React programming, resulting in improved code quality and maintainability.
            Successfully handled multiple smaller tasks and actively participated in various projects, honing React skills and gaining valuable practical experience.
            Utilized React to build reusable components, reducing development time and increasing productivity."
          />
          <ResumeCard
            title="MERN Stack TA"
            subTitle="TA at Coing Ninjas(October, 2023 – present)"
            result="Remote"
            des="A MERN TA at Coding Ninjas is a Teaching Assistant specializing in MongoDB, Express.js, React, and Node.js, helping students learn these technologies. Responsibilities include assisting students, reviewing code, mentoring, and engaging with the community. Requirements include MERN stack expertise, effective communication, teaching skills, and a passion for learning. The role offers professional growth, networking, and a flexible work environment, contributing to the education of aspiring developers."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;