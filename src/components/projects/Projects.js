import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree , projectFive , projectFour} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO."
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title=" Cafa Connect."
          des=" Developed a MERN stack web application to reduce food waste in cafes and restaurants through 
          an online ordering system. 
          Utilized MongoDB for database management. "
          src={projectOne}
        />
        <ProjectsCard
          title="Codial (Social Media plateform)"
          des=" Codial is powered by the MERN (MongoDB, Express.js, React, Node.js) stack, ensuring a robust, efficient, and scalable platform. 
          With our cutting-edge technology stack, we provide a fast and immersive social media experience."
          src={projectTwo}
        />
        <ProjectsCard
          title=" Aimer (A Dating App)"
          des=" Built a React Native and MongoDB-based dating app for minors, providing a secure platform for 
          connecting and chatting with potential matches.Designed user profiles with personal information 
          and profile pictures. "
          src={projectThree}
        />
        <ProjectsCard
          title="Utkrisht-X"
          des=" Developed an online site for a college fest using HTML, CSS, and JavaScript. Designed an event 
          schedule, user-friendly registration form, and photo gallery. "
          src={projectFour}
        />
        <ProjectsCard
          title="TextUtils"
          des="Text-Utils is a web tool to assist developers and other people in daily tasks by providing tools for manipulating text data "
          src={projectFive}
        />
      </div>
    </section>
  );
}

export default Projects