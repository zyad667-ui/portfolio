import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src="https://videos.openai.com/vg-assets/assets%2Ftask_01jw8j8v35ehpr6gq4z367fgdn%2F1748339349_img_0.webp?st=2025-05-27T08%3A04%3A31Z&se=2025-06-02T09%3A04%3A31Z&sks=b&skt=2025-05-27T08%3A04%3A31Z&ske=2025-06-02T09%3A04%3A31Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Zi7eMeIar73sD%2FZWVm3Q8pf4bwCgq9bU0q4Lb0n7fls%3D&az=oaivgprodscus" alt="Logo Zyad Fiach" className="logo-img" />
                </div>
                <button
                    className={`navbar-burger${open ? ' open' : ''}`}
                    aria-label="Ouvrir le menu"
                    aria-expanded={open}
                    onClick={() => setOpen(o => !o)}
                >
                    <span />
                    <span />
                    <span />
                </button>
                <ul className={`navbar-links${open ? ' navbar-links--open' : ''}`}>
                    <li><a href="#hero">Accueil</a></li>
                    <li><a href="#skills">Compétences</a></li>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;