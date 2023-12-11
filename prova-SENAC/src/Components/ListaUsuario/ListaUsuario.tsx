import React, { useEffect, useState } from "react";
import "./ListaUsuario.css";

interface Produto {
  id: number;
  nome: string;
  usuarioNome: string;
  cpf: string;
  email: string;
  senha: string;
}

const ListaUsuario: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    const fetchUsuario= async () => {
      try {
        const response = await fetch("lista/usuario");
        if (!response.ok) {
          throw new Error("Erro ao obter produtos da API");
        }
        const data: Produto[] = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchUsuario();
  }, []);

  return (
    <div>
      <h2>Lista de usuários</h2>

      <table className="resumo-tabela">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Usuário</th>
            <th>CPF</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nome}</td>
              <td>{usuario.username}</td>
              <td>{usuario.cpf}</td>
              <td>{usuario.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaUsuario;
