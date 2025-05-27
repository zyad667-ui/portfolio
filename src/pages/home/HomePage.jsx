import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './partials/HomePage.css'; // Corrected path to match your file structure

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
                {/* Bloc compétences ici */}
            </section>
            <section className="projects" id="projects">
                {/* Bloc projets ici */}
            </section>
            <section className="quote" id="quote">
                {/* Citation inspirante ici */}
            </section>
            <section className="about" id="about">
                {/* Bloc à propos ici */}
            </section>
            <section className="contact" id="contact">
                {/* Bloc contact/footer ici */}
            </section>
        </div>
    );
};

export default HomePage;