import React from 'react';
import './App.css';
import CV from './img/rohitResume.pdf';
import ProfileImage from './img/profile.png';
import { FaRegEnvelope, FaSquarePhoneFlip } from 'react-icons/fa6';

const ContactForm = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="book-container">
                <div className="page form-page">
                    <h2>Contact Me</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input placeholder="Full Name" type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input placeholder="Example@gmail.com" type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea placeholder="Write your message" id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
                <div id='about' className="page about-page">
                    <h2>About Me</h2>
                    <img src={ProfileImage} alt="Rohit Poddar" className="profile-image" />
                    <p>
                        Hi there, I'm Rohit Poddar. As a software engineer (Full Stack). I specialize in web and app design, front-end dev+, (UX), and creating identities and branding. I’ve worked with companies of all shapes and sizes, so contact me if you’d like to work together on your next project.
                    </p>
                    <p>
                        Feel free to contact me via the form, and I’ll respond promptly.
                    </p>
                    <div className="contact-details">
                        <p><FaRegEnvelope /><strong>Email:</strong> rohitpoddarraj321@gmail.com</p>
                        <p><FaSquarePhoneFlip /><strong>Phone:</strong> (+91) 9473274660</p>
                    </div>
                    <a href={CV} download="MyCV" target='_blank'>
                        <button className="submit-button">Download CV</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
