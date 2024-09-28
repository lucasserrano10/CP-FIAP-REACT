import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhoneAlt } from 'react-icons/fa'; // Importando ícone de telefone
import imagem1 from '../../../public/imagem1-carregador.jpg';
import imagem2 from '../../../public/imagem2-painel.jpg';
import imagem3 from '../../../public/imagem3-cabo.jpg';

const Produtos = () => {
    const [produtos, setProdutos] = useState([
        {
            id: 1,
            name: 'Carregador de Carro Elétrico',
            description: 'Carregador rápido compatível com todos os modelos de carros elétricos.',
            price: 'R$ 2.499,99',
            img: imagem1
        },
        {
            id: 2,
            name: 'Painel Solar Portátil',
            description: 'Painel solar para carregar carros elétricos em qualquer lugar.',
            price: 'R$ 1.899,99',
            img: imagem2
        },
        {
            id: 3,
            name: 'Cabo de Carregamento para Carro Elétrico',
            description: 'Cabo de alta qualidade para carregamento de veículos elétricos.',
            price: 'R$ 499,99',
            img: imagem3
        }
    ]);

    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        img: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        const newId = produtos.length + 1;
        setProdutos([...produtos, { ...newProduct, id: newId }]);
        setNewProduct({
            name: '',
            description: '',
            price: '',
            img: ''
        });
    };

    return (
        <div className="container mt-5" style={{ flexGrow: 1 }}>
            <h1 className="text-center mb-4"><strong>STARSHIP</strong> Products</h1>

            {/* Listagem de Produtos */}
            <h3 className="mb-4">Lista de Produtos</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.name}</td>
                            <td>{produto.description}</td>
                            <td>{produto.price}</td>
                            <td>
                                <img 
                                    src={produto.img} 
                                    alt={produto.name} 
                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Seção de Contato dos Vendedores */}
            <div className="mb-4 p-4 shadow-sm rounded" style={{ backgroundColor: '#f8f9fa' }}>
                <h4 className="text-center mb-3">Precisa de ajuda para comprar?</h4>
                <p className="text-center">Chame nossos vendedores:</p>
                <div className="text-center">
                    <p><FaPhoneAlt /> João Silva - (11) 91234-5678</p>
                    <p><FaPhoneAlt /> Maria Oliveira - (11) 92345-6789</p>
                    <p><FaPhoneAlt /> Carlos Pereira - (11) 93456-7890</p>
                </div>
            </div>

            {/* Formulário de Cadastro de Produtos */}
            <div className="card p-4 mb-4">
                <h3>Cadastrar Produto</h3>
                <form onSubmit={handleAddProduct}>
                    <div className="mb-3">
                        <label className="form-label">Nome do Produto</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={newProduct.name} 
                            onChange={handleInputChange} 
                            className="form-control" 
                            placeholder="Digite o nome do produto"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descrição</label>
                        <textarea 
                            name="description" 
                            value={newProduct.description} 
                            onChange={handleInputChange} 
                            className="form-control" 
                            placeholder="Digite a descrição do produto"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Preço</label>
                        <input 
                            type="text" 
                            name="price" 
                            value={newProduct.price} 
                            onChange={handleInputChange} 
                            className="form-control" 
                            placeholder="Digite o preço do produto"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Imagem (URL)</label>
                        <input 
                            type="text" 
                            name="img" 
                            value={newProduct.img} 
                            onChange={handleInputChange} 
                            className="form-control" 
                            placeholder="Digite o URL da imagem do produto"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Cadastrar Produto</button>
                </form>
            </div>
        </div>
    );
};

export default Produtos;
