import React from 'react';
import './skill.css';

const skillsData = [
  { name: "1. Programming Languages: Java, JavaScript" },
  { name: "2. web Technologies: HTML, CSS" },
  { name: "3. Frameworks: SpringBoot, ReactJs" },
  { name: "4. Developer Tools: Visual studio, Eclipse" },
  { name: "5. Database Management: SQL, MongoDb" },
  { name: "6. Version Control: Git, GitHub" },
  { name: "7. Operating System: Windows" },
  { name: "8. Others: Problem Solving, API Development" },
];

const Skill = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}</span>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;