import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Certificate from './Certificates';
import Achievement from './Achievement';


const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [certificateData, setCertificateData] = useState(false);
   const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Fresher " des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setCertificateData(false)&
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setCertificateData(false)&
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setCertificateData(true)&
              setAchievementData(false)
            }
            className={`${
              certificateData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Certificates
          </li>

          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setCertificateData(false)&
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {certificateData && <Certificate/>}
      {achievementData && <Achievement />}
 
 
    </section>
  );
}

export default Resume