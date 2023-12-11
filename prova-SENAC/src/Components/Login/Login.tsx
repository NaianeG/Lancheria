import React, {useState} from "react";
import UsuarioService from "../../Services/UsuarioService";
import "./Login.css";

function Login() {
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
        cpf: '',
        senha: ''
    });

    
    const handleLogin = (event: React.ChangeEvent<HTMLInputElement>)  => {
        const { name, value } = event.target;
        setUsuarioLogin({
            ...usuarioLogin,
            [name]: value
        });
    };


    const handleSubmit = async (event: React.MouseEventHandler<HTMLButtonElement> | any) => {
        event.preventDefault();
        try{
            const response = await UsuarioService.fetchUsuarioLogin(usuarioLogin);
            if (response.data && response.data.cpf === usuarioLogin.cpf){
                alert('Login realizado com sucesso!');
                //criar método de comparação da senha
                //mandar abrir uma nova janela com o google
            } else {
                alert('Erro ao fazer login!');
            }
        }catch (error){
            console.error('Erro ao fazer login: ', error);
        }
    };

    return (
        <>
        <div className="LoginForm">
            <div className="LoginInputs">
                <form>
                    <div>
                        <input
                            type = "text"
                            name = "cpf"
                            value = {usuarioLogin.cpf}
                            onChange = {handleLogin}
                        />
                    </div>
                    <div>
                        <input
                            type = "password"
                            name = "senha"
                            value = {usuarioLogin.senha}
                            onChange = {handleLogin}
                        />
                    </div>
                    <button className="buttonMargin" onClick={handleSubmit}>Entrar</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Login;