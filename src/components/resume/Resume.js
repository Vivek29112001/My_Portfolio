import React, { useState } from 'react';
import Title from '../layouts/Title';
import Experience from './experience';
import Education from './Education';
import Skills from './Skills';
import Certificate from './Certificates';
import Achievement from './Achievement';

const Resume = () => {
  const [experienceData, setExperienceData] = useState(true);
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(false);
  const [certificateData, setCertificateData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  const handleTabClick = (section) => {
    setExperienceData(false);
    setEducationData(false);
    setSkillData(false);
    setCertificateData(false);
    setAchievementData(false);

    if (section === "experience") setExperienceData(true);
    if (section === "education") setEducationData(true);
    if (section === "skills") setSkillData(true);
    if (section === "certificate") setCertificateData(true);
    if (section === "achievement") setAchievementData(true);
  };

  const tabClass = (active) =>
    `cursor-pointer px-4 py-2 rounded-md border-b-2 transition-all duration-300 ${
      active
        ? 'border-designColor text-designColor font-semibold'
        : 'border-transparent text-gray-400 hover:text-designColor'
    }`;

  return (
    <section id="resume" className="w-full py-20 border-b border-gray-800 bg-gradient-to-b from-gray-900 to-black">
      <div className="flex flex-col items-center justify-center mb-12 px-4">
        <Title title="Software Engineer" des="My Resume" />
      </div>
      <div className="w-full max-w-5xl mx-auto px-4">
        {/* Wrap tabs in an overflow container for smaller screens */}
        <div className="overflow-x-auto">
          <ul className="flex justify-center items-center space-x-4 border-b border-gray-700 mb-8 whitespace-nowrap">
            <li onClick={() => handleTabClick("experience")} className={tabClass(experienceData)}>
              Experience
            </li>
            <li onClick={() => handleTabClick("education")} className={tabClass(educationData)}>
              Education
            </li>
            <li onClick={() => handleTabClick("skills")} className={tabClass(skillData)}>
              Professional Skills
            </li>
            <li onClick={() => handleTabClick("certificate")} className={tabClass(certificateData)}>
              Certificates
            </li>
            <li onClick={() => handleTabClick("achievement")} className={tabClass(achievementData)}>
              Achievements
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-5xl mx-auto px-4">
        {experienceData && <Experience />}
        {educationData && <Education />}
        {skillData && <Skills />}
        {certificateData && <Certificate />}
        {achievementData && <Achievement />}
      </div>
    </section>
  );
};

export default Resume;