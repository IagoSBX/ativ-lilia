# 🍔 Delivery App — Frontend React

Front-end de um sistema de delivery multi-perfil (cliente, loja e administrador), construído em React + Vite e consumindo uma API REST própria.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

## 📖 Sobre o projeto

O objetivo foi reproduzir, do zero, os desafios reais de uma aplicação de e-commerce/delivery: autenticação de usuário, catálogo de produtos por loja, carrinho de compras e painéis distintos por perfil de acesso — tudo consumindo uma API própria hospedada no Render.

## ✨ Funcionalidades

- 🔐 Autenticação de usuário (login) integrada à API
- 🏬 Listagem de produtos por loja
- 🛒 Carrinho de compras em modal lateral, com resumo do pedido
- 📊 Dashboards segmentados por perfil: **Admin**, **Cliente** e **Loja**
- 🧠 Gerenciamento de estado via **hooks customizados** (`useCarrinho`, `useProdutos`, `useUsuario`)
- 🌐 Roteamento client-side com React Router DOM

## 🧱 Stack técnica

- **React** + **Vite**
- **React Router DOM** — gerenciamento de rotas
- **Fetch API** — comunicação com o back-end (`services/`)
- **CSS** puro para estilização dos componentes

## 🗂️ Estrutura do projeto

```
src/
├── pages/       # Home, Login, Dashboard (Admin/Cliente/Loja), Carrinho
├── services/    # produtoService.js, usuarioService.js — chamadas à API
├── hooks/       # useCarrinho.js, useProdutos.js, useUsuario.js
└── styles/      # estilos por componente/página
```

## 🔌 API

Este front-end consome a API de delivery hospedada em produção:

- **Base URL:** `https://delivery-umtc.onrender.com`
- **Documentação:** https://delivery-umtc.onrender.com/api-docs

## 🚀 Como rodar localmente

```bash
# 1. Clonar o repositório
git clone https://github.com/IagoSBX/ativ-lilia.git
cd ativ-lilia

# 2. Instalar as dependências
npm install

# 3. Configurar variáveis de ambiente
# crie um arquivo .env na raiz com:
echo "VITE_API_URL=https://delivery-umtc.onrender.com/api" > .env

# 4. Rodar em modo de desenvolvimento
npm run dev
```

## 👨‍💻 Autor

Feito por **Iago Santos**

[![GitHub](https://img.shields.io/badge/GitHub-IagoSBX-181717?logo=github)](https://github.com/IagoSBX)
