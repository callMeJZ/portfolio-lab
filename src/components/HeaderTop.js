import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Jessa Coronado</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </header>
  );
}

export default Header;
