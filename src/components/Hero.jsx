import React from 'react';
import profileImage from '../assets/profile.png';
import resume from '../assets/resume.pdf';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const Hero = () => {
  useRevealOnScroll();
  
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Vairochan Sah</h1>
          <h2>Software Engineer</h2>
          <p>Specialized in Backend and Android Development</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href={resume} className="btn btn-secondary" target="_blank" rel="noopener noreferrer" download="resume.pdf">Download CV</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/Vairochan" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/vairochan" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://stackoverflow.com/users/13360937/vairochan-sah" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-stack-overflow"></i>
            </a>  
          </div>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Vairochan Sah" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
