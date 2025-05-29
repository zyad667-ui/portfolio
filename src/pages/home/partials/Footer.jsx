import React from "react";
import "./HomePage.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span>
        © {new Date().getFullYear()} Zyad Fiach — Portfolio. Tous droits réservés.
      </span>
    </div>
  </footer>
);

export default Footer; 