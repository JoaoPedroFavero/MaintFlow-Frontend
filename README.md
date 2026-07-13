# Frontend: MaintFlow

Repositório e documentação Frontend para a API MaintFlow.

## Documentação da API

A documentação da API pode ser acessada no seguinte repositório: https://github.com/JoaoPedroFavero/MaintFlow

## Tecnologias

- **React** 19.2.7 - Biblioteca JavaScript para construção de interfaces
- **Vite** 8.1.1 - Build tool e dev server
- **ESLint** - Linting para JavaScript/React
- **CSS Custom Properties** - Variáveis CSS para gerenciamento de cores

## Instalação

```bash
# Clone o repositório
git clone https://github.com/JoaoPedroFavero/MaintFlow-Frontend.git

# Entre no diretório
cd MaintFlow-Frontend

# Instale as dependências
npm install
```

## Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Executa o linting
npm run lint

# Preview do build de produção
npm run preview
```

## Estrutura do Projeto

```
maintflow-system/
├── src/
│   ├── assets/          # Assets estáticos
│   ├── pages/           # Páginas da aplicação
│   │   └── Home/
│   │       ├── Index.jsx
│   │       └── Style.css
│   ├── index.css        # Estilos globais
│   └── main.jsx         # Entry point da aplicação
├── index.html           # Template HTML
├── package.json         # Dependências e scripts
├── vite.config.js       # Configuração do Vite
└── eslint.config.js     # Configuração do ESLint
```


### Paleta de Cores

- **Background Dark**: `#202020`
- **Fonte**: Poppins (sans-serif)

## Funcionalidades Implementadas

- [x] Página Home com formulário de login
- [x] Layout responsivo com flexbox
- [x] Tema escuro
- [x] Variáveis CSS para consistência de estilos

## 🚧 Em Desenvolvimento

- [ ] Sistema de autenticação
- [ ] Dashboard de manutenção
- [ ] Gestão de ordens de serviço
- [ ] Relatórios e estatísticas

