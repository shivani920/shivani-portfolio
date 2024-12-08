import React from 'react';
import './About.css';
// Remove the next/image import
// import Image from 'next/image';
// Remove the direct import of the image
// import profilePic from '../../assets/passportpic.jpeg';

function About() {
  return (
    <section className="about">
      <h2 className="section-title">About Me</h2>
      <div className="content">
        <div className="image-container">
          <img 
            src={process.env.PUBLIC_URL + '/assets/passportpic.jpeg'} 
            alt="Shivani Patwari" 
            className="profile-image"
          />
        </div>
        <div className="text-content">
          <p>
            Highly motivated and professional Frontend Developer with 8 months of experience in developing responsive
            and user-friendly websites. Proficient in HTML, CSS, JavaScript, React.js, and Node.js. Experienced in working on
            live projects and collaborating with teams to create intuitive user interfaces.
          </p>
          <p>
            Strong problem-solving skills, with a commitment to continuous learning and professional growth.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

