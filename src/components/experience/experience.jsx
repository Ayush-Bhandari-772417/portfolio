// import React from 'react';
// import './experience.css';
// import myskill_data from '../../assets/skill_data';

// const Experience = () => {
//   return (
//     <div id='experience' className='experience'>
//         <div className="experience-title">
//             <h1>My Experience</h1>
//         </div>
//         <div className="experience-container">
//             {myskill_data.map((skill, index) => (
//                 <div key={skill.s_n} className="skill-category">
//                     <h2>{skill.s_name}</h2>
//                     <div className="programs-list">
//                         {skill.programs.map((program, pIndex) => (
//                             <div key={program.p_1_no} className="program-item">
//                                 <p>{program.p_1_name}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
//   );
// }

// export default Experience;






import React, { useState } from 'react';
import './experience.css';
import myskill_data from '../../assets/skill_data';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'; // Arrow icons for toggling

const Experience = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const toggleSkill = (s_n) => {
    setExpandedSkill(expandedSkill === s_n ? null : s_n);
  };

  return (
    <div id='experience' className='experience'>
      <div className='experience-title'>
        <h1>My Experience</h1>
      </div>
      <div className='experience-container'>
        {myskill_data.map((skill) => (
          <div key={skill.s_n} className='skill-category'>
            <div className='skill-header' onClick={() => toggleSkill(skill.s_n)}>
              <span className='skill-icon'>{skill.s_icon}</span> {/* Render the icon directly */}
              <h2>{skill.s_name}</h2>
              {expandedSkill === skill.s_n ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {expandedSkill === skill.s_n && (
              <div className='programs-list'>
                {skill.programs.map((program) => (
                  <div key={program.p_1_no} className='program-item'>
                    <span className='program-icon'>{program.p_icon}</span> {/* Render the icon directly */}
                    <p>{program.p_1_name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;