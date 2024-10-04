import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import './SocialMediaIcons.css';
import './App.css';

const SocialMediaIcons = () => {
    return (
        <div className="social-icons">
            <a href="https://github.com/210101120037" ><FaGithub /></a>
            <a href="https://linkedin.com"><FaLinkedin /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
        </div>
    );
};

export default SocialMediaIcons;
