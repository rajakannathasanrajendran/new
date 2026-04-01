import React from 'react';
import './footer.css';
import logo from '../../assets/eat-logo.png';
import maghilLogo from '../../assets/maghil.png';
// import footerBg from '../../assets/footer-bg.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background">
        {/* <img src={footerBg} alt="Footer background" className="footer-bg-image" /> */}
      </div>
      <div className="footer-container">
        <div className="footer-content">
          {/* Left Side - Quick Link */}
          <div className="footer-section footer-quick-links">
            <h3 className="footer-section-title">Quick Link</h3>
            <nav className="footer-nav">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About Us</a>
              <a href="https://eat-street-plano.maghil.com/restaurant/eat-street-plano/menu/Dinein" className="footer-link">Menu</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="https://eatstreetindian.com/blog/" className="footer-link">Blog</a>
              <a href="#contact" className="footer-link">Contact Us</a>
            </nav>
          </div>

          {/* Center - Copyright */}
          <div className="footer-section footer-copyright">
            <p className="copyright-text">Eat Street Indian Kitchen</p>
          </div>

          {/* Right Side - Let's Stay In Touch */}
          <div className="footer-section footer-social">
            <h3 className="footer-section-title">Lets Stay In Touch</h3>
            <a href="https://eat-street-plano.maghil.com/restaurant/eat-street-plano/menu/Dinein" className="footer-order-btn">Order Online</a>
            <div className="social-icons">
              <a href="https://www.instagram.com/p/DQ2U5wPASWJ/?igsh=MW8yaGFueG84d3ZxdQ==" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-bottom-text">© Eat Street {new Date().getFullYear()}. All rights reserved.</p>
            <p className="footer-bottom-powered">
              Powered by <a href="https://www.maghil.com" target="_blank" rel="noopener noreferrer">
                <img src={maghilLogo} alt="Maghil" className="maghil-logo" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
