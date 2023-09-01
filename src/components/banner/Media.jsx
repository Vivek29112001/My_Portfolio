import React from 'react'
import { FaGithub, FaPython,FaHtml5, FaLinkedinIn, FaReact , FaJs, FaCss3, FaNodeJs } from "react-icons/fa";
// import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaJs />
            </span>
            <span className="bannerIcon">
              <FaPython/>
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
  )
}

export default Media