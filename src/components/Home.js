import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Jessa Coronado</h1>
        <h2>Computer Science Student | Aspiring Web Developer & Data Scientist</h2>
        <p>
        Hi, I'm Jez, a passionate student currently pursuing Computer Science.
        I'm exploring the world of web development and data science, where I focus on building projects step by step to sharpen my skills.
        </p>
        <a href="/about" className="cta-button">
          Learn More About Me
        </a>
      </div>
    </section>
  );
}

export default Home;