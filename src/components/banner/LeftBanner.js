import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Javascript.", "React.", "Front-End.", "Mern Stack.", "Full Stack .", "Web-Developer.", "Python.", "TypeScript."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO.</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Vivek Sharma.</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          My Skill are <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          {/* I am a passionate and aspiring front-end developer with a keen interest in Python, MERN stack, and React. As a fresher in the world of tech, I am excited to embark on a journey of continuous learning and professional growth. */}
          Software Engineer skilled in MERN stack development with experience in mobile and web applications, including work
          at Jio Platforms and Coding Ninjas. Proven ability to enhance user engagement through responsive, user-focused
          applications. Certified in advanced web development and React, with strong collaborative and teaching skills
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner