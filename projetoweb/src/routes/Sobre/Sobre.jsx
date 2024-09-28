import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import desenvolvedor1 from '../../../public/desenvolvedor1.jpg'
import desenvolvedor2 from '../../../public/desenvolvedor2.jpg'
import desenvolvedor3 from '../../../public/desenvolvedor3.jpg'

const Sobre = () => {
    const developers = [
        {
            name: 'Lucas Serrano',
            description: 'Lucas Serrano é um desenvolvedor Full Stack apaixonado por tecnologia e inovação. Com uma forte base em desenvolvimento web, Lucas domina tanto frontend quanto backend, utilizando ferramentas como React, Node.js e bancos de dados SQL e NoSQL.',
            img: desenvolvedor1
        },
        {
            name: 'Caio Rossini',
            description: 'Caio Rossini é engenheiro de software com foco em frontend e experiência do usuário. Com mais de cinco anos de experiência no mercado, ele é especializado em criar interfaces modernas e responsivas, utilizando tecnologias como HTML, CSS, JavaScript e frameworks como React e Angular.',
            img: desenvolvedor3
        },
        {
            name: 'Pedro Nobre',
            description: 'Pedro Nobre é especialista em backend e segurança de dados, com um foco em criar sistemas robustos e seguros para grandes aplicações. Ele tem um profundo conhecimento em linguagens como Python, Java e Go, além de experiência em trabalhar com APIs RESTful e microservices.',
            img: desenvolvedor2
        }
    ];

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-5">Sobre os Desenvolvedores</h1>
            <div className="row justify-content-center">
                {developers.map((dev, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card shadow-lg h-100 text-center">
                            <div className="card-body">
                                <img 
                                    src={dev.img} 
                                    alt={dev.name} 
                                    className="rounded-circle mb-3" 
                                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                />
                                <h5 className="card-title">{dev.name}</h5>
                                <p className="card-text">{dev.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sobre;
