# 📦 StockFlow API

![Logo ou Banner do Projeto](link_para_imagem) <!-- Se você tiver um logo ou banner -->

## 📑 Índice
1. [📖 Visão Geral](#-visão-geral)
2. [✨ Funcionalidades](#-funcionalidades)
3. [🛠️ Tecnologias Utilizadas](#%EF%B8%8F-tecnologias-utilizadas)
4. [⚙️ Instalação](#%EF%B8%8F-instalação)
5. [🔧 Configuração](#-configuração)
6. [🚀 Uso](#-uso)
7. [📚 Rotas da API](#-rotas-da-api)
8. [🔐 Autenticação](#-autenticação)
9. [🤝 Contribuindo](#-contribuindo)
10. [📜 Licença](#-licença)

## 📖 Visão Geral
A **StockFlow API** é uma aplicação para gestão de estoque que permite criar, organizar e manipular itens em pastas. É ideal para empresas que precisam manter um controle eficiente do seu inventário.

## ✨ Funcionalidades
- 🔐 **Autenticação de usuários com JWT**
- 📂 **Criação, edição e exclusão de pastas**
- 📦 **Criação, edição e exclusão de itens dentro das pastas**
- 🗂️ **Organização do estoque de forma hierárquica**

## 🛠️ Tecnologias Utilizadas
- **NestJS**: Framework para construção de APIs escaláveis.
- **Prisma**: ORM para manipulação do banco de dados.
- **PostgreSQL**: Banco de dados relacional.
- **JWT**: Para autenticação segura.
- **TypeScript**: Linguagem utilizada no desenvolvimento.

## ⚙️ Instalação
Siga os passos abaixo para configurar o projeto localmente.

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/StockFlow.git

# Navegue até o diretório do projeto
cd StockFlow

# Instale as dependências
npm install
```

🔧 Configuração
Antes de iniciar a aplicação, você precisa configurar as variáveis de ambiente.

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:
````
# env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
JWT_SECRET=sua_chave_secreta
````
🚀 Uso
Após configurar as variáveis de ambiente, você pode iniciar a aplicação.

```bash
# Rodando as migrações do Prisma
npx prisma migrate dev

# Iniciar a aplicação
npm run start:dev
```
📚 Rotas da API
Aqui estão as principais rotas da API:

### 🔐 Autenticação
- `POST /auth/login`: Realiza login e retorna um token JWT.

### 📂 Pastas
- `GET /folders`: Lista todas as pastas.
- `POST /folders`: Cria uma nova pasta.
- `DELETE /folders/:id`: Deleta uma pasta.

### 📦 Itens
- `GET /folders/:folderId/items`: Lista todos os itens de uma pasta.
- `POST /folders/:folderId/items`: Cria um novo item dentro de uma pasta.
- `DELETE /folders/:folderId/items/:itemId`: Deleta um item de uma pasta.
- 
🔐 Autenticação
A API utiliza JWT para autenticação. Após o login, você deve incluir o token JWT no cabeçalho das requisições para acessar as rotas protegidas.

Exemplo de cabeçalho de requisição:
```http
Authorization: Bearer seu_token_jwt
```
