import React, { useState } from "react";
import "./project.css";
import projectData from "../../assets/project_data";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>My Projects</h1>
      </div>
      <div className="projects-container">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2>{project.title}</h2>
              <h3>{project.organization}</h3>
              <p className="project-date">{project.date}</p>
              <p className="project-abstract">
                {expandedProject === project.id
                  ? project.fullDescription
                  : `${project.abstract.slice(0, 100)}...`}
              </p>
              <button
                className="read-more-btn"
                onClick={() => toggleReadMore(project.id)}
              >
                {expandedProject === project.id ? "Read Less" : "Read More"}
              </button>
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                >
                  View Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;