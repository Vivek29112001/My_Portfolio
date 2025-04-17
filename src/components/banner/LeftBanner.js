import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Javascript.", "React.", "Front-End.","Next.JS.", "Mern Stack.", "Full Stack .", "Web-Developer.",  "TypeScript.", "Python.",],
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
          Software Developer at Jio | 2 Years in IT | Skilled in MERN Stack, JavaScript, React, and Node.js . Fast learner
          with expertise in AI-driven development and building scalable web and mobile applications. As a front-end
          developer on Jio Platforms, you enhanced user experiences while mentoring students as a Teaching Assistant at
          Coding Ninjas. Certified in advanced web development and React, currently serving notice period, and eager to
          contribute to innovative projects.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner