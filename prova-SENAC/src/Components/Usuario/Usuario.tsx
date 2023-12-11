import React, { useState } from "react";
import "./Usuario.css";
import usuarioService from "../../Services/UsuarioService";

const Usuario = () =>  {
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    username: "",
    cpf: "",
    email: "",
    senha: "",
  });

  const cadastroUsuario = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

   const handleSubmit = async (event: React.MouseEventHandler<HTMLButtonElement> | any) => {
        event.preventDefault(); 
        await usuarioService.cadastroUsuario(usuario);
   };
  return (
    <>
      <h2>Cadastro de usuários</h2>
      <div className="UsuarioForm">
        <div className="UsuarioInputs">
          <form>
            <div>
              <label className="labelEstilizada" htmlFor="">
                Nome:
              </label>
              <input
                type="text"
                name="nome"
                value={usuario.nome}
                onChange={cadastroUsuario}
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div>
              <label className="labelEstilizada" htmlFor="usuarioNome">
                Usuário:
              </label>
              <input
                type="text"
                name="username"
                value={usuario.username}
                onChange={cadastroUsuario}
                placeholder="Digite seu usuário"
                required
              />
            </div>
            <div>
              <label className="labelEstilizada" htmlFor="cpf">
                CPF:
              </label>
              <input
                type="text"
                name="cpf"
                value={usuario.cpf}
                onChange={cadastroUsuario}
                placeholder="Digite seu CPF"
                required
              />
            </div>
            <div>
              <label className="labelEstilizada" htmlFor="email">
                Email:
              </label>
              <input
                type="text"
                name="email"
                value={usuario.email}
                onChange={cadastroUsuario}
                placeholder="Digite seu email"
                required
              />
            </div>
            <div>
              <label className="labelEstilizada" htmlFor="senha">
                Senha:
              </label>
              <input
                type="password"
                name="senha"
                value={usuario.senha}
                onChange={cadastroUsuario}
                placeholder="Digite sua senha"
                required
              />
            </div>
            <button className="buttonUsuario" onClick={handleSubmit}>
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Usuario;
