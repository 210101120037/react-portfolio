import React from 'react';
import './App.css';

const ProjectSection = () => {
    return (
        <section id="projects" className="project-section">
            <h2>Projects</h2>
            <div className="projects-container">
                <div className="project-card">
                    <h3>Simple Landing Page</h3>
                    <p>
                        This project focuses on creating a responsive web application using HTML & CSS and js. It includes the basic structure and styling for a simple landing page.
                    </p>
                    <a href="https://github.com/210101120037/landing_page" target="_blank" rel="noopener noreferrer">
                        View Details
                    </a>
                </div>
                <div className="project-card">
                    <h3>Portfolio Page Website</h3>
                    <p>
                        This project involves creating a personal portfolio website using HTML and CSS. It showcases your skills, projects, and contact information in a clean and responsive design.
                    </p>
                    <a href="https://github.com/210101120037/PortfolioWebsite." target="_blank" rel="portfolio-website-link">
                        View Details
                    </a>
                </div>
                <div className="project-card">
                    <h3>Online Exam Website (Domain Project)</h3>
                    <p>
                        This project involves developing a responsive online exam website using React, React DOM, React Router DOM, and Bootstrap. It includes both frontend and backend functionalities to manage exams efficiently.
                    </p>
                    <a href="#!" target="_blank" rel="online website">
                        View Details
                    </a>
                </div>
                <div className="project-card">
                    <h3>Leave Management System Website </h3>
                    <p>
                        This project involves developing a responsive leave management website using React, React DOM, React Router DOM, and Bootstrap. It includes both frontend and backend functionalities to efficiently manage Student leave requests.
                    </p>
                    <a href="#!" target="_blank" rel="leave management">
                        View Details
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
