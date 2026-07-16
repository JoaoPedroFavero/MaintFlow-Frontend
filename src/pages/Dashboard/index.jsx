`use strict`;
import { useState } from 'react';
import connection from '../../services/connection';
import './Style.css';
import iconeLogo from '../../assets/icone-logo.png'

function Dashboard() {
    const [isClientesOpen, setIsClientesOpen] = useState(false);
    const [isEquipamentosOpen, setIsEquipamentosOpen] = useState(false);
    const [isGerenciamentoOpen, setIsGerenciamentoOpen] = useState(false);
    const [isGerenciamentoCadastrarOpen, setIsGerenciamentoCadastrarOpen] = useState(false);
    const [isGerenciamentoConsultarOpen, setIsGerenciamentoConsultarOpen] = useState(false);

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

            <div className="dashboard-left-container"> {/* CONTAINER DA SIDEBAR */}
                <div className="sidebar-menu">

                    <div>
                        <button className="sidebar-clientes-button" onClick={() => setIsClientesOpen(!isClientesOpen)}>
                            <span>Clientes</span>
                            <span>{isClientesOpen ? '−' : '+'}</span>
                        </button>

                        <div className={`sidebar-clientes-dropdown ${isClientesOpen ? 'open' : ''}`}>
                            <a href="#">Cadastrar</a>
                            <a href="#">Consultar</a>
                        </div>
                    </div>
                </div>

                <div>
                    <button className="sidebar-equipamentos-button" onClick={() => setIsEquipamentosOpen(!isEquipamentosOpen)}>
                        <span>Equipamentos</span>
                        <span>{isEquipamentosOpen ? '−' : '+'}</span>
                    </button>

                    <div className={`sidebar-equipamentos-dropdown ${isEquipamentosOpen ? 'open' : ''}`}>
                        <a href="#">Nova Ordem</a>
                        <a href="#">Consultar Ordens</a>
                        <a href="#">Acompanhar</a>
                    </div>
                </div>

                <div>
                    <button className="sidebar-gerenciamento-button" onClick={() => setIsGerenciamentoOpen(!isGerenciamentoOpen)}>
                        <span>Gerenciamento</span>
                        <span>{isGerenciamentoOpen ? '−' : '+'}</span>
                    </button>

                    <div className={`sidebar-gerenciamento-first-dropdown ${isGerenciamentoOpen ? 'open' : ''}`}>
                        <button className="cadastrar-gerenciamento-button" onClick={() => setIsGerenciamentoCadastrarOpen(!isGerenciamentoCadastrarOpen)}>
                            <span>Cadastrar</span>
                            <span>{isGerenciamentoCadastrarOpen ? '−' : '+'}</span>
                        </button>
                        <div className={`cadastrar-gerenciamento-second-dropdown ${isGerenciamentoCadastrarOpen ? 'open' : ''}`}>
                            <a href="#">Cond. Pagamento</a>
                            <a href="#">Status Ordens</a>
                        </div>


                        <button className="consultar-gerenciamento-button" onClick={() => setIsGerenciamentoConsultarOpen(!isGerenciamentoConsultarOpen)}>
                            <span>Consultar</span>
                            <span>{isGerenciamentoConsultarOpen ? '−' : '+'}</span>
                        </button>
                        <div className={`consultar-gerenciamento-second-dropdown ${isGerenciamentoConsultarOpen ? 'open' : ''}`}>
                            <a href="#">Cond. Pagamento</a>
                            <a href="#">Status Ordens</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;