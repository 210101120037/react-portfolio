import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';
import './App.css';

const Footer = () => {
    return (
        <footer>
            <div className="social-icons">
                <a href="https://github.com/210101120037" target='_blank' ><FaGithubSquare /></a>
                <a href="https://www.facebook.com/rohit.poddar.1088" target='_blank' ><FaFacebookSquare /></a>
                <a href="https://linkedin.com/in/rohit-poddar-a057a2282/" target='_blank'><FaLinkedin /></a>
                <a href="https://www.instagram.com/rohiitt037/" target='_blank'><FaInstagram /></a>
                <a href="https://www.youtube.com/@TheCrazyCoder-nb3du" target='_blank'><FaYoutubeSquare /></a>
            </div>
            <p>Copyright &copy; Rohit.Portfolio. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
