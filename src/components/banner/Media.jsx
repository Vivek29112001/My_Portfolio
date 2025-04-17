import React from 'react';
import { FaGithub, FaPython, FaHtml5, FaLinkedinIn, FaReact, FaJs, FaCss3, FaNodeJs } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      {/* Social Links Section */}
      <div>
        <h2 className="mediaHeading">Find me in</h2>
        <div className="mediaContainer">
          <span className="bannerIcon">
            <a href="https://github.com/Vivek29112001" target="_blank" rel="noreferrer noopener">
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/viveksharma2911/" target="_blank" rel="noreferrer noopener">
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="mediaHeading">Best Skill On</h2>
        <div className="mediaContainer">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaJs />
          </span>
          <span className="bannerIcon">
            <FaPython />
          </span>
          <span className="bannerIcon">
            <FaHtml5 />
          </span>
          <span className="bannerIcon">
            <FaCss3 />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;