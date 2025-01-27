import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full  flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >

      {/* part Two */}

      <div>
        {/*  */}
        <div className="mt-6 lgl:mt-14 w-full h-[auto] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" Software Engineer  "
            subTitle="Jio Platforms Limited (JPL)"
            result="January 2024 - Present"
            des="Develop mobile and web applications including MyJio, JioSaavn, JioCinema, JioSafe,
 Jiocinema, and PeopleFirst. 
Leverage JavaScript, React, and Python to enhance user experience. Ensure application quality
 and performance through rigorous testing and innovative solutions. 
Collaborate with cross-functional teams to identify and resolve issues, ensuring a seamless user
 experience."
          />
          {/* <div className="mt-6 lgl:mt-14 w-full h-[900px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"> */}
          <ResumeCard
            title="MERN Stack TA"
            subTitle="TA at Coing Ninjas"
            result="October, 2023 – December, 2023"
            des=" Teach the MERN stack (MongoDB, Express.js, React.js, Node.js) and support students with coding
 challenges.
 Solved over 150 student queries within a 3-month period. 
Review student code for clarity, functionality, and adherence to best practices to ensure high
quality outcomes. Provide guidance on debugging and optimization, helping students improve their
 coding skills"
          />
          <ResumeCard
            title="React Developer"
            subTitle="Trihari  Solution "
            result="January, 2023 – September,2023"
            des="Developed and maintained web applications using React.js, ensuring high performance and
 responsiveness. 
Collaborated with cross-functional teams to design and implement user-friendly interfaces.
 Participated in code reviews and provided constructive feedback to team members."
          />
          <ResumeCard
            title="React Intern"
            subTitle="Trihari  Solution "
            result="July, 2022 – September,2022"
            des=" Developed an e-commerce website using HTML, CSS, JavaScript, and React, resulting in
 increased customer engagement by X%. 
Contributed to multiple projects during internship, applying React, HTML, CSS, and JavaScript to
 implement diverse ideas and features, enhancing proficiency and experience in web development."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;