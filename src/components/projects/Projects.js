import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFive, projectFour, jiosaavan, JioCenima } from "../../assets/index";
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
          des="My Projects / Testing"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Cafa Connect"
          des="Developed a MERN stack web app to reduce food waste in cafes/restaurants. Implemented an e-bill and advance booking system with pre-payment, minimizing cancellations and no-shows. Enhanced order processing and operational efficiency."
          src={projectOne}
          // git="https://github.com/yourusername/CafaConnect"
          // web="https://cafaconnect.example.com"
        />
        <ProjectsCard
          title="Registerkro"
          des="RegisterKro Assignment : Built a RegisterKro-like platform within a 24-hour deadline using optimized and reusable code. Implemented React Redux to prevent prop drilling and ensure clean, efficient logic. Delivered a high-quality, scalable solution that met all requirements."
          src={projectFive}
          git="https://github.com/yourusername/Registerkro"
          web="https://registor-karo-final.vercel.app/"
        />
        <ProjectsCard
          title="Codial (Social Media platform)"
          des="Codial is powered by the MERN (MongoDB, Express.js, React, Node.js) stack, ensuring a robust, efficient, and scalable platform. With our cutting-edge technology stack, we provide a fast and immersive social media experience."
          src={projectTwo}
          git="https://github.com/yourusername/Codial"
          // web="https://codial.example.com"
        />
        <ProjectsCard
          title="Jio-Saavn"
          des="Contributed to JioSaavn by testing and developing new features, ensuring a seamless user experience. Identified and fixed bugs to improve app performance and reliability, enhancing overall user satisfaction."
          src={jiosaavan}
          // git="https://github.com/yourusername/JioSaavn"
          web="https://www.jiosaavn.com/"
        />
        {/* <ProjectsCard
          title="JioCinema"
          des="Contributed to the development and testing of JioCinema's front-end. Enhanced UI/UX by implementing new features and addressing existing bugs, resulting in a more seamless and user-friendly experience."
          src={JioCenima}
          // git="https://github.com/yourusername/JioCinema"
          web="https://www.jiocinema.com/"
        /> */}
        <ProjectsCard
          title="Aimer (A Dating App)"
          des="Built a React Native and MongoDB-based dating app for minors, providing a secure platform for connecting and chatting with potential matches. Designed user profiles with personal information and profile pictures."
          src={projectThree}
          git="https://github.com/yourusername/Aimer"
          // web="https://aimer.example.com"
        />
        <ProjectsCard
          title="Utkrisht-X"
          des="Developed an online site for a college fest using HTML, CSS, and JavaScript. Designed an event schedule, user-friendly registration form, and photo gallery."
          src={projectFour}
          git="https://github.com/Vivek29112001/Utkrisht-2022"
          web="https://utkrisht-2022-t6kr.vercel.app/"
        />
      </div>
    </section>
  );
}

export default Projects;
