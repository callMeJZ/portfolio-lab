import React from "react";
import "../styles/About.css";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="about">
      <img src={profile} alt="Profile" className="profile-img" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hi, I'm Jessa Coronado, a passionate web developer focused on building
          interactive, accessible, and modern web experiences using React and
          Node.js.
        </p>
      </div>
    </section>
  );
}

export default About;
