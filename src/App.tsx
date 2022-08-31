import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/static/Footer';

function App() {
  return (
    <>
      <h1>FalaMemo</h1>
      {/*<Navbar />
      <div style={{ minHeight: '100vh' }}>
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
