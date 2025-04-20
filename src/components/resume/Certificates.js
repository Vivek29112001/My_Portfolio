import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Certificate = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col md:flex-row gap-8 md:gap-12 px-4"
    >
      {/* Left Column */}
      <div className="w-full md:w-1/2">
        <div className="mt-14 w-full min-h-[400px] border-l-4 border-l-black border-opacity-30 flex flex-col gap-8">
          <ResumeCard
            title="Advance Front-End Web Development with React - Full Stack"
            subTitle="Full Stack"
            result="Coding Ninjas"
            des="🚀 Excited to share my Certificate of Excellence in Advanced Front-End with React JS - Full Stack! Scored 93.5% based on project and task evaluations. Let's connect for innovative collaborations! This certificate signifies proficiency in advanced front-end development with React through major projects and various tasks."
          />
          <ResumeCard
            title="Front-End"
            subTitle="MERN Stack"
            result="Coding Ninjas"
            des="Coding Ninjas Front-End Web Development Completion Certificate covering HTML, CSS, JavaScript, AJAX, and jQuery. Demonstrates proficiency through completion of mini projects and various assignments."
          />
          <ResumeCard
            title="Back-End"
            subTitle="MERN Stack"
            result="Coding Ninjas"
            des="Back-End Web Development Certificate covering Node.js, Express.js, and MongoDB. Awarded for outstanding performance and project accomplishment, reinforcing strong server-side skills."
          />
          <ResumeCard
            title="Web Development"
            subTitle="Development"
            result="Internshala"
            des="Web Development Course on Internshala focused on front-end development with projects and tasks for a comprehensive learning experience."
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2">
        <div className="mt-12 w-full min-h-[400px] border-l-4 border-l-black border-opacity-30 flex flex-col gap-8">
          <ResumeCard
            title="Python Programming"
            subTitle="Programming"
            result="Coding Ninjas"
            des="Certificate in Python Programming with DSA. This certification covers a wide range of questions and concepts, building a strong foundation in Python and data structures."
          />
          <ResumeCard
            title="Agile Project Management"
            subTitle="Project Management"
            result="Google Certificate"
            des="Agile Project Management certification from Google with a 90% score. Equips you with the latest methodologies for effective project management."
          />
          <ResumeCard
            title="Crash Course on Python"
            subTitle="Programming"
            result="Coursera"
            des="A beginner-level crash course on Python providing a practical introduction to core programming concepts and techniques."
          />
          <ResumeCard
            title="Digital Marketing"
            result="Google"
            des="Digital Marketing course by Google that covers comprehensive marketing strategies, hands-on projects, and practical insights into the digital landscape."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Certificate;
