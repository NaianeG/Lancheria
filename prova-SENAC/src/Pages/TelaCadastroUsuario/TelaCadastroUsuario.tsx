import React, { useState, useEffect } from "react";
import CadastroUsuario from "../../Components/Usuario/Usuario";
import TabelaUsuario from "../../Components/ItemUsuario/ItemUsuario";
import usuarioService from "../../Services/UsuarioService";

import "./TelaCadastroUsuario.css";

const Usuarios = () => {
    const [dadosDoUsuario, setDadosDoUsuario] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Utiliza o serviço para buscar dados do usuario
        const response = await usuarioService.fetchUsuarios();
        setDadosDoUsuario(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do banco de dados:", error);
      }
    };

    fetchData();
  });

  return (
    <>
      <header>
        <nav></nav>
      </header>

        <div className="body">
        <div className="cadastro">
          <CadastroUsuario />
        </div>
        <div className="lista">
          <h2>Lista de Usuários</h2>
          <TabelaUsuario dados={dadosDoUsuario} />
        </div>
        </div>
      
    </>
  );
};

export default Usuarios;
