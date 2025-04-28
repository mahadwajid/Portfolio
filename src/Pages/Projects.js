import React from 'react';
import '../Assessts/Projects.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    const projects = [
        {
            title: "E-Commerce Website",
            description: "A full-stack e-commerce platform built with MERN stack. Features include user authentication, product management, shopping cart, and payment integration.",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
            githubLink: "https://github.com/yourusername/ecommerce",
            liveLink: "https://your-ecommerce-site.com",
            image: "https://via.placeholder.com/300x200" // Replace with your project image
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
            technologies: ["React", "Firebase", "Material-UI", "Redux"],
            githubLink: "https://github.com/yourusername/task-manager",
            liveLink: "https://your-task-manager.com",
            image: "https://via.placeholder.com/300x200" // Replace with your project image
        },
        {
            title: "Portfolio Website",
            description: "A responsive portfolio website showcasing my work and skills. Built with React and modern CSS.",
            technologies: ["React", "CSS3", "JavaScript", "AOS"],
            githubLink: "https://github.com/yourusername/portfolio",
            liveLink: "https://your-portfolio.com",
            image: "https://via.placeholder.com/300x200" // Replace with your project image
        }
    ];

    return (
        <section className="projects-container" id="projects">
            <div className="header-row" data-aos="fade-right">
                <hr className="hr-style" />
                <h1>My Projects</h1>
            </div>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index} data-aos="fade-up">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="technologies">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                                    <FaGithub /> Code
                                </a>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects; 