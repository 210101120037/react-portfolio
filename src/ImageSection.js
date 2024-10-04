import React from 'react';
// import './ImageSection.css';
import './App.css';
import img2 from'../src/img/background.jpg';
const ImageSection = () => {
    return (
        <section className="image-section">
            <div className="image-container">
                <img src={img2} alt="Section Background" />
                <div className="text-overlay">
                    <h1>Welcome to My Portfolio</h1>
                    <p>Explore my projects and skills</p>
                </div>
            </div>
        </section>
    );
};

export default ImageSection;
