import React, { useState } from 'react'
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
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Software Engineer " des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          <li
            onClick={() =>
              setExperienceData(true) &
              setEducationData(false) &
              setSkillData(false) &
              setCertificateData(false) &
              setAchievementData(false)
            }
            className={`${experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
              } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setExperienceData(false) &
              setEducationData(true) &
              setSkillData(false) &
              setCertificateData(false) &
              setAchievementData(false)
            }
            className={`${educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
              } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setExperienceData(false) &
              setEducationData(false) &
              setSkillData(true) &
              setCertificateData(false) &
              setAchievementData(false)
            }
            className={`${skillData ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}
          >
            Professional Skills
          </li>

          <li
            onClick={() =>
              setExperienceData(false) &
              setEducationData(false) &
              setSkillData(false) &
              setCertificateData(true) &
              setAchievementData(false)
            }
            className={`${certificateData
                ? "border-designColor rounded-lg"
                : "border-transparent"
              } resumeLi`}
          >
            Certificates
          </li>

          <li
            onClick={() =>
              setExperienceData(false) &
              setEducationData(false) &
              setSkillData(false) &
              setCertificateData(false) &
              setAchievementData(true)
            }
            className={`${achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
              } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {experienceData && <Experience />}
      {educationData && <Education />}
      {skillData && <Skills />}
      {certificateData && <Certificate />}
      {achievementData && <Achievement />}


    </section>
  );
}

export default Resume