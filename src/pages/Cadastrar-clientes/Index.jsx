`use strict`;
import { useState } from 'react';
import Layout from '../../components/Layout';
import './style.css';

function formatarTelefone(telefone) {
    const telefoneFormatado = telefone.replace(/\D/g, "");

    if (telefoneFormatado.length === 10) {
        let ddd = telefoneFormatado.slice(0, 2);
        let numeros1 = telefoneFormatado.slice(2, 6);
        let numeros2 = telefoneFormatado.slice(6, 10);
        return `(${ddd}) ${numeros1}-${numeros2}`;
    }

    if (telefoneFormatado.length === 11) {
        let ddd = telefoneFormatado.slice(0, 2);
        let numeros1 = telefoneFormatado.slice(2, 7);
        let numeros2 = telefoneFormatado.slice(7, 11);
        return `(${ddd}) ${numeros1}-${numeros2}`;
    }

    return telefoneFormatado;
}

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

function formatarCEP(cep) {
    const cepFormatado = cep.replace(/\D/g, "");

    if (cepFormatado.length === 8) {
        let numeros1 = cepFormatado.slice(0, 5);
        let numeros2 = cepFormatado.slice(5, 8);
        return `${numeros1}-${numeros2}`;
    }

    return cepFormatado;
}

function CadastrarClientes() {
    const [telefone, setTelefone] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [cep, setCep] = useState('');

    const handleTelefoneChange = (e) => {
        const telefoneValue = e.target.value;
        const telefoneFormatado = formatarTelefone(telefoneValue);
        setTelefone(telefoneFormatado);
    };

    const handleCpfCnpjChange = (e) => {
        const cpfCnpjValue = e.target.value;
        const cpfCnpjFormatado = formatarCPF_CNPJ(cpfCnpjValue);
        setCpfCnpj(cpfCnpjFormatado);
    };

    const handleCPEChange = (e) => {
        const cepValue = e.target.value;
        const cepFormatado = formatarCEP(cepValue);
        setCep(cepFormatado);
    }

    return (
        <Layout>
            <div className="cadastrar-clientes-container">
                <h1 id="cadastrar-clientes-title">Novo Cliente</h1>

                <form className="cadastrar-clientes-form">
                    <div id="row-1">
                        <input type="text" placeholder="CNPJ/CPF" value={cpfCnpj} onChange={handleCpfCnpjChange} maxLength={18} required />
                        <input type="text" placeholder="Razão Social / Nome" required />
                    </div>

                    <div id="row-2">
                        <input type="text" placeholder="Nome Fantasia" />
                        <input type="text" placeholder="Telefone/Whatsapp" value={telefone} onChange={handleTelefoneChange} maxLength={15} required />
                    </div>

                    <div id="row-3">
                        <input type="text" placeholder="Municipio" required />
                        <input type="text" placeholder="UF" required />
                        <input type="text" placeholder="CEP" value={cep} onChange={handleCPEChange} maxLength={9} required />
                    </div>

                    <div id="row-4">
                        <input type="text" placeholder="Endereço" required />
                        <input type="text" placeholder="Observações" />
                        <input type="number" placeholder="Nº" required />
                    </div>

                    <div id="row-5">
                        <button className="cadastrar-clientes-button" type="submit">Cadastrar</button>
                        <span>✓</span>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default CadastrarClientes;