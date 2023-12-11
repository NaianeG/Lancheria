"use strict";

import React from "react";
import "./ItemUsuario.css";
import ItemTabelaUsuario from "../ItemTabelaUsuario/ItemTabelaUsuario";



interface TabelaUsuarioProps {
  dados: Usuario[]; 
}

const TabelaUsuario: React.FC<TabelaUsuarioProps> = ({ dados }) => {
  return (
    <div>
      {/* Tabela para exibir os usuarios */}
     
        <table className="resumo-tabela">
          {/* Cabeçalho da tabela */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Usuário</th>
              <th>CPF</th>
              <th>Email</th>
            </tr>
          </thead>
          {/* Corpo da tabela com os dados */}
          <tbody>
            {/* Mapeia os dados para criar linhas da tabela usando o componente ItemTabelaUsuario*/}
            {dados.map((item, index) => (
              <ItemTabelaUsuario key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    
  );
};

// Exporta o componente TabelaProduto
export default TabelaUsuario;
