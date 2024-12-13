import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">GYM LOGO</div>
      <nav className="nav-menu">
        <a href="#about">About</a>
        <a href="#daily-events">Daily Events</a>
        <a href="#workshops">Workshops</a>
        <a href="#know-us">Know Us</a>
        <a href="#store">Store</a>
        <a href="#contact-us">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
