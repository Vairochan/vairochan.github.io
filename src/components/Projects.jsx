import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "FoodieGo - Food Delivery App",
      description: "A Flutter-based food delivery app with Firebase integration, supporting user login, product listing, cart management, and order tracking.",
      technologies: ["Flutter", "Firebase", "Provider", "Firestore"],
      github: "https://github.com/Vairochan/flutter-food-delivery",
      live: null
    },
    {
      title: "Book Store API",
      description: "A backend API for an online bookstore built with Django and MongoDB. Features include user authentication, catalog management, and order processing. CI/CD handled via Jenkins pipelines.",
      technologies: ["Python", "Django", "MongoDB", "Docker", "Jenkins"],
      github: "https://github.com/Vairochan/bookstore-api",
      live: null
    },
    {
      title: "Viscus - Instagram Clone",
      description: "A full-stack clone of Instagram with features like posting, commenting, following, and real-time updates.",
      technologies: ["Flutter", "Firebase Auth", "Firestore", "Cloud Storage"],
      github: "https://github.com/Vairochan/viscus",
      live: null
    },
    {
      title: "GenAI Chat Assistant",
      description: "A private GenAI-powered assistant using Ollama to run open-source LLMs like LLaMA and GEMMA locally. Integrated with LlamaIndex for RAG and built with Streamlit for a responsive UI.",
      technologies: ["Python", "Ollama", "LLaMA", "GEMMA", "LlamaIndex", "LangChain", "Streamlit"],
      github: "https://github.com/Vairochan/genai-chat-assistant",
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
