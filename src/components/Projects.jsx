import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Backend API",
      description: "A scalable RESTful API for an e-commerce platform built with Python and Django Rest Framework.",
      technologies: ["Python", "Django", "PostgreSQL", "Docker"],
      github: "https://github.com/Vairochan/ecommerce-api",
      live: null
    },
    {
      title: "Task Management App",
      description: "Android application for task management with cloud synchronization and offline capabilities.",
      technologies: ["Kotlin", "Android", "Room Database", "Firebase"],
      github: "https://github.com/Vairochan/task-manager",
      live: null
    },
    {
      title: "Weather Data Analyzer",
      description: "Data pipeline for processing and analyzing weather data from multiple sources.",
      technologies: ["Python", "Pandas", "Flask", "MongoDB"],
      github: "https://github.com/Vairochan/weather-analyzer",
      live: null
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
