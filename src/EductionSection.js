import React from 'react';
import './App.css';

const EducationSection = () => {
    return (
        <section id="education" className="education-section">
            <h2>Education</h2>
            <div className="education-timeline">
                <div className="education-item">
                    <h3>10th Grade</h3>
                    <p>Boys High School Mahnar Bazar, BSEB</p>
                    <p>Year of Passing: 2019</p>
                    <p>Percentage: 60%</p>
                </div>
                <div className="education-item">
                    <h3>12th Grade</h3>
                    <p>Secondary Boys High School Mahnar(Vashali), BSEB</p>
                    <p>Year of Passing: 2021</p>
                    <p>Percentage: 57%</p>
                </div>
                <div className="education-item">
                    <h3>Graduation</h3>
                    <a href="https://cutm.ac.in/campuses/paralakhemundi/" target='_blank'>CUTM paralakhemundi Campus</a>
                    <p>Bachelor of Technology in Computer Science</p>
                    <p>Year of Passing: 2025</p>
                    <p>CGPA: 8.5</p>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
