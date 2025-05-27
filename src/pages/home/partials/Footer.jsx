import React from "react";
import Silk from "./silk/Silk"; // Assuming Silk is a component that renders the silk effect

const footerStyle = {
    position: "relative",
    width: "100%",
    minHeight: "220px",
    overflow: "hidden",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif",
    fontSize: 18,
    zIndex: 1,
};

const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 2,
    background: "rgba(20,20,30,0.45)", 
    pointerEvents: "none",
};

const contentStyle = {
    position: "relative",
    zIndex: 3,
    textAlign: "center",
    width: "100%",
};

const Footer = () => (
    <footer style={footerStyle}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Silk color="#7B7481" speed={5} scale={1} noiseIntensity={1.5} rotation={0} />
        </div>
        <div style={overlayStyle} />
        <div style={contentStyle}>
            © {new Date().getFullYear()} Zyad Fiach — Portfolio. Tous droits réservés.
        </div>
    </footer>
);

export default Footer; 