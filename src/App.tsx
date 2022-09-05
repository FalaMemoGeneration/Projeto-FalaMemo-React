import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/static/Footer/Footer';
import Navbar from './components/static/Navbar/Navbar';
import Login from './pages/login/Login';
import Sobre from './pages/sobre/Sobre';
import Home from './pages/home/Home';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <Router>
      
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> 
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
        </Routes>
  </div>
      <Footer />
    </Router>
  )
}

export default App;
