`use strict`;
import { useState } from 'react';
import connection from '../../services/connection'
import './Style.css'

import logo from '../../assets/logo.png'
import iconeLogo from '../../assets/icone-logo.png'

function Home({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');

    try {
      const response = await connection.post('/auth/login', {
        usuario: usuario,
        senha: senha
      });

      if (response.status === 200) {
        onLogin();
      }



    } catch (error) {
      if (error.response) {
        const status = error.response.status;

        if (status === 404) {
          setErro('Usuário não encontrado! Tente novamente');
        } else if (status === 401) {
          setErro('Senha incorreta! Tente novamente');
        } else if (status === 400) {
          setErro('Usuário e senha são obrigatórios');
        } else {
          setErro('Erro ao realizar login. Tente novamente.');
        }
      } else {
        setErro('Erro ao conectar com o servidor');
      }
      console.error('Erro de login:', error);
    }
  }

  return (
    <div>
      <img id="icone-logo" src={iconeLogo} alt="Ícone Logo" />
      <div className="login-container">

        <form className="login-form" onSubmit={handleSubmit}>
          <img src={logo} alt="Logo" />

          <div className="input-group">
            <label>Usuário</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          {erro && <p className="error-message">{erro}</p>}

          <button id="login-button" type="submit">Entrar</button>
          <a id="forgot-pass-link" href="#">Esqueci a senha</a>
        </form>
      </div>
    </div>
  )
}

export default Home;
