import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../Assessts/Header.css';

function CustomScrollLink({ to, smooth, duration, children }) {
  return (
    <ScrollLink to={to} smooth={smooth} duration={duration} className="custom-scroll-link">
      {children}
    </ScrollLink>
  );
}

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="custom-navbar-container">
      <div className="custom-navbar-header">
        <div className="custom-navbar-brand mahad-text">
          Mahad <span className="khan-text">Khan.</span>
        </div>
        <div className="custom-navbar-toggle" onClick={toggleMobileMenu}>
          <span className="custom-toggle-icon"></span>
          <span className="custom-toggle-icon"></span>
          <span className="custom-toggle-icon"></span>
        </div>
      </div>
      <div className={`custom-navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <CustomScrollLink to="home" smooth={true} duration={50} className="custom-nav-link">
          Home
        </CustomScrollLink>
        <CustomScrollLink to="aboutme" smooth={true} duration={50} className="custom-nav-link">
          About me
        </CustomScrollLink>
        <CustomScrollLink to="services" smooth={true} duration={50} className="custom-nav-link">
          Services
        </CustomScrollLink>
        <CustomScrollLink to="projects" smooth={true} duration={50} className="custom-nav-link">
          Projects
        </CustomScrollLink>
        <CustomScrollLink to="contact" smooth={true} duration={50} className="custom-nav-link">
          Contact us
        </CustomScrollLink>
      </div>
    </div>
  );
}

export default Header;
