import './Style.css'

function Home() {
  
  return (
    <div className="login-container">
      <form className="login-form">
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Home
