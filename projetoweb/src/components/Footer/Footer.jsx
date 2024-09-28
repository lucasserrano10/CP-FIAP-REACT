import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importando os ícones do React Icons
import './Footer.css'; // Adicione este arquivo CSS para estilos personalizados

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5 p-4">
            <div className="container text-center">
                <p>&copy; {new Date().getFullYear()} Starship. Todos os direitos reservados.</p>
                <p>Siga-nos nas redes sociais:</p>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="#" className="text-white">
                            <FaFacebook size={24} />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="text-white">
                            <FaTwitter size={24} />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="text-white">
                            <FaInstagram size={24} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
