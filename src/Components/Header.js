import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../Assessts/Header.css';

function CustomScrollLink({ to, smooth, duration, children, onSetActive }) {
  return (
    <ScrollLink 
      to={to} 
      smooth={smooth} 
      duration={duration} 
      className="custom-scroll-link" 
      onSetActive={onSetActive}
      onClick={() => {
        // Close mobile menu when a link is clicked
        const mobileMenu = document.querySelector('.custom-navbar-links');
        if (mobileMenu && mobileMenu.classList.contains('open')) {
          document.querySelector('.custom-navbar-toggle').click();
        }
      }}
    >
      {children}
    </ScrollLink>
  );
}

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile menu when screen size changes to desktop
      if (window.innerWidth > 767 && isMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <div className={`custom-navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="custom-navbar-header">
        <div className="custom-navbar-brand mahad-text">
          <span className="brand-text">Mahad</span>
          <span className="khan-text">Khan.</span>
        </div>
        <div 
          className={`custom-navbar-toggle ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="custom-toggle-icon"></span>
          <span className="custom-toggle-icon"></span>
          <span className="custom-toggle-icon"></span>
        </div>
      </div>
      <div className={`custom-navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <CustomScrollLink 
          to="home" 
          smooth={true} 
          duration={500} 
          className={`custom-nav-link ${activeLink === 'home' ? 'active' : ''}`}
          onSetActive={() => handleSetActive('home')}
        >
          Home
        </CustomScrollLink>
        <CustomScrollLink 
          to="aboutme" 
          smooth={true} 
          duration={500} 
          className={`custom-nav-link ${activeLink === 'aboutme' ? 'active' : ''}`}
          onSetActive={() => handleSetActive('aboutme')}
        >
          About me
        </CustomScrollLink>
        <CustomScrollLink 
          to="services" 
          smooth={true} 
          duration={500} 
          className={`custom-nav-link ${activeLink === 'services' ? 'active' : ''}`}
          onSetActive={() => handleSetActive('services')}
        >
          Services
        </CustomScrollLink>
        <CustomScrollLink 
          to="projects" 
          smooth={true} 
          duration={500} 
          className={`custom-nav-link ${activeLink === 'projects' ? 'active' : ''}`}
          onSetActive={() => handleSetActive('projects')}
        >
          Projects
        </CustomScrollLink>
        <CustomScrollLink 
          to="contact" 
          smooth={true} 
          duration={500} 
          className={`custom-nav-link ${activeLink === 'contact' ? 'active' : ''}`}
          onSetActive={() => handleSetActive('contact')}
        >
          Contact us
        </CustomScrollLink>
      </div>
    </div>
  );
}

export default Header;
