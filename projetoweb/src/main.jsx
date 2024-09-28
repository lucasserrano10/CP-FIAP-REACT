import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import Error from './routes/Error/Error.jsx'
import Home from './routes/Home/Home.jsx'
import Login from './routes/Login/Login.jsx'
import Sobre from './routes/Sobre/Sobre.jsx'
import CadastrarProduto from './routes/Cadastrar/CadastrarProduto.jsx'
import Produtos from './routes/Produtos/Produtos.jsx'

const router = createBrowserRouter([
  {
    // Elemento Pai
    path: '/', element: <App />,
    errorElement: <Error />,

    // Elementos Filhos
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/cadastrar', element: <CadastrarProduto /> },
      { path: '/produtos', element: <Produtos /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Renderizando o RouterProvider para chamar as rotas */}
    <RouterProvider router={router} />
  </StrictMode>,
)

