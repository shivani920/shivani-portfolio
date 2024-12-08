import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Bootstrap",
    "Responsive Design", "Git", "C/C++", "Java"
  ];

  return (
    <section className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

