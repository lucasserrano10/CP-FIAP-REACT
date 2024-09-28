import Nav from './components/Nav/Nav.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import './styles/global.css'

function App() {
  return (
    <div className="app-container">
      <Nav />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
