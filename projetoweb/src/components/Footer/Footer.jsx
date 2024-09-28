import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'; 
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <div className='div-footer'>
            <p>© 2024 Projeto Para Fins Acadêmicos | Todos os direitos reservados.</p>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                </a>
            </div>
        </div>
    );
}

export default Footer;
