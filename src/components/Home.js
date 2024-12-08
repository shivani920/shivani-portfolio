import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Responsive Design",
    "Git", "C/C++", "Java", "Problem Solving"
  ];

  const projects = [
    {
      title: "Bridge Point Logistic",
      description: "Improved user experience and functionality in a live project.",
      tech: ["React.js", "JavaScript", "CSS"]
    },
    {
      title: "ERP System",
      description: "Developed frontend for an Enterprise Resource Planning system.",
      tech: ["React.js", "Node.js", "HTML/CSS"]
    }
  ];

  return (
    <div className="home-container">
      <motion.section 
        className="hero"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <h1>Shivani Patwari</h1>
        <h2>Frontend Developer</h2>
        <p>Crafting beautiful and functional web experiences</p>
      </motion.section>

      <motion.section 
        className="about"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3>About Me</h3>
        <p>
          Highly motivated Frontend Developer with 8 months of experience in developing responsive
          and user-friendly websites. Proficient in modern web technologies and committed to
          continuous learning and growth.
        </p>
      </motion.section>

      <motion.section 
        className="skills"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3>Skills</h3>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.span 
              key={index} 
              className="skill-tag"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="projects"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3>Projects</h3>
        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="contact"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3>Get In Touch</h3>
        <p>Feel free to reach out for collaborations or just a friendly hello</p>
        <a href="mailto:shivanipatwari01@gmail.com" className="contact-button">Contact Me</a>
      </motion.section>
    </div>
  );
};

export default Home;

