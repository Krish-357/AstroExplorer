import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-title">AstroExplorer</div> 
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/missions" className="nav-link">Missions</Link>
            <Link to="/planet/mars" className="nav-link">Planets</Link>
        </nav>
    );
};

export default Navigation;
