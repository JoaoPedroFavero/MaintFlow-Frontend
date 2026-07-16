`use strict`;
import { useState } from 'react';
import Layout from '../../components/Layout';
import './Style.css';

function formatarTelefone(telefone){
    const telefoneFormatado = telefone.replace(/\D/g, "");
    
    if(telefoneFormatado.length === 10){
        let ddd = telefoneFormatado.slice(0,2);
        let numeros1 = telefoneFormatado.slice(2,6);
        let numeros2 = telefoneFormatado.slice(6,10);
        return `(${ddd}) ${numeros1}-${numeros2}`;
    }

    if(telefoneFormatado.length === 11){
        let ddd = telefoneFormatado.slice(0,2);
        let numeros1 = telefoneFormatado.slice(2,7);
        let numeros2 = telefoneFormatado.slice(7,11);
        return `(${ddd}) ${numeros1}-${numeros2}`;
    }
    
    return telefoneFormatado;
}

function CadastrarClientes() {
    const [telefone, setTelefone] = useState('');

    const handleTelefoneChange = (e) => {
        const valor = e.target.value;
        const telefoneFormatado = formatarTelefone(valor);
        setTelefone(telefoneFormatado);
    };

    return (
        <Layout>
            <div className="cadastrar-clientes-container">
                <h1 id="cadastrar-clientes-title">Novo Cliente</h1>

                <form className="cadastrar-clientes-form">
                    <div id="row-1">
                        <input type="text" placeholder="CNPJ/CPF" />
                        <input type="text" placeholder="Razão Social / Nome" />
                    </div>

                    <div id="row-2">
                        <input type="text" placeholder="Nome Fantasia" />
                        <input 
                            type="text" 
                            placeholder="Telefone/Whatsapp" 
                            value={telefone}
                            onChange={handleTelefoneChange}
                            maxLength={15}
                        />

                    </div>

                    <div id="row-3">
                        <input type="text" placeholder="Municipio" />
                        <input type="text" placeholder="UF" />
                        <input type="text" placeholder="CEP" />
                    </div>

                    <div id="row-4">
                        <input type="text" placeholder="Endereço" />
                        <input type="text" placeholder="Observações" />
                        <input type="number" placeholder="Nº" />
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