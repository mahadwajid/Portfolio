import React from 'react';
import '../Assessts/Projects.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import POSlogo from '../Images/POSlogo.jpg';
import IDSLogo from '../Images/IDSLogo.png';
import Image5 from '../Images/Image5.jpg';

function Projects() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    const projects = [
        {
            title: "POS (Point of Sale Software)",
            description: "A robust Point of Sale software product for retail businesses, featuring inventory management, sales analytics, and multi-user support.",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
            githubLink: "https://github.com/mahadwajid/POS",
            liveLink: "https://pos-seven-pink.vercel.app/login",
            image: POSlogo
        },
        {
            title: "Intrusion Detection using Deep Learning",
            description: "A security system leveraging deep learning models to detect network intrusions and anomalies in real-time.",
            technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn"],
            githubLink: "https://github.com/mahadwajid/idsfypnew",
            liveLink: "https://github.com/mahadwajid/idsfypnew",
            image: IDSLogo
        },
        {
            title: "Diabetic Care Website (Using MERN Stack)",
            description: "A healthcare platform for diabetic patients, providing monitoring tools, educational resources, and appointment scheduling.",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            githubLink: "https://github.com/mahadwajid",
            liveLink: "https://www.diabetesandobesitycare.com/",
            image: Image5
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