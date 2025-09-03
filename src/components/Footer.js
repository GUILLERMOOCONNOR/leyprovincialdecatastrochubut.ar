import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
            <p style={{ margin: 0 }}>© {new Date().getFullYear()} Educando al Soberano. Todos los derechos reservados.</p>
            <div>
                <a href="https://www.facebook.com/educandoalsoberano" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                <a href="https://www.twitter.com/educandoalsoberano" target="_blank" rel="noopener noreferrer">Twitter</a> | 
                <a href="https://www.instagram.com/educandoalsoberano" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;