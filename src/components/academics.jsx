import React from 'react';
import './academics.css';

const skillsData = [
  { name: "1. Master of Computer Aplication",
    marks: "CGPA: 8.89/10",
    university:"University: Biju Patnaik University of Technology, Bhubaneswar, Odisha (2022-24) "

  },
  { name: "2. Bachelor of Science ( Zoology Hons.) ",
    marks: "CGPA: 7.68/10",
    university: "University: Utkal University, Bhubaneswar, Odisha (2018-21) "
 },
  {  name: "3. +2 Science ( PCMB) ",
    marks: "Marks: 47.5",
    university: "Board: Council of Higher Secondary Education, Odisha (2016-18) " 
},
  {  name: "4. HSC ",
    marks: "Marks: 68",
    university: "Board: Board of Secondary Education , Odisha (2016) " 
} 
 
];
 


const Academics = () => {
  return (
    <div className="skills">
      <h2>Academic Details</h2>
      <div className="skills-container">
        {skillsData.map((academic, index) => (
          <div key={index} className="skill">
            <div className="skill-info">
              <span className="skill-name">{academic.name}</span>
              <span className="skill-level">{academic.marks}</span>
              <span className="skill-level">{academic.university}</span>
            </div>
            
             
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academics;