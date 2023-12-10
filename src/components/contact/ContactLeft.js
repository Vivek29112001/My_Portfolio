import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Vivek Sharma</h3>
        <p className="text-lg font-normal text-gray-400">
          Passionate Front-End Developer | MERN Stack | React | Python | Open to Exciting Opportunities!
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Why Hire Me?<br></br>
          🌟 Proficient in creating responsive web apps using cutting-edge technologies.<br></br>
          🌟 Skilled in JAvascript and its FrameWork React.<br></br>
          🌟 Skilled in implementing RESTful APIs and server-side operations with Node.js and Express.js.<br></br>
          🌟 Excellent collaborator and communicator with cross-functional teams.<br></br>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7535830482</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">vivek15292001@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
          <a href="https://github.com/Vivek29112001" target="_blank" rel="noreferrer noopener">
          <FaGithub/>
          </a>
          </span>
          <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/vivek2911/" target="_blank" rel="noreferrer noopener">
          <FaLinkedinIn/>
          </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft