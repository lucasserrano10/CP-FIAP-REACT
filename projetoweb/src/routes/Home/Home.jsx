import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import carro1 from "../../../public/carro-eletrico1.jpg";
import carro2 from "../../../public/carro-eletrico2.jpg";
import carro3 from "../../../public/carro-eletrico3.jpg";

const Home = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="text-center mb-5">
                    <h1 className="display-4 font-weight-bold">Bem-vindo à Starship</h1>
                    <p className="lead text-muted">
                        Sua fonte confiável para tudo sobre carros elétricos e acessórios. Descubra como a tecnologia de veículos elétricos está transformando a mobilidade e o futuro da sustentabilidade.
                    </p>
                </div>

                {/* Seção Estilizada */}
                <div className="bg-light p-4 rounded shadow-sm text-center mb-5">
                    <h2 className="font-weight-bold">Inovação e Sustentabilidade</h2>
                    <p className="text-muted">
                        Explore as últimas tendências em veículos elétricos e descubra como podemos ajudar você a se conectar com o futuro da mobilidade.
                    </p>
                </div>

                {/* Slideshow */}
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carro1}
                            alt="Carro Elétrico 1"
                            style={{ height: '400px', objectFit: 'cover' }}
                        />
                        <Carousel.Caption>
                            <h3>Carros Elétricos: O Futuro da Mobilidade</h3>
                            <p>Descubra a nova era dos veículos sustentáveis e suas vantagens.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carro2}
                            alt="Carro Elétrico 2"
                            style={{ height: '400px', objectFit: 'cover' }}
                        />
                        <Carousel.Caption>
                            <h3>Performance e Sustentabilidade</h3>
                            <p>Carros elétricos oferecem desempenho excepcional com zero emissões.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carro3}
                            alt="Carro Elétrico 3"
                            style={{ height: '400px', objectFit: 'cover' }}
                        />
                        <Carousel.Caption>
                            <h3>Acessórios para Carros Elétricos</h3>
                            <p>Melhore a experiência do seu veículo elétrico com os melhores acessórios.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default Home;
