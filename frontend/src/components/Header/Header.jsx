import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { gsap } from "gsap";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const isOpening = !prev;
      if (isOpening) {
        gsap.to(menuRef.current, {
          duration: 0.5,
          opacity: 1,
          height: "auto",
          ease: "power3.out",
        });
      } else {
        gsap.to(menuRef.current, {
          duration: 0.5,
          opacity: 0,
          height: 0,
          ease: "power3.in",
        });
      }
      return isOpening;
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    gsap.to(menuRef.current, {
      duration: 0.5,
      opacity: 0,
      height: 0,
      ease: "power3.in",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <a href="#">
        <h1 className={`logo ${isScrolled ? "scrolled" : ""}`}>Martial Arts</h1>
      </a>
      <nav className="nav-menu">
        <a href="#about">About</a>
        <a href="#daily-events">Daily Events</a>
        <a href="#workshops">Workshops</a>
        <a href="#know-us">Know Us</a>
        <a href="#store">Store</a>
        <a href="#contact-us">Contact Us</a>
      </nav>
      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="mobile-menu" ref={menuRef}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#daily-events" onClick={closeMenu}>
          Daily Events
        </a>
        <a href="#workshops" onClick={closeMenu}>
          Workshops
        </a>
        <a href="#know-us" onClick={closeMenu}>
          Know Us
        </a>
        <a href="#store" onClick={closeMenu}>
          Store
        </a>
        <a href="#contact-us" onClick={closeMenu}>
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;
