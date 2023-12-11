"use strict";

import React from "react";
// Propriedades esperadas para o componente ItemTabelaResumo
interface ItemTabelaUsuarioProps {
  item: Usuario; // Objeto representando um item do resumo de usuario
  
}

// Componente funcional ItemTabelaResumo
const ItemTabelaProduto: React.FC<ItemTabelaUsuarioProps> = ({
  item,

}) => {
  return (
    // Linha da tabela representando um item
    <tr>
      {/* Coluna com o número do item */}
      <td>{item.id}</td>

      {/* Coluna com a descrição do item */}
      <td>{item.nome}</td>

      {/* Coluna com o valor do item, formatado com duas casas decimais */}
      <td>{item.username}</td>

      {/* Coluna com a descrição do item */}
      <td>{item.cpf}</td>

      {/* Coluna com a descrição do item */}
      <td>{item.email}</td>
    </tr>
  );
};

// Exporta o componente ItemTabelaResumo
export default ItemTabelaProduto;
