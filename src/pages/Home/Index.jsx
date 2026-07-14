`use strict`;
import connection from '../../services/connection'
import './Style.css'

import logo from '../../assets/logo.png'
import iconeLogo from '../../assets/icone-logo.png'

function Home({ onLogin }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <div>
      <img id="icone-logo" src={iconeLogo} alt="Ícone Logo" />
      <div className="login-container">

        <form className="login-form" onSubmit={handleSubmit}>
          <img src={logo} alt="Logo" />

          <div className="input-group">
            <label>Usuário</label>
            <input type="text" />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input type="password" />
          </div>

          <button id="login-button" type="submit">Entrar</button>
          <a id="forgot-pass-link" href="#">Esqueci a senha</a>
        </form>
      </div>
    </div>
  )
}

export default Home
