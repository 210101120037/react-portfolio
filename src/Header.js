import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import logoimg from './img/logoimg.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <a href="#home"><img src={logoimg} alt="Logo" /></a>
                </div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`} ref={menuRef}>
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
