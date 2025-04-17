import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      <div>
        <div className="mt-6 lg:mt-14 w-full h-auto border-l-4 border-gray-700 border-opacity-70 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Jio Platforms Limited (JPL)"
            result="January 2024 - Present"
            des=" Developed mobile and web applications including MyJio, JioSaavn, JioCinema, and JioSafe, enhancing user
 experience and engagement.
 Leveraged JavaScript, React, and Python to improve application performance, ensuring high-quality and
 seamless user experiences through rigorous testing and innovative solutions.
 Collaborated with cross-functional teams to identify and resolve issues, achieving a increase in application
 stability and user satisfaction. experience"
          />
          <ResumeCard
            title="MERN Stack TA"
            subTitle="TA at Coing Ninjas"
            result="October, 2023 – December, 2023"
            des="Taught MERN stack (MongoDB, Express.js, React.js, Node.js) and assisted students with coding issues, solving
 over 150 queries within 3 months.
 Reviewed student code for clarity, functionality, and adherence to best practices, ensuring high-quality outcomes
 and improved coding skills.
 Provided guidance on debugging and optimization, enhancing students’ problem-solving abilities and coding
 efficiency"
          />
          <ResumeCard
            title="React Developer"
            subTitle="Trihari Solution"
            result="January, 2023 – September, 2023"
            des=" Developed and maintained web applications using React.js, ensuring high performance and responsiveness,
 resulting in a increase in user engagement.
 Collaborated with cross-functional teams to design and implement user-friendly interfaces, improving user
 satisfaction .
 Participated in code reviews and provided constructive feedback to team members, enhancing code quality and
 reducing bug.."
          />
          <ResumeCard
            title="React Intern"
            subTitle="Trihari Solution"
            result="July, 2022 – September, 2022"
            des=" Developed an e-commerce website using HTML, CSS, JavaScript, and React, resulting in increased customer
 engagement .
 Contributed to multiple projects during internship, applying React, HTML, CSS, and JavaScript to implement
 diverse ideas and features, enhancing proficiency and experience in web development.
 Collaborated on a project using Git for version control, ensuring seamless code integration and management,
 which improved team productivity."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;