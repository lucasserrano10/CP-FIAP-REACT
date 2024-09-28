import { Link } from "react-router-dom";
import { FaPlug } from "react-icons/fa"; 
import './Nav.css'; // Se você tiver um CSS adicional

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> {/* Cores mais claras */}
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    STARSHIP <FaPlug className="react-icon" /> {/* Ícone relacionado à eletricidade */}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/produtos">Produtos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sobre">Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
