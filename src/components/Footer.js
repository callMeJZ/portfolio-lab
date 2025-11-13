import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Jessa Coronado. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:jessa@example.com">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;