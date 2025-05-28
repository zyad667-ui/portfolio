import React from "react";

const ProjectsSection = () => (
    <section className="projects-section">
        <style>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #000000 0%, #2d2d2d 50%, #000000 100%);
            min-height: 100vh;
            padding: 2rem 0;
        }
        .projects-section {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        .section-header {
            text-align: center;
            margin-bottom: 4rem;
        }
        .section-title {
            font-size: 3rem;
            font-weight: 700;
            color: white;
            margin-bottom: 1rem;
            text-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        .section-subtitle {
            font-size: 1.2rem;
            color: rgba(255,255,255,0.9);
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
        }
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        .project-card {
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 8px 32px rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
        }
        .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transition: left 0.5s;
        }
        .project-card:hover::before {
            left: 100%;
        }
        .project-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(255,255,255,0.2);
        }
        .project-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #000000, #333333);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            transition: transform 0.3s ease;
        }
        .project-card:hover .project-icon {
            transform: rotate(10deg) scale(1.1);
        }
        .project-icon svg {
            width: 30px;
            height: 30px;
            fill: white;
        }
        .project-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 1rem;
        }
        .project-description {
            color: #718096;
            line-height: 1.6;
            margin-bottom: 1.5rem;
            font-size: 0.95rem;
        }
        .project-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
        }
        .tech-tag {
            background: linear-gradient(135deg, #000000, #333333);
            color: white;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }
        .project-links {
            display: flex;
            gap: 1rem;
        }
        .project-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.7rem 1.2rem;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            font-size: 0.9rem;
        }
        .link-primary {
            background: linear-gradient(135deg, #000000, #333333);
            color: white;
        }
        .link-secondary {
            background: transparent;
            color: #000000;
            border: 2px solid #000000;
        }
        .project-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .link-primary:hover {
            background: linear-gradient(135deg, #333333, #555555);
        }
        .link-secondary:hover {
            background: #000000;
            color: white;
        }
        @media (max-width: 768px) {
            .section-title {
                font-size: 2.5rem;
            }
            .projects-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            .project-card {
                padding: 1.5rem;
            }
        }
        `}</style>
        <div className="section-header">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">Explore my latest work and creative solutions that showcase modern web development, innovative design, and cutting-edge technology.</p>
        </div>
        <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
                <div className="project-icon">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                        <path d="M2 17L12 22L22 17" />
                        <path d="M2 12L12 17L22 12" />
                    </svg>
                </div>
                <h3 className="project-title">eBrand</h3>
                <p className="project-description">Modern React application built with Vite for fast development and optimal performance. Features cutting-edge UI components with smooth animations and responsive design.</p>
                <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Vite</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">ESLint</span>
                </div>
                <div className="project-links">
                    <a href="#" className="project-link link-primary">
                        <span>View Live</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 13V19C18 19.5523 17.5523 20 17 20H5C4.44772 20 4 19.5523 4 19V7C4 6.44772 4.44772 6 5 6H11M15 3H21V9M10 14L21 3" />
                        </svg>
                    </a>
                    <a href="https://github.com/zyad667-ui/ebrand" className="project-link link-secondary">GitHub</a>
                </div>
            </div>
            {/* Project 2 */}
            <div className="project-card">
                <div className="project-icon">
                    <svg viewBox="0 0 24 24">
                        <path d="M4 19.5C4 18.837 4.5 18.5 5.5 18.5H20" />
                        <path d="M6.5 2H20V22H6.5C5.5 22 4.5 21.5 4.5 20.5V3.5C4.5 2.5 5.5 2 6.5 2Z" />
                        <path d="M6.5 2C5.5 2 4.5 2.5 4.5 3.5V20.5C4.5 19.5 5.5 19 6.5 19H20" />
                    </svg>
                </div>
                <h3 className="project-title">Book Store</h3>
                <p className="project-description">Modern React-based bookstore application with clean UI design, book browsing functionality, and responsive layout. Built with Vite for optimal development experience and performance.</p>
                <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Vite</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">ESLint</span>
                </div>
                <div className="project-links">
                    <a href="#" className="project-link link-primary">
                        <span>View Live</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 13V19C18 19.5523 17.5523 20 17 20H5C4.44772 20 4 19.5523 4 19V7C4 6.44772 4.44772 6 5 6H11M15 3H21V9M10 14L21 3" />
                        </svg>
                    </a>
                    <a href="https://github.com/zyad667-ui/book-store" className="project-link link-secondary">GitHub</a>
                </div>
            </div>
            {/* Project 3 */}
            <div className="project-card">
                <div className="project-icon">
                    <svg viewBox="0 0 24 24">
                        <path d="M20 4L3 11L9 13L11 20L20 4Z" />
                        <path d="M7.5 15.5L10.5 12.5" />
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2" />
                        <circle cx="8" cy="21" r="2" />
                        <circle cx="20" cy="21" r="2" />
                        <path d="M2 17H22V19H2Z" />
                    </svg>
                </div>
                <h3 className="project-title">Movies Catalogue</h3>
                <p className="project-description">Interactive movie catalogue application with search functionality, movie details, and responsive design. Features modern UI components for browsing and discovering films.</p>
                <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Vite</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">API Integration</span>
                </div>
                <div className="project-links">
                    <a href="#" className="project-link link-primary">
                        <span>View Live</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 13V19C18 19.5523 17.5523 20 17 20H5C4.44772 20 4 19.5523 4 19V7C4 6.44772 4.44772 6 5 6H11M15 3H21V9M10 14L21 3" />
                        </svg>
                    </a>
                    <a href="https://github.com/zyad667-ui/movies-catalogue-" className="project-link link-secondary">GitHub</a>
                </div>
            </div>
            {/* Project 4 */}
            <div className="project-card">
                <div className="project-icon">
                    <svg viewBox="0 0 24 24">
                        <path d="M3 3H21V21H3V3Z" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M9 3V21" />
                        <path d="M15 3V21" />
                        <path d="M3 9H21" />
                        <path d="M3 15H21" />
                        <circle cx="6.5" cy="6.5" r="1.5" />
                        <path d="M12.5 12.5L17.5 17.5" />
                        <path d="M17.5 12.5L12.5 17.5" />
                    </svg>
                </div>
                <h3 className="project-title">Tic Tac Toe Game</h3>
                <p className="project-description">Interactive tic-tac-toe game built with vanilla JavaScript featuring turn-based gameplay, automatic winner detection, and responsive design with reset functionality.</p>
                <div className="project-tech">
                    <span className="tech-tag">HTML5</span>
                    <span className="tech-tag">CSS3</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">DOM Manipulation</span>
                </div>
                <div className="project-links">
                    <a href="#" className="project-link link-primary">
                        <span>View Live</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 13V19C18 19.5523 17.5523 20 17 20H5C4.44772 20 4 19.5523 4 19V7C4 6.44772 4.44772 6 5 6H11M15 3H21V9M10 14L21 3" />
                        </svg>
                    </a>
                    <a href="https://github.com/zyad667-ui/tic-tac-toe-" className="project-link link-secondary">GitHub</a>
                </div>
            </div>
        </div>
    </section>
);

export default ProjectsSection; 