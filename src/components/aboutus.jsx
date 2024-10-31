import React from 'react';
import './about.css';


import profilePhoto from './image/subrata.img.jpeg'; // Adjust path if needed


const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img 
          src={profilePhoto}
          alt="Subrata Mohapatra" 
          className="profile-photo"
        />
        <div className="about-text">
          <p>
            Hello! I'm Subrata Mohapatra, a passionate and aspiring software developer eager to turn ideas into impactful digital experiences. Currently expanding my skills in web and software development, I’m focused on mastering languages like HTML, CSS, JavaScript, Java, and exploring frameworks such as React.js and SpringBoot.
          </p>
          <p>
            With a strong foundation in problem-solving and a love for learning, I enjoy tackling challenges and continuously growing my expertise. I am particularly interested in building responsive, user-friendly applications that make a difference. Through hands-on projects and collaboration, I aim to create solutions that are both functional and innovative.
          </p>
          <p>
            When I'm not coding, you’ll find me exploring tech communities, staying updated with the latest trends, and brainstorming my next project. I’m excited to connect, collaborate, and contribute to projects that make a positive impact.
          </p>
          <p>
            Let's build something great together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
