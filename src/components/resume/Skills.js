import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Programming Languages */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Languages</p>
          <h2 className="text-3xl md:text-4xl font-bold">Programming Languages</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
          <div className="overflow-hidden">
            <p className="text-sm uppercase font-medium text-gray-300">JavaScript</p>
            <span className="w-full h-2 bg-gray-700 bg-opacity-30 rounded-md inline-flex mt-2 relative">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-500 via-pink-400 to-red-500 rounded-md"
              >
                <span className="absolute -top-7 right-0 text-white text-sm">75%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm uppercase font-medium text-gray-300">Python</p>
            <span className="w-full h-2 bg-gray-700 bg-opacity-30 rounded-md inline-flex mt-2 relative">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-500 via-pink-400 to-red-500 rounded-md"
              >
                <span className="absolute -top-7 right-0 text-white text-sm">70%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm uppercase font-medium text-gray-300">C++</p>
            <span className="w-full h-2 bg-gray-700 bg-opacity-30 rounded-md inline-flex mt-2 relative">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[60%] h-full bg-gradient-to-r from-blue-500 via-pink-400 to-red-500 rounded-md"
              >
                <span className="absolute -top-7 right-0 text-white text-sm">60%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>

      {/* Core Technologies */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Technologies</p>
          <h2 className="text-3xl md:text-4xl font-bold">Core Technologies</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden">
            <p className="text-sm uppercase font-medium text-gray-300">React</p>
            <span className="w-full h-2 bg-gray-700 bg-opacity-30 rounded-md inline-flex mt-2 relative">
              <motion.span
                initial={{ x:"-100%", opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-500 via-pink-400 to-red-500 rounded-md"
              >
                <span className="absolute -top-7 right-0 text-white text-sm">70%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm uppercase font-medium text-gray-300">HTML5</p>
            <span className="w-full h-2 bg-gray-700 bg-opacity-30 rounded-md inline-flex mt-2 relative">
              <motion.span
                initial={{ x:"-100%", opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-500 via-pink-400 to-red-500 rounded-md"
              >
                <span className="absolute -top-7 right-0 text-white text-sm">95%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm uppercase font-medium text-gray-300">CSS3</p>
            <span className="w-full h-2 bg-gray-700 bg-opacity-30 rounded-md inline-flex mt-2 relative">
              <motion.span
                initial={{ x:"-100%", opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-500 via-pink-400 to-red-500 rounded-md"
              >
                <span className="absolute -top-7 right-0 text-white text-sm">80%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm uppercase font-medium text-gray-300">TypeScript</p>
            <span className="w-full h-2 bg-gray-700 bg-opacity-30 rounded-md inline-flex mt-2 relative">
              <motion.span
                initial={{ x:"-100%", opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[75%] h-full bg-gradient-to-r from-blue-500 via-pink-400 to-red-500 rounded-md"
              >
                <span className="absolute -top-7 right-0 text-white text-sm">60%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm uppercase font-medium text-gray-300">Node.js</p>
            <span className="w-full h-2 bg-gray-700 bg-opacity-30 rounded-md inline-flex mt-2 relative">
              <motion.span
                initial={{ x:"-100%", opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-500 via-pink-400 to-red-500 rounded-md"
              >
                <span className="absolute -top-7 right-0 text-white text-sm">50%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>

      {/* Database Section */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Database</p>
          <h2 className="text-3xl md:text-4xl font-bold">Database</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden">
            <p className="text-sm uppercase font-medium text-gray-300">MongoDB</p>
            <span className="w-full h-2 bg-gray-700 bg-opacity-30 rounded-md inline-flex mt-2 relative">
              <motion.span
                initial={{ x:"-100%", opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-500 via-pink-400 to-red-500 rounded-md"
              >
                <span className="absolute -top-7 right-0 text-white text-sm">70%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm uppercase font-medium text-gray-300">MySQL</p>
            <span className="w-full h-2 bg-gray-700 bg-opacity-30 rounded-md inline-flex mt-2 relative">
              <motion.span
                initial={{ x:"-100%", opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-500 via-pink-400 to-red-500 rounded-md"
              >
                <span className="absolute -top-7 right-0 text-white text-sm">45%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Tools</p>
          <h2 className="text-3xl md:text-4xl font-bold">Tools</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden">
            <p className="text-sm uppercase font-medium text-gray-300">VSCode</p>
            <span className="w-full h-2 bg-gray-700 bg-opacity-30 rounded-md inline-flex mt-2 relative">
              <motion.span
                initial={{ x:"-100%", opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-500 via-pink-400 to-red-500 rounded-md"
              >
                <span className="absolute -top-7 right-0 text-white text-sm">95%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm uppercase font-medium text-gray-300">Anaconda</p>
            <span className="w-full h-2 bg-gray-700 bg-opacity-30 rounded-md inline-flex mt-2 relative">
              <motion.span
                initial={{ x:"-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-500 via-pink-400 to-red-500 rounded-md"
              >
                <span className="absolute -top-7 right-0 text-white text-sm">75%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm uppercase font-medium text-gray-300">Postman</p>
            <span className="w-full h-2 bg-gray-700 bg-opacity-30 rounded-md inline-flex mt-2 relative">
              <motion.span
                initial={{ x:"-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-500 via-pink-400 to-red-500 rounded-md"
              >
                <span className="absolute -top-7 right-0 text-white text-sm">80%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;