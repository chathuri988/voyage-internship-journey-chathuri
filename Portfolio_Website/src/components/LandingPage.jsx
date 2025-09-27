import React from "react";
import Navbar from "./Navbar";
import "../styles/LandingPage.css";
const LandingPage = () => {
  const myName = "Chathuri Madubashini";
  const myTitle = "Full Stack Developer | UI/UX Enthusiast";

  return (
    <div className="landing-page">
      <Navbar />

      <header className="hero-section">
        <div className="hero-content">
          <p className="greeting">👋 Hello, I'm</p>
          <h1 className="name">{myName}</h1>
          <h2 className="title">{myTitle}</h2>
          <p className="bio">
            I’m a passionate Full Stack Developer skilled in building scalable web applications from front-end interfaces to back-end systems. 
            I enjoy solving problems, learning new technologies, and turning ideas into impactful digital solutions.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="cta-primary">View My Work</a>
            <a href="#contact" className="cta-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image-container">
          {/* A placeholder for your profile image */}
          <div className="profile-image-placeholder">
            <span className="initials">AC</span>
          </div>
        </div>
      </header>

      {/* Placeholder for future sections like 'Projects' or 'Skills' */}
      <section id="projects" className="placeholder-section">
        <h3>Featured Projects</h3>
        <p>A sneak peek at my best work...</p>
      </section>

      <section id="contact" className="placeholder-section contact-section">
        <h3>Contact</h3>
        <p>Ready to collaborate? Reach out to me at:</p>
        <p className="email">alex.chen@example.com</p>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} {myName}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;