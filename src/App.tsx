import "./App.css"
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import Footer from "./components/static/Footer/Footer"
import Navbar from "./components/static/Navbar/Navbar"
import Login from "./pages/login/Login"
import Sobre from "./pages/sobre/Sobre"
import Home from "./pages/home/Home"
import Regras from "./pages/regras/Regras"
import Termos from "./pages/termos/Termos"
import CadastroUsuario from "./pages/cadastroUsuario/CadastroUsuario"
import ListarTema from "./components/temas/listarTema/ListarTema"
import ListarPostagem from "./components/postagens/listarPostagem/ListarPostagem"
import CadastrarTema from "./components/temas/cadastrarTema/CadastrarTema"
import CadastrarPostagem from "./components/postagens/cadastrarPostagem/CadastrarPostagem"
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem"
import DeletarTema from "./components/temas/deletarTema/DeletarTema"
import store from "./store/store"
import { ToastContainer } from "react-toastify"
import NavbarLogo from "./components/static/Navbar/NavbarLogo/NavbarLogo"
import NaoEncontrado from "./pages/naoEncontrado/NaoEncontrado"


function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/home" element={<Home />} />
            <Route path="/regras" element={<Regras />} />
            <Route path="/termos" element={<Termos />} />

            <Route path="/temas" element={<ListarTema />} />
            <Route path="/postagens" element={<ListarPostagem />} />

            <Route path="/formularioTema" element={<CadastrarTema />} />
            <Route path="/formularioTema/:id" element={<CadastrarTema />} />

            <Route path="/formularioPostagem" element={<CadastrarPostagem />} />
            <Route path="/formularioPostagem/:id" element={<CadastrarPostagem />} />

            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />

            <Route path="*" element={<NaoEncontrado />} />

          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App
