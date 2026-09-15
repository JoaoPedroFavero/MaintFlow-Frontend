`use strict`;
import { useState } from 'react';
import Layout from '../../components/Layout';
import connection from '../../services/connection'
import './style.css';

function formatarCPF_CNPJ(cpfCnpj) {
    const cpfCnpjFormatado = cpfCnpj.replace(/\D/g, "");

    if (cpfCnpjFormatado.length === 11) {
        let numeros1 = cpfCnpjFormatado.slice(0, 3);
        let numeros2 = cpfCnpjFormatado.slice(3, 6);
        let numeros3 = cpfCnpjFormatado.slice(6, 9);
        let numeros4 = cpfCnpjFormatado.slice(9, 11);
        return `${numeros1}.${numeros2}.${numeros3}-${numeros4}`;
    }

    if (cpfCnpjFormatado.length === 14) {
        let numeros1 = cpfCnpjFormatado.slice(0, 2);
        let numeros2 = cpfCnpjFormatado.slice(2, 5);
        let numeros3 = cpfCnpjFormatado.slice(5, 8);
        let numeros4 = cpfCnpjFormatado.slice(8, 12);
        let numeros5 = cpfCnpjFormatado.slice(12, 14);
        return `${numeros1}.${numeros2}.${numeros3}/${numeros4}-${numeros5}`;
    }

    return cpfCnpjFormatado;
}

async function consultarClientes() {
    const params = {};
    if (nome) {params.nome = nome;}
    if (cpfCnpj) {params.cpfCnpj = cpfCnpj;}
    if (tipoCliente) {params.tipoCliente = tipoCliente;}
    
    const result = await connection.get('/clientes/busca', { params });
    setClientes(result.data);
}

function ConsultarClientes() {
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [clientes, setClientes] = useState([]);

    const handleCpfCnpjChange = (e) => {
        const cpfCnpjValue = e.target.value;
        const cpfCnpjFormatado = formatarCPF_CNPJ(cpfCnpjValue);
        setCpfCnpj(cpfCnpjFormatado);
    };

    return (
        <Layout>
            <div>
                <h1 id="consultar-clientes-title">Consultar Clientes</h1>
            </div>

            <form className="consultar-clientes-container">
                <div id="consultar-clientes-row-1">
                    <input type="text" placeholder="Buscar por CPF/CNPJ" value={cpfCnpj} onChange={handleCpfCnpjChange} maxLength={18} />
                    <input type="text" placeholder="Buscar por Razão Social/Nome" />
                </div>

                <div id="consultar-clientes-row-2">
                    <input type="text" placeholder="Buscar por Nome Fantasia" />

                    <select id="select-tipo-cliente">
                        <option id="select-tipo-cliente-option" value="">Buscar tipo de Cliente (PF/PJ)</option>
                        <option value="PF">PF</option>
                        <option value="PJ">PJ</option>
                    </select>
                </div>

                <div id="consultar-clientes-row-3">
                    <button className="consultar-clientes-button" type="submit">Consultar</button>
                </div>
            </form>

        </Layout>
    );
}

export default ConsultarClientes;
