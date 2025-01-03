import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Certificate = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Advance Front-End Web Development with React - Full Stack . "
            subTitle="Full Stack."
            result="Coding Ninjas"
            des="🚀 Excited to share my Certificate of Excellence in Advanced Front End with React JS - Full Stack! 🌐 Scored 93.5% based on project and task evaluations.
             🏆 Let's connect for innovative collaborations! 🔗 #ReactJS #FullStack #TechExcellence
            This certificate signifies proficiency in Advance Front-End Web Development with React and practical application through the completion of major-project and various projects ."
          />
          <ResumeCard
            title="Front-End. "
            subTitle="MERN Stack."
            result="Coding Ninjas"
            des="Coding Ninjas Front End Web Development Completion Certificate includes:
            HTML, CSS, and JavaScript Concepts.
            AJAX and jQuery usage.
            Completion of mini project.
            Completion of numerous tasks and assignments.
            This certificate signifies proficiency in front-end web development technologies and practical application through the completion of a mini-project and various tasks."
          />
          <ResumeCard
            title="Back-End."
            subTitle="MERN Stack."
            result="Coding Ninjas"
            des="Back End Web Development Certificate: Node.js, Express.js, MongoDB.
            Excellence Certificate: Outstanding performance in the course.
            Major Project: Successfully completed a significant project.
            Proficiency in Node.js: Server-side JavaScript expertise.
            Express.js: Skill in building web applications with Express.js.
            MongoDB: Knowledge of working with MongoDB.
            Task Completion: Completed various assignments.
            Strong Back End Skills: Proficient in creating efficient server-side applications."
          />
          <ResumeCard
            title="Web Development."
            subTitle="Development."
            result="Internshala"
            des="Web Development Course on Internshala
            Focus on Front-End Development
            Includes Various Tasks/Projects
            Comprehensive Learning Experience"
          />
          
        </div>
      </div>
      <div>
        <div className="mt-12 w-full h-[1200px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
          <ResumeCard
            title="Python Programming."
            subTitle="Programming."
            result="Coding Ninjas"
            des="Python programming with DSA (Data Structures and Algorithms) completion and excellence certificate.
            // Lots of questions and concepts covered.  The course likely covers various topics and concepts related to Python and DSA, and upon successful completion, you receive an excellence certificate. Additionally, there are numerous questions and concepts included in the course."
          />
          <ResumeCard
            title="Agile Project Management"
            subTitle="Project Management."
            result="Google Certificate"
            des="Agile Project Management certification from Google with a 90% score! 🌐 Equipped with the latest methodologies"
          />
          <ResumeCard
            title="Crash course on python ."
            subTitle="Programming."
            result="Coursera"
            des="Crash Course on Python is a beginner-level course that provides a quick and practical introduction to Python programming. The course covers essential concepts and programming techniques in Python."
          />
          <ResumeCard
            title="Digital Marketing."
            // subTitle="Lorem ipsum dolor sit amet alternative."
            result="Google"
            des="Google offers digital marketing services."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Certificate;
