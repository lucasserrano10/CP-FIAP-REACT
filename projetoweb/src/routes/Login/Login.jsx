import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        if (username && password) {
            const encryptedUser = btoa(username);
            const encryptedPass = btoa(password);
            sessionStorage.setItem('user', encryptedUser);
            sessionStorage.setItem('pass', encryptedPass);
            setIsLoggedIn(true);
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('pass');
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    {!isLoggedIn ? (
                        <div className="card shadow-lg p-4">
                            <h1 className="text-center mb-4 text-primary">Área do Cliente</h1>
                            <h2 className="text-center mb-4">Login</h2>
                            <div className="form-group mb-3">
                                <label htmlFor="username">Usuário:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Digite seu usuário"
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="password">Senha:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Digite sua senha"
                                />
                            </div>
                            <button
                                className="btn btn-primary w-100"
                                onClick={handleLogin}
                            >
                                Entrar
                            </button>
                        </div>
                    ) : (
                        <div className="card shadow-lg p-4 text-center">
                            <h1 className="text-success mb-4">Bem-vindo à Área do Cliente</h1>
                            <h2 className="mb-4">Olá, {username}!</h2>
                            <button
                                className="btn btn-danger w-100"
                                onClick={handleLogout}
                            >
                                Sair
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
