import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-black/70 backdrop-blur-lg flex justify-between items-center font-titleFont border-b border-gray-800 shadow-md">
      <div>
        <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-xl transition transform hover:scale-105 hover:shadow-2xl duration-300">
          {/* <img src={logo} alt="logo" className="w-10 h-10 rounded-full border-2 border-white" /> */}
          <h1 className="text-3xl font-bold text-white tracking-wider drop-shadow-lg">
            Vivek Sharma
          </h1>
        </div>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-8 lg:gap-12">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              key={_id}
              className="text-base font-medium text-gray-300 cursor-pointer relative group"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-designColor transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-2xl mdl:hidden bg-gray-800 w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer transition-colors duration-300 hover:bg-designColor hover:text-white"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-y-auto absolute top-0 left-0 bg-black/80 backdrop-blur-md p-6 transition duration-300">
            <div className="flex flex-col gap-8 py-4 relative">
              <div className="flex items-center gap-4">
                <img className="w-16" src={logo} alt="logo" />
                <p className="text-sm text-gray-300">
                  I am a passionate and aspiring front-end developer excited to grow and learn in the tech field.
                </p>
              </div>
              <ul className="flex flex-col gap-6">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-lg font-medium text-gray-300 cursor-pointer hover:text-designColor transition-all duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-2 text-gray-200">
                  Find me in
                </h2>
                <div className="flex gap-6">
                  <span className="text-2xl text-gray-300 hover:text-designColor transition duration-300">
                    <a href="https://github.com/Vivek29112001" target="_blank" rel="noreferrer noopener">
                      <FaGithub />
                    </a>
                  </span>
                  <span className="text-2xl text-gray-300 hover:text-designColor transition duration-300">
                    <a href="https://www.linkedin.com/in/viveksharma2911/" target="_blank" rel="noreferrer noopener">
                      <FaLinkedinIn />
                    </a>
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-300 hover:text-red-500 duration-300 text-3xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;