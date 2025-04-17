import React, { useState } from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  jiosaavan,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import projectDaksh from "../../assets/images/projects/projectDaksh.png";
import mealmingle from "../../assets/images/projects/mealmingle.png";
import { BsGithub } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Daksha.AI",
      des: "Developed a Next.js web app with AI-driven tools for job preparation, featuring an AI Resume Builder, Mock Interview UI, performance tracking, and PDF resume downloads.",
      src: projectDaksh,
    },
    {
      title: "Meal Mingle",
      des: "Meal Mingle: Your go-to food delivery app powered by Redux Toolkit and live APIs for seamless orders and real-time updates. Deliciousness, delivered fast! 🍴",
      src: mealmingle,
    },
    {
      title: "Cafa Connect",
      des: "Developed a MERN stack web app to reduce food waste in cafes/restaurants. Implemented an e-bill and advance booking system with pre-payment, minimizing cancellations and no-shows.",
      src: projectOne,
    },
    {
      title: "Codial (Social Media Platform)",
      des: "Built a MERN stack social media platform offering a fast and immersive experience with robust and scalable technology.",
      src: projectTwo,
    },
    {
      title: "Jio-Saavn",
      des: "Contributed to JioSaavn by testing and developing new features, improving app performance, and enhancing user satisfaction.",
      src: jiosaavan,
    },
    {
      title: "Aimer (A Dating App)",
      des: "Built a React Native and MongoDB-based dating app for minors, providing a secure platform for connecting and chatting with potential matches.",
      src: projectThree,
    },
    {
      title: "Utkrisht-X",
      des: "Developed an online site for a college fest using HTML, CSS, and JavaScript. Designed an event schedule, user-friendly registration form, and photo gallery.",
      src: projectFour,
    },
    // Add more projects if you want
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="w-full py-20 border-b border-gray-800 bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      <div className="flex flex-col items-center text-center mb-12">
        <Title title="VISIT MY PORTFOLIO" des="My Projects" />
        <a
          href="https://github.com/Vivek29112001"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg w-12 h-12 rounded-full bg-gray-800 inline-flex justify-center items-center text-gray-400 hover:text-purple-500 hover:bg-gray-700 duration-300 cursor-pointer shadow-md"
        >
          <BsGithub />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12 px-6 transition-all duration-500">
        {visibleProjects.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white text-lg rounded-full shadow-lg transition duration-300"
        >
          <FaPlus className={`transition-transform duration-300 ${showAll && "rotate-45"}`} />
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
