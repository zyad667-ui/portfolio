import React from "react";

const footerStyle = {
    width: "100%",
    minHeight: "80px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif",
    fontSize: 18,
    textAlign: "center",
    padding: "32px 16px 24px 16px",
    boxSizing: "border-box",
    letterSpacing: 0.5,
    borderTop: "1px solid #333",
    background: "#181820"
};

const Footer = () => (
    <footer style={footerStyle}>
        © {new Date().getFullYear()} Zyad Fiach — Portfolio. Tous droits réservés.
    </footer>
);

export default Footer; 