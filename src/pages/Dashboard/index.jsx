`use strict`;
import connection from '../../services/connection';
import './Style.css';
import iconeLogo from '../../assets/icone-logo.png'

function Dashboard() {
    return (
        <div>
             <img id="icone-logo" src={iconeLogo} alt="Ícone Logo" />
             <div className="dashboard-top-container">
                <h1>Área do Técnico</h1>
                <div className="dropdown">
                    <button className="dropdown-button">
                        <span>=</span>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Sair</a>
                    </div>
                </div>
             </div>
        </div>
    );
}

export default Dashboard;