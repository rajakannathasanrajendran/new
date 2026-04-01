import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './home.css';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import heroBackground from '../../assets/hero-bg.jpg'; // Update this path when you add your background image
import plateImage from '../../assets/plate-img.png'; // Update this path when you add your plate image
// import leafImage from '../../assets/leaf.png'; // Update this path when you add your leaf image
import aboutTitlePattern from '../../assets/line-pattern.png'; // Re-used for section titles
import aboutMain from '../../assets/about-main.png';
import menuImage1 from '../../assets/m1.jpg'; // Update this path when you add your menu images
import menuImage2 from '../../assets/m2.jpg';
import menuImage3 from '../../assets/m3.jpg';
import menuTitlePattern from '../../assets/line-pattern.png'; // Re-using the line pattern for events title
// Event images
import eventImage1 from '../../assets/e1.webp';
import eventImage2 from '../../assets/e2.jpg';
// Service icons - update these paths when you add your icon images
import serviceIcon1 from '../../assets/icon1.png';
import serviceIcon2 from '../../assets/icon2.png';
import serviceIcon3 from '../../assets/icon3.png';
import serviceIcon4 from '../../assets/icon4.png';
// Gallery images - update these paths when you add your gallery images
import galleryImage1 from '../../assets/gallery1.jpg';
import galleryImage2 from '../../assets/gallery2.jpg';
import galleryImage3 from '../../assets/gallery3.jpg';
import galleryImage4 from '../../assets/gallery4.jpg';
import galleryImage5 from '../../assets/gallery5.jpg';
// import galleryImage6 from '../../assets/gallery6.png';

import footerBg from '../../assets/footer-bg.png';
import logo from '../../assets/esl.png';

// About section decorative patterns (v2)
import pattern1 from '../../assets/pattern1.png';
import pattern2 from '../../assets/pattern2.png';

// Biryani images
import biriyani1 from '../../assets/biriyani-1.jpg';
import biriyani2 from '../../assets/biriyani-2.jpg';
import biriyani3 from '../../assets/biriyani-3.png';


// about pattern images
import aboutPattern1 from '../../assets/pattern/about-1.png';
import aboutPattern2 from '../../assets/pattern/about-2.png';

// menu pattern images
import menuPattern1 from '../../assets/pattern/menu-1.png';

// services pattern images
import servicesPattern1 from '../../assets/pattern/service-1.png';
import servicesPattern2 from '../../assets/pattern/service-2.png';


const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  // Scroll to hash target when navigating from another page (e.g., /menu -> /#about)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleBackdropClick = (e) => {
    // Close modal when clicking outside the modal content
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="home-page">
      {/* Modal Popup */}
      {showModal && (
        <div className="modal-overlay" onClick={handleBackdropClick}>
          <div className="modal-content">
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="modal-body">
              <h2 className="modal-title">Hot Deal!</h2>
              <p className="modal-deal">Enjoy 2 Biriyanis for $20</p>
              <div className="modal-image-container">
                <img src={biriyani3} alt="Biryani Special Offer" className="modal-image" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Offers Button */}
      <button className="floating-offers-btn" onClick={openModal} aria-label="View Offers">
        <i className="fa-solid fa-gift"></i>
        <span className="offers-text">Offers</span>
      </button>

      <Header />
      <section id="home" className="hero-section">
        <div className="hero-background">
          <img src={heroBackground} alt="Indian food and spices" className="hero-bg-image" />
        </div>
        <div className="hero-content">
          <h1 className="hero-headline">
            Taste India's Soul,
            <br />
            Right Here in
            <br />
            America
          </h1>
          <div className="hero-buttons">
            <a href="https://eat-street-plano.maghil.com/restaurant/eat-street-plano/menu/Dinein" className="cta-button reserve-btn">View Menu</a>
            <a href="https://eat-street-plano.maghil.com/restaurant/eat-street-plano/menu/Dinein" className="cta-button order-btn">Online Order</a>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-header">
            <div className="about-logo">

            </div>
            {/* <p className="about-subheading">WELCOME TO EAT STREET</p> */}
            <div className="about-heading-wrapper">

              {/* <h2 className="about-heading">About Us</h2> */}

            </div>
          </div>

          <div className="about-content-wrapper">
            <div className="about-images-container">
              <div className="about-img-wrapper">

                <img src={biriyani1} alt="Chicken Biryani" className="about-img" />
              </div>

              <div className="about-img-wrapper">

                <img src={biriyani2} alt="Chicken Biryani" className="about-img" />
              </div>
            </div>

            <div className="about-desc">
              <p>
                We started Eat Street with one goal: to bring genuine Indian cuisine to the U.S. without losing its original charm. Our chefs come from different parts of India, each bringing their own regional expertise—so you'll find a rich variety of dishes inspired by the streets, homes, and festivals of India.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="menu-section">

        <div className="menu-pattern-img">
          <img src={aboutPattern2} alt="" className="menu-pattern-img-1" />
        </div>


        <div className="menu-container">
          <div className="menu-title-wrapper">
            <img src={aboutTitlePattern} alt="Title pattern" className="menu-title-pattern-top" />
            <h2 className="menu-title">Discover Our Menu</h2>
            <img src={aboutTitlePattern} alt="Title pattern" className="menu-title-pattern-bottom" />
          </div>



          <div className="menu-cards">
            <div className="menu-card">
              <div className="menu-card-image-wrapper">
                <img src={menuImage1} alt="Appetizers" className="menu-card-image" />
              </div>
              <div className="menu-card-content">
                <div className="menu-card-header">
                  <h3>Aloo Gobi</h3>
                  <span className="heart">♡</span>
                </div>
                <p>
                  Aloo Gobi is a classic Indian dish made with potatoes and cauliflower cooked in aromatic spices for a flavorful, comforting meal.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <div className="menu-card-image-wrapper">
                <img src={menuImage2} alt="Entrees" className="menu-card-image" />
              </div>
              <div className="menu-card-content">
                <div className="menu-card-header">
                  <h3>Butter Naan</h3>
                  <span className="heart">♡</span>
                </div>
                <p>
                  Butter Naan is a soft, fluffy Indian flatbread brushed with rich butter, perfect for pairing with curries and gravies..
                </p>
              </div>
            </div>

            <div className="menu-card">
              <div className="menu-card-image-wrapper">
                <img src={menuImage3} alt="Desserts" className="menu-card-image" />
              </div>
              <div className="menu-card-content">
                <div className="menu-card-header">
                  <h3>Veg Pakora</h3>
                  <span className="heart">♡</span>
                </div>
                <p>
                 Veg Pakora is a crispy Indian snack made by deep-frying mixed vegetables coated in a spiced gram flour batter.
                </p>
              </div>
            </div>
          </div>

          <a href="https://eat-street-plano.maghil.com/restaurant/eat-street-plano/menu/Dinein" className="menu-view-more-btn">view more</a>
        </div>

        {/* Decorative elements */}
        <div className="menu-decorative-bottom-right"></div>
      </section>

      <section className="events-section">

        <div className="events-pattern-img">
          <img src={menuPattern1} alt="" className="events-pattern-img-1" />
        </div>


        <div className="events-container">
          <div className="events-title-wrapper">
            <img src={menuTitlePattern} alt="Title pattern" className="events-title-pattern-top" />
            <h2 className="events-title">Events</h2>
            <img src={menuTitlePattern} alt="Title pattern" className="events-title-pattern-bottom" />
          </div>

          <div className="events-cards">
            <div className="event-card">
              <img src={eventImage1} alt="Event 1" className="event-card-image" />
            </div>
            <div className="event-card">
              <img src={eventImage2} alt="Event 2" className="event-card-image" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="services-container">

          <div className="services-pattern">
            <img src={servicesPattern1} alt="" className="services-pattern-img services-pattern-img-1" />
          </div>

          <div className="services-title-wrapper">
            <img src={aboutTitlePattern} alt="Title pattern" className="services-title-pattern-top" />
            <h2 className="services-title">Services</h2>
            <img src={aboutTitlePattern} alt="Title pattern" className="services-title-pattern-bottom" />
          </div>

          <div className="services-cards">
            <div className="service-card">
              <img src={serviceIcon1} alt="Free Wifi" className="service-icon" />
              <span className="service-text">Free Wifi</span>
            </div>
            <div className="service-card">
              <img src={serviceIcon2} alt="Parking" className="service-icon" />
              <span className="service-text">Parking</span>
            </div>
            <div className="service-card">
              <img src={serviceIcon3} alt="Live TV" className="service-icon" />
              <span className="service-text">Live TV</span>
            </div>
            <div className="service-card">
              <img src={serviceIcon4} alt="Party" className="service-icon" />
              <span className="service-text">Party</span>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">

        <div className="gallery-pattern-img">
          <img src={servicesPattern2} alt="" className="gallery-pattern-img-1" />
        </div>

        <div className="gallery-container">

          <div className="gallery-grid">
            <div className="gallery-left">
              <div className="gallery-item gallery-item-large">
                <img src={galleryImage1} alt="Gallery 1" className="gallery-image" />
              </div>
            </div>
            <div className="gallery-right">
              <div className="gallery-item">
                <img src={galleryImage2} alt="Gallery 2" className="gallery-image" />
              </div>
              <div className="gallery-item">
                <img src={galleryImage3} alt="Gallery 3" className="gallery-image" />
              </div>
              <div className="gallery-item">
                <img src={galleryImage4} alt="Gallery 4" className="gallery-image" />
              </div>
              <div className="gallery-item">
                <img src={galleryImage5} alt="Gallery 5" className="gallery-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">Contact Us</h2>

          <div className="contact-content">
            <div className="contact-item-wrapper">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-details">
                  <h3 className="contact-label">Address</h3>
                  <p className="contact-text">3948 Legacy Dr #112, Plano, TX 75023, USA</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=3948+Legacy+Dr+%23112,+Plano,+TX+75023,+United+States"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn directions-btn"
              >
                <i className="fa-solid fa-directions"></i>
                Get Directions
              </a>
            </div>

            <div className="contact-item-wrapper">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contact-details">
                  <h3 className="contact-label">Phone</h3>
                  <p className="contact-text">+1 214-501-3590</p>
                  <p className="contact-text"></p>
                </div>
              </div>
              <a href="tel:+12145013590" className="contact-btn call-btn">
                <i className="fa-solid fa-phone"></i>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="location-background">
          <img src={footerBg} alt="Location background" className="location-bg-image" />
        </div>
        <div className="location-container">
          <div className="location-title-section">
            <div className="location-logo">
              <img src={logo} alt="Eat Street Indian Kitchen Logo" className="location-logo-img" />
            </div>
            <div className="location-title-wrapper">
              <img src={aboutTitlePattern} alt="Title pattern" className="location-title-pattern-top" />
              <h2 className="location-title">Our Location</h2>
              <img src={aboutTitlePattern} alt="Title pattern" className="location-title-pattern-bottom" />
            </div>
          </div>

          <div className="location-map-wrapper">
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.647950619582!2d-96.77069589999999!3d33.0709486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c231632c605ff%3A0xd188888a59a16445!2sEAT%20STREET%20Indian%20Kitchen!5e1!3m2!1sen!2sin!4v1766741775728!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '20px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eat Street Indian Kitchen Location"
              ></iframe>
            </div>
          </div>

          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Home;

