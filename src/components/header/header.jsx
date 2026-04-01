import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../../assets/esl.png'; // Update this path when you add your logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();
  const isMenuPage = location.pathname === '/menu';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuPage) {
      setActiveLink('menu');
      return;
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuPage]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Eat Street Indian Kitchen Logo" className="logo-img" />
          <div className="logo-text">

          </div>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {isMenuPage ? (
            <Link
              to="/"
              className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          ) : (
            <a
              href="#home"
              className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </a>
          )}
          {isMenuPage ? (
            <Link
              to="/#about"
              className="nav-link"
              onClick={closeMenu}
            >
              About Us
            </Link>
          ) : (
            <a
              href="#about"
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About Us
            </a>
          )}
          {isMenuPage ? (
            <span className={`nav-link ${activeLink === 'menu' ? 'active' : ''}`}>
              Menu
            </span>
          ) : (
            <Link
              to="/menu"
              className="nav-link"
              onClick={closeMenu}
            >
              Menu
            </Link>
          )}
          {isMenuPage ? (
            <Link
              to="/#services"
              className="nav-link"
              onClick={closeMenu}
            >
              Services
            </Link>
          ) : (
            <a
              href="#services"
              className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Services
            </a>
          )}
          <a
            href="https://eatstreetindian.com/blog/"
            className="nav-link"
            onClick={closeMenu}
          >
            Blog
          </a>
          {isMenuPage ? (
            <Link
              to="/#contact"
              className="nav-link"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          ) : (
            <a
              href="#contact"
              className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact Us
            </a>
          )}
          <a
            href="https://eat-street-plano.maghil.com/restaurant/eat-street-plano/menu/Dinein"
            className="order-btn-mobile"
            onClick={closeMenu}
          >
            Order Online
          </a>
        </nav>

        <a
          href="https://eat-street-plano.maghil.com/restaurant/eat-street-plano/menu/Dinein"
          className="order-btn"
        >
          Order Online
        </a>

        {/* Mobile menu toggle button */}
        <button
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
