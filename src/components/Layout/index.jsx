`use strict`;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Layout({ children }) {
    const [isClientesOpen, setIsClientesOpen] = useState(false);
    const [isEquipamentosOpen, setIsEquipamentosOpen] = useState(false);
    const [isGerenciamentoOpen, setIsGerenciamentoOpen] = useState(false);
    const [isGerenciamentoCadastrarOpen, setIsGerenciamentoCadastrarOpen] = useState(false);
    const [isGerenciamentoConsultarOpen, setIsGerenciamentoConsultarOpen] = useState(false);

    return (
        <div>
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

            <div className="dashboard-left-container">
                <div className="sidebar-menu">
                    <div>
                        <button className="sidebar-clientes-button" onClick={() => setIsClientesOpen(!isClientesOpen)}>
                            <span>Clientes</span>
                            <span>{isClientesOpen ? '−' : '+'}</span>
                        </button>

                        <div className={`sidebar-clientes-dropdown ${isClientesOpen ? 'open' : ''}`}>
                            <Link to="/Cadastrar-clientes" className="sidebar-link">Cadastrar</Link>
                            <Link to="/Consultar-clientes" className="sidebar-link">Consultar</Link>
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

            <div className="dashboard-content-container">
                {children}
            </div>
        </div>
    );
}

export default Layout;
