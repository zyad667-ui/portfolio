import './Navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-logo">Zyad Fiach</div>
            <ul className="navbar-links">
                <li><a href="#hero">Accueil</a></li>
                <li><a href="#skills">Compétences</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#about">À propos</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
