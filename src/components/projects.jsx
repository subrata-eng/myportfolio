import React from 'react';
import './projects.css';

const projectData = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and CSS for showcasing projects and skills.",
    demoLink: "https://example.com",
    codeLink: "https://github.com/yourusername/portfolio"
  },
  {
    title: "TO-DO App",
    description: "A To-Do application using React and CSS.",
    demoLink: "https://subrata-eng.github.io/todolis/",
    codeLink: "https://github.com/subrata-eng/todolis"
  },
  {
    title: "Employee Management System",
    description: "A Employee Management app built with SpringBoot,Java & SQL.",
    demoLink: "https://example.com",
    codeLink: "https://github.com/yourusername/weatherapp"
  },
];

const Projects = (project) => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;