// import React from 'react'

// const experience = () => {
//   return (
//     <div>
//         My experience
//     </div>
//   )
// }

// export default experience

import React from 'react';
import './experience.css';
import myskill_data from '../../assets/skill_data';

const Experience = () => {
  return (
    <div className='experience'>
        <div className="experience-title">
            <h1>My Experience</h1>
        </div>
        <div className="experience-container">
            {myskill_data.map((skill, index) => (
                <div key={skill.s_n} className="skill-category">
                    <h2>{skill.s_name}</h2>
                    <div className="programs-list">
                        {skill.programs.map((program, pIndex) => (
                            <div key={program.p_1_no} className="program-item">
                                <p>{program.p_1_name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Experience;