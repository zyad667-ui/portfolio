import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './partials/HomePage.css';

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
                <div className="skills-grid">
                    <div className="skill-block">
                        <div className="skill-icon">{/* Frontend */}
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="8" width="28" height="20" rx="3" stroke="#111" strokeWidth="2" /><rect x="8" y="12" width="8" height="4" rx="1" fill="#111" /><rect x="20" y="12" width="8" height="4" rx="1" fill="#111" /></svg>
                        </div>
                        <h4>Frontend</h4>
                        <p>JS, HTML, React, CSS, Sass, Git, Tailwind, Bootstrap.</p>
                    </div>
                    <div className="skill-block">
                        <div className="skill-icon">{/* Backend */}
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="18" cy="10" rx="12" ry="4" stroke="#111" strokeWidth="2" /><ellipse cx="18" cy="18" rx="12" ry="4" stroke="#111" strokeWidth="2" /><ellipse cx="18" cy="26" rx="12" ry="4" stroke="#111" strokeWidth="2" /></svg>
                        </div>
                        <h4>Backend</h4>
                        <p>Node.js, Express, API REST, logique serveur moderne.</p>
                    </div>
                    <div className="skill-block">
                        <div className="skill-icon">{/* Deploy */}
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 28V8M18 8L12 14M18 8L24 14" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><rect x="6" y="28" width="24" height="4" rx="2" fill="#111" /></svg>
                        </div>
                        <h4>Déploiement</h4>
                        <p>Vercel, Netlify, Docker, CI/CD pour la mise en ligne rapide.</p>
                    </div>
                </div>
            </section>
            <section className="projects" id="projects">
                {/* Bloc projets ici */}
            </section>
            <section className="quote" id="quote">
                {/* Citation inspirante ici */}
            </section>
            <section className="about" id="about">
                <div className="about-container">
                    <div className="about-photo">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Portrait Zyad Fiach" />
                    </div>
                    <div className="about-content">
                        <h3>À propos de moi</h3>
                        <p>
                            Passionné par le développement web, je suis un développeur full stack junior avec une forte appétence pour les interfaces épurées, la logique métier et l'optimisation des process. J'aime apprendre, collaborer et relever de nouveaux défis techniques.
                        </p>
                        <a href="/cv-zyad-fiach.pdf" className="cv-btn" download>Télécharger mon CV</a>
                    </div>
                </div>
            </section>
            <section className="contact" id="contact">
                {/* Bloc contact/footer ici */}
            </section>
        </div>
    );
};

export default HomePage;
