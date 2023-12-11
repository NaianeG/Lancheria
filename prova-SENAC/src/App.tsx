import './App.css'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PageCards from './Pages/CardDisplay/PageCards';
import PageAutor from './Pages/AutorInfos/PageAutor';
import AdminPage from './Pages/AdminPage/AdminPage';
import Usuario from "./Components/Usuario/Usuario.tsx";
import TelaCadastroUsuario from "./Pages/TelaCadastroUsuario/TelaCadastroUsuario";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageCards />} />
        <Route path="/autor" element={<PageAutor />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/CadastroUsuario" element={<Usuario />} />
        <Route path="/telaCadastro" element={<TelaCadastroUsuario />} />
      </Routes>
    </Router>
  );
}

export default App
