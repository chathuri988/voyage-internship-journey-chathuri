import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import "../styles/LandingPage.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">👩‍💻 Hello, World!</div>
      <ul className="nav-links">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact" className="contact-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;