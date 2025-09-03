import React from 'react';
import './Header.css'; // Assuming you will create a CSS file for header styles

const Header = () => {
    return (
        <header className="header">
            <h1 className="site-title">Educando al Soberano</h1>
            <nav className="navigation">
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#videos">Videos</a></li>
                    <li><a href="#about">Sobre Nosotros</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;