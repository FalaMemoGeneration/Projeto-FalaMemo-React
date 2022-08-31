import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/static/Footer/Footer';
import Navbar from './components/static/Navbar/Navbar';

function App() {
  return (
    <>
      
      <Navbar />
      {/*<div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
        </Routes>
  </div>*/}
      <Footer />
    </>
  )
}

export default App;
