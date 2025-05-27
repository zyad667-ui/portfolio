import { useCallback, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { motion, AnimatePresence } from 'framer-motion';
import './partials/HomePage.css';
import Carousel from "./partials/Carousel";

const AboutAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const container = {
        display: "flex",
        flexDirection: "column",
        width: 340,
        minHeight: 220,
        position: "relative",
        margin: "0 auto",
        alignItems: 'center',
        justifyContent: 'center',
    };
    const button = {
        background: "#23232b",
        borderRadius: "16px",
        padding: "16px 36px",
        color: "#fff",
        position: "relative",
        margin: '12px auto 0 auto',
        border: "none",
        cursor: "pointer",
        fontWeight: "700",
        fontSize: "18px",
        letterSpacing: 1,
        boxShadow: "0 4px 24px 0 rgba(0,0,0,0.28)",
        transition: "all 0.22s cubic-bezier(.4,2,.6,1)",
        zIndex: 22,
        outline: 'none',
        display: 'block',
    };
    const overlay = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(10,10,20,0.82)",
        zIndex: 20,
        backdropFilter: 'blur(3px)',
        pointerEvents: isVisible ? "auto" : "none"
    };
    const aboutContainer = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 56,
        marginTop: 24,
        zIndex: 30,
        position: 'relative',
        minHeight: 260,
        minWidth: 700,
        maxWidth: 900,
        transition: 'min-width 0.3s, min-height 0.3s',
    };
    const photoWrapper = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 180,
        height: 180,
        borderRadius: '50%',
        background: '#23232b',
        padding: 3,
        boxShadow: '0 0 32px 0 #23232b44',
        position: 'relative',
    };
    const aboutPhoto = {
        width: 168,
        height: 168,
        borderRadius: '50%',
        overflow: 'hidden',
        background: '#18181c',
        boxShadow: '0 0 0 0 #0000, 0 8px 40px rgba(0,0,0,0.28)',
        border: '2.5px solid #23232b',
        transition: 'box-shadow 0.3s, transform 0.3s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    const aboutContent = {
        minWidth: 340,
        maxWidth: 600,
        color: '#f3f3f3',
        background: '#18181c',
        borderRadius: 24,
        padding: 48,
        boxShadow: '0 8px 32px rgba(0,0,0,0.22)',
        backdropFilter: 'blur(8px)',
        border: '1.5px solid #444',
    };
    const cvBtn = {
        display: 'inline-block',
        marginTop: 20,
        padding: '12px 28px',
        background: '#23232b',
        color: '#fff',
        borderRadius: 10,
        fontWeight: 700,
        textDecoration: 'none',
        fontSize: 16,
        boxShadow: '0 4px 18px rgba(0,0,0,0.18)',
        border: 'none',
        transition: 'all 0.18s cubic-bezier(.4,2,.6,1)',
    };
    const showButton = {
        ...button,
        margin: '0 auto 0 auto',
    };
    const hideButton = {
        ...button,
        margin: '0 auto 0 auto',
    };
    return (
        <div style={container}>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        key="overlay"
                        style={overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                    />
                )}
            </AnimatePresence>
            <AnimatePresence initial={false}>
                {!isVisible && (
                    <motion.button
                        key="show"
                        style={showButton}
                        onClick={() => setIsVisible(true)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        whileTap={{ y: 2, scale: 0.97 }}
                        whileHover={{
                            background: "#444",
                            boxShadow: "0 8px 32px 0 #4448",
                            letterSpacing: 2,
                        }}
                    >
                        Afficher
                    </motion.button>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        key="about-content"
                        style={aboutContainer}
                        initial={{ opacity: 0, y: 40, scale: 0.85, boxShadow: '0 0 0 0 #0000' }}
                        animate={{ opacity: 1, y: 0, scale: 1, boxShadow: '0 8px 32px 0 #0008' }}
                        exit={{ opacity: 0, y: 40, scale: 0.85, boxShadow: '0 0 0 0 #0000' }}
                        transition={{ type: 'spring', stiffness: 80, damping: 18 }}
                    >
                        <div style={photoWrapper}>
                            <motion.div
                                style={aboutPhoto}
                                whileHover={{
                                    boxShadow: '0 0 0 10px #ccc8, 0 16px 48px #4448',
                                    transform: 'translateY(-6px) scale(1.04)',
                                }}
                                transition={{ type: 'spring', stiffness: 180 }}
                            >
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="Portrait Zyad Fiach"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                                />
                            </motion.div>
                        </div>
                        <motion.div style={aboutContent}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 40 }}
                            transition={{ duration: 0.7, delay: 0.18 }}
                        >
                            <h3 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16, color: '#fff', letterSpacing: 1, marginTop: 12 }}>À propos de moi</h3>
                            <p style={{ fontSize: 19, lineHeight: 1.7, color: '#ccc', marginBottom: 0 }}>
                                Passionné par le développement web, je suis un développeur full stack junior avec une forte appétence pour les interfaces épurées, la logique métier et l'optimisation des process. J'aime apprendre, collaborer et relever de nouveaux défis techniques.
                            </p>
                            <motion.a
                                href="file:///C:/Users/lionsgeek/Downloads/cv%20zyad%20fiach.pdf"
                                style={cvBtn}
                                download
                                whileHover={{ scale: 1.08, boxShadow: "0 8px 32px #1a237e55" }}
                                whileTap={{ scale: 0.97 }}
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
                        key="hide"
                        style={hideButton}
                        onClick={() => setIsVisible(false)}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        whileTap={{ y: 2, scale: 0.97 }}
                        whileHover={{
                            background: "#444",
                            boxShadow: "0 8px 32px 0 #4448",
                            letterSpacing: 2,
                        }}
                    >
                        Masquer
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

// Données des compétences pour le carousel
const skillsItems = [
    {
        title: "Frontend",
        description: "JS, HTML, React, CSS, Sass, Git, Tailwind, Bootstrap.",
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="8" width="28" height="20" rx="3" stroke="#111" strokeWidth="2" />
                <rect x="8" y="12" width="8" height="4" rx="1" fill="#111" />
                <rect x="20" y="12" width="8" height="4" rx="1" fill="#111" />
            </svg>
        ),
        id: 1,
    },
    {
        title: "Backend",
        description: "Node.js, Express, API REST, logique serveur moderne.",
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="18" cy="10" rx="12" ry="4" stroke="#111" strokeWidth="2" />
                <ellipse cx="18" cy="18" rx="12" ry="4" stroke="#111" strokeWidth="2" />
                <ellipse cx="18" cy="26" rx="12" ry="4" stroke="#111" strokeWidth="2" />
            </svg>
        ),
        id: 2,
    },
    {
        title: "Déploiement",
        description: "Vercel, Netlify, Docker, CI/CD pour la mise en ligne rapide.",
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 28V8M18 8L12 14M18 8L24 14" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="6" y="28" width="24" height="4" rx="2" fill="#111" />
            </svg>
        ),
        id: 3,
    },
];

const HomePage = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className="portfolio-root">
            <section className="hero" id="hero">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                        background: { color: '#fff' },
                        fpsLimit: 60,
                        particles: {
                            color: { value: '#000' },
                            links: { enable: true, color: '#000', distance: 150 },
                            move: { enable: true, speed: 1 },
                            number: { value: 60 },
                            opacity: { value: 0.2 },
                            shape: { type: 'circle' },
                            size: { value: 2 },
                        },
                        detectRetina: true,
                    }}
                />
                <div className="hero-content">
                    <h1>Zyad Fiach</h1>
                    <h2>Développeur Full Stack Junior</h2>
                    <a href="#contact" className="hero-btn">Me contacter</a>
                </div>
            </section>

            <section className="skills" id="skills">
                <h3 className="skills-title">Compétences</h3>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Carousel
                        items={skillsItems}
                        baseWidth={350}
                        autoplay={true}
                        autoplayDelay={3000}
                        pauseOnHover={true}
                        loop={true}
                        round={false}
                    />
                </div>
            </section>

            <section className="projects" id="projects">
                {/* Bloc projets ici */}
            </section>

            <section className="quote" id="quote">
                {/* Citation inspirante ici */}
            </section>

            <AboutAnimation />

            <section className="contact" id="contact">
                {/* Bloc contact/footer ici */}
            </section>
        </div>
    );
};

export default HomePage;