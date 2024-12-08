import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Bridge Point Logistic",
      description: "Contributed to the development of a live project aimed at improving user experience and overall functionality.",
      technologies: ["React.js", "JavaScript", "CSS"]
    },
    {
      title: "Enterprise Resource Planning (ERP) System",
      description: "Played a key role in the development of an ERP system from scratch, focusing on frontend design and implementation.",
      technologies: ["React.js", "Node.js", "HTML/CSS"]
    }
  ];

  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="technology-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

