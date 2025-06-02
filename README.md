# �� Meditrack Frontend - React + GraphQL

## ✨ Tecnologias

* ![React](https://img.shields.io/badge/-React-61DAFB?logo=react\&logoColor=black\&style=flat-square) **React**
* ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript\&logoColor=white\&style=flat-square) **TypeScript**
* ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite\&logoColor=white\&style=flat-square) **Vite**
* ![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?logo=tailwind-css\&logoColor=white\&style=flat-square) **Tailwind CSS**
* ![Zustand](https://img.shields.io/badge/-Zustand-000000?logo=zustand\&logoColor=white\&style=flat-square) **Zustand**
* ![Zod](https://img.shields.io/badge/-Zod-8E44AD?style=flat-square) **Zod**
* ![Apollo Client](https://img.shields.io/badge/-Apollo%20Client-311C87?logo=apollo-graphql\&logoColor=white\&style=flat-square) **Apollo Client**

---

## 📋 Pré-requisitos

* Node.js (versão 16 ou superior)
* npm ou yarn
* API GraphQL rodando (ex: [meditrack-backend](https://github.com/Daniel-Dief/meditrack-backend))

---

## 📁 Estrutura do Projeto

```
.
├── public/
├── src/
│   ├── apollo/            # Configuração do Apollo Client
│   ├── components/        # Componentes reutilizáveis
│   ├── pages/             # Páginas principais da aplicação
│   ├── store/             # Estado global com Zustand
│   ├── lib/               # Schemas Zod, helpers, etc.
│   └── main.tsx           # Ponto de entrada da aplicação
├── tailwind.config.js     # Configuração do Tailwind
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/Daniel-Dief/meditrack-frontend.git
cd meditrack-frontend
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Iniciar a aplicação

```bash
npm run dev
```

A aplicação estará disponível em:
➡️ `http://localhost:5173/`

---

## 🧠 Funcionalidades

* Integração total com a API GraphQL
* Listagem e agendamento de consultas
* Formulários validados com Zod
* Interface responsiva com Tailwind CSS
* Gerenciamento de estado leve com Zustand

---

## 📌 Autor

Desenvolvido por [Daniel Diefenthaeler](https://github.com/Daniel-Dief)

---

## 📝 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
