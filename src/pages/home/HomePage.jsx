import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './partials/HomePage.css';
import Carousel from "./partials/Carousel";
import ContactSection from "./partials/contactSection";
import Footer from "./partials/Footer";
import ProjectsSection from "./partials/ProjectsSection";

const AboutAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const container = {
        display: "flex",
        flexDirection: "column",
        width: 380,
        minHeight: 240,
        position: "relative",
        margin: "60px auto",
        alignItems: 'center',
        justifyContent: 'center',
    };
    const button = {
        background: "black",
        borderRadius: "50px",
        padding: "16px 40px",
        color: "#fff",
        position: "relative",
        margin: '16px auto 0 auto',
        border: "2px solid #fff",
        cursor: "pointer",
        fontWeight: "700",
        fontSize: "16px",
        letterSpacing: 0.5,
        boxShadow: "0 8px 25px rgba(0,0,0,0.18)",
        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
        zIndex: 22,
        outline: 'none',
        display: 'block',
        textShadow: '0 1px 8px #222a',
    };
    const overlay = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.6)",
        zIndex: 20,
        backdropFilter: 'blur(8px)',
        pointerEvents: isVisible ? "auto" : "none"
    };
    const aboutContainer = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
        marginTop: 30,
        zIndex: 30,
        position: 'relative',
        minHeight: 300,
        minWidth: 0,
        maxWidth: 900,
        width: '90vw',
        padding: 24,
        background: 'rgba(30,30,30,0.98)',
        borderRadius: 32,
        boxShadow: '0 8px 40px 0 #000a',
        border: '1.5px solid #333',
        flexWrap: 'wrap',
    };
    const photoWrapper = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #23232b 0%, #444 100%)',
        padding: 4,
        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        position: 'relative',
        marginBottom: 18,
    };
    const aboutPhoto = {
        width: 110,
        height: 110,
        borderRadius: '50%',
        overflow: 'hidden',
        background: '#222',
        boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
        border: '2px solid #444',
        transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    const aboutContent = {
        minWidth: 0,
        maxWidth: 500,
        color: '#fff',
        background: 'transparent',
        borderRadius: 24,
        padding: 24,
        boxShadow: 'none',
        border: 'none',
        textAlign: 'left',
    };
    const cvBtn = {
        display: 'inline-block',
        marginTop: 24,
        padding: '14px 32px',
        background: '#fff',
        color: '#111',
        borderRadius: 50,
        fontWeight: 700,
        textDecoration: 'none',
        fontSize: 16,
        boxShadow: '0 8px 25px rgba(0,0,0,0.18)',
        border: '2px solid #fff',
        transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
        letterSpacing: 0.5,
    };
    // Ajout d'un style responsive
    const responsiveStyle = `
    @media (max-width: 700px) {
        .about-modal-container {
            flex-direction: column !important;
            gap: 18px !important;
            padding: 12px !important;
        }
        .about-modal-content {
            padding: 10px !important;
            max-width: 98vw !important;
        }
        .about-modal-photo {
            width: 80px !important;
            height: 80px !important;
        }
    }
    `;
    return (
        <div style={container}>
            <style>{responsiveStyle}</style>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        key="overlay"
                        style={overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                )}
            </AnimatePresence>
            <AnimatePresence initial={false}>
                {!isVisible && (
                    <motion.button
                        key="show"
                        style={button}
                        onClick={() => setIsVisible(true)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        whileTap={{ y: 2, scale: 0.97 }}
                        whileHover={{
                            background: "#fff",
                            color: "#fff",
                            boxShadow: "0 12px 35px rgba(0,0,0,0.25)",
                            transform: "translateY(-2px)",
                            border: "2px solid #fff"
                        }}
                    >
                        À propos de moi
                    </motion.button>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        key="about-content"
                        style={{ ...aboutContainer, ...{ className: 'about-modal-container' } }}
                        initial={{ opacity: 0, y: 60, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 60, scale: 0.8 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    >
                        <motion.div style={{ ...aboutContent, ...{ className: 'about-modal-content' } }}
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 60 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 style={{ fontSize: 32, fontWeight: 800, marginBottom: 18, color: '#fff', letterSpacing: 1 }}>À propos de moi</h3>
                            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#eee', marginBottom: 0 }}>
                                Passionné par le développement web, je suis un développeur full stack junior avec une forte appétence pour les interfaces épurées, la logique métier et l'optimisation des process. J'aime apprendre, collaborer et relever de nouveaux défis techniques dans un environnement moderne et dynamique.
                            </p>
                            <motion.a
                                href="https://www.canva.com/design/DAGEFQ0cXMc/M51SYlZ6V-ZoMyXaxUoQPg/view"
                                style={cvBtn}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{
                                    scale: 1.05,
                                    background: "#fff",
                                    color: "#111",
                                    boxShadow: "0 12px 35px rgba(0,0,0,0.25)",
                                    transform: "translateY(-2px)",
                                    border: "2px solid #fff"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Télécharger mon CV
                            </motion.a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence initial={false}>
                {isVisible && (
                    <motion.button
                        style={{ ...button, marginTop: 30, background: '#fff', color: '#fff', border: '2px solid #fff' }}
                        onClick={() => setIsVisible(false)}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        whileTap={{ y: 2, scale: 0.97 }}
                        whileHover={{
                            background: "#fff",
                            color: "#fff",
                            boxShadow: "0 12px 35px rgba(0,0,0,0.25)",
                            transform: "translateY(-2px)",
                            border: "2px solid #fff"
                        }}
                    >
                        Fermer
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Compétences (skillsItems) ---
const skillsItems = [
    {
        title: "Frontend Development",
        description: "React, JavaScript, HTML5, CSS3, Sass",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                <rect x="5" y="7" width="6" height="3" rx="1" fill="currentColor" />
                <rect x="13" y="7" width="6" height="3" rx="1" fill="currentColor" />
                <rect x="5" y="12" width="14" height="2" rx="1" fill="currentColor" />
            </svg>
        ),
        id: 1,
    },
    {
        title: "Backend Development",
        description: "Node.js, PHP, Laravel, Bash",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2" />
                <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="2" />
                <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
        id: 2,
    },
    {
        title: "Outils & Versioning",
        description: "Git",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        id: 3,
    },
    {
        title: "Autres",
        description: "Divers outils et scripts",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
        id: 4,
    },
];

const HomePage = () => {
    return (
        <div style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>
            {/* Hero Section */}
            <section id="hero" style={{
                position: 'relative',
                minHeight: '70vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #e8eafc 0%, #b6b8d6 100%)',
                backgroundImage: 'url(https://i.pinimg.com/736x/40/7a/bd/407abdfc944960d269c2ae1ea049f105.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                {/* Overlay semi-transparent */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.45)',
                    zIndex: 1
                }} />
                <div style={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    color: '#fff'
                }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            fontSize: '3rem',
                            fontWeight: 700,
                            letterSpacing: '3px',
                            marginBottom: '18px'
                        }}
                    >
                        Zyad Fiach
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: 300,
                            letterSpacing: '2px',
                            marginBottom: '32px'
                        }}
                    >
                        Développeur Full Stack Junior
                    </motion.h2>
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'inline-block',
                            padding: '12px 32px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid #fff',
                            color: '#fff',
                            fontSize: '1.1rem',
                            borderRadius: '24px',
                            textDecoration: 'none',
                            backdropFilter: 'blur(2px)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Me contacter
                    </motion.a>
                </div>
            </section>
            {/* Skills Section */}
            <section id="skills" style={{
                background: '#fafafa',
                padding: '80px 20px'
            }}>
                <h3 style={{
                    textAlign: 'center',
                    fontSize: '2rem',
                    fontWeight: 500,
                    letterSpacing: '2px',
                    marginBottom: '60px',
                    color: '#111'
                }}>
                    Compétences
                </h3>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Carousel
                        items={skillsItems}
                        baseWidth={350}
                        autoplay={true}
                        autoplayDelay={4000}
                    />
                </div>
            </section>
            {/* About Section */}
            <section id="about">
                <AboutAnimation />
            </section>
            {/* Projects Section */}
            <section id="projects" style={{
                padding: '80px 20px',
                background: '#fff',
                textAlign: 'center'
            }}>
                <ProjectsSection />
            </section>
            {/* Contact Section */}
            <section id="contact">
                <ContactSection />
            </section>
            <Footer />
        </div>
    );
};

export default HomePage;
