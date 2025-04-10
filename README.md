# 🧑‍💻 Sistema de Gerenciamento de Usuários

Este projeto é um sistema completo de cadastro de usuários utilizando **React (Vite)** no frontend, **Node.js com Express** no backend e **MySQL** como banco de dados.

---

## 📦 Tecnologias Utilizadas

- **Frontend:** React (Vite), Axios, React Router
- **Backend:** Node.js, Express, express-validator, MySQL2, CORS
- **Banco de Dados:** MySQL

---

## 📁 Estrutura do Projeto

projeto/ ├── backend/ │ ├── controllers/ │ ├── routes/ │ ├── db.js │ ├── server.js │ └── package.json ├── frontend/ │ ├── components/ │ ├── pages/ │ ├── styles/ │ ├── main.jsx │ ├── App.jsx │ └── package.json └── README.md

---

## 🧰 Pré-requisitos

Certifique-se de ter os seguintes itens instalados na sua máquina:

- [Node.js](https://nodejs.org/)
- [MySQL Server 8+](https://dev.mysql.com/downloads/mysql/)
- [Git](https://git-scm.com/)

---

## 🔌 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/HiannP/SistemaWeb_React.git
cd SistemaWeb_React
```

### 2. Banco de Dados

1. Utilize o arquivo "tb1_users.sql".

2. Dentro do seu MySQL, vá até a aba "Server" e selecione "Data Import".

3. Selecione "Import from Self-Contained File" e localize o arquivo "tb1_users.sql".

4. Em Default Target Schema, para a direita, selecione "New..." e nomeie seu banco.

5. Vá até a aba "Import Progress" e inicie a importação em "Star Import".

6. Com isso feito, seu banco estara configurado e pronto para uso.

### 3. Backend

```bash
cd backend
npm install
```

Configure a conexão com o banco em db.js:

```bash
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'nome_do_banco'
});

module.exports = db;
```

### 4.Frontend

```bash
cd ../frontend
npm install
```

### Por fim...

Inicie o servidor React:

```bash
npm run dev
```

## 🧪 Funcionalidades
    
    📋 Listar usuários

    ➕ Cadastrar novo usuário

    ✏️ Editar usuário existente

    ❌ Excluir usuário

## OBS: Este projeto é um trabalho Universitário, feito durante uma disciplina do curso de Ciência da Computação.