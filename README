
ℹ️ Observação: Este projeto foi criado com a finalidade de aprendizado e estudo.

Esta é uma API para gerenciamento de usuários, que utiliza Docker Compose para facilitar a configuração e execução. A API permite operações CRUD (Criar, Ler, Atualizar, Deletar) em um banco de dados PostgreSQL.

## Tecnologias

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework web para Node.js.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Docker**: Plataforma para automação de aplicações em contêineres.
- **Docker Compose**: Ferramenta para definir e executar aplicações Docker multi-contêiner.

## Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
/project-root
|-- /src
|   |-- /controllers  # Controladores da API
|   |-- /services      # Lógica de negócios
|   |-- /repositories   # Interação com o banco de dados
|   |-- /models        # Modelos de dados
|-- .env               # Variáveis de ambiente
|-- docker-compose.yml  # Configuração do Docker Compose
|-- package.json       # Dependências e scripts do projeto
```

## Configuração

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/viniciusofc/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Crie um arquivo `.env`** na raiz do projeto e defina suas variáveis de ambiente:

   ```plaintext
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=12345
   POSTGRES_DB=ecommerce
   POSTGRES_HOST=localhost
   POSTGRES_PORT=5490
   PORT_SERVER=3000
   ```

3. **Verifique o arquivo `docker-compose.yml`** para garantir que as configurações do contêiner PostgreSQL estão corretas.

## Execução

Para iniciar o banco de dados, execute o seguinte comando:

```bash
docker-compose up
```
Este comando irá baixar a imagem do PostgreSQL, criar o contêiner, configurar o banco de dados 'ecommerce' e criar a tabela 'users'.

Após isso, utilize esse comando para instalar as dependências do projeto:

```bash
npm install
```

Em seguida, para iniciar a API utilize esse comando:
```bash
npm run start:watch
``` 

## Endpoints da API

A API possui os seguintes endpoints:

Parece que você está configurando rotas para uma API em Express. Aqui está um exemplo de como você pode documentar essas rotas no README da sua API:

---

## Rotas da API

### 1. Obter Todos os Usuários
- **Endpoint:** `GET /all/users`
- **Descrição:** Retorna uma lista de todos os usuários cadastrados.
- **Resposta de Sucesso:** `200 OK` com um array de usuários.

### 2. Obter Usuário por ID
- **Endpoint:** `GET /user/:id`
- **Descrição:** Retorna os detalhes de um usuário específico com base no ID fornecido.
- **Parâmetros:**
  - `id`: O ID do usuário a ser buscado.
- **Resposta de Sucesso:** `200 OK` com os detalhes do usuário.
- **Resposta de Erro:** `404 Not Found` se o usuário não for encontrado.

### 3. Criar um Novo Usuário
- **Endpoint:** `POST /create/user`
- **Descrição:** Cria um novo usuário com os dados fornecidos no corpo da requisição.
- **Middleware:** `authMiddleware` (autenticação necessária).
- **Corpo da Requisição:** JSON com os detalhes do usuário (ex.: nome, e-mail).
- **Resposta de Sucesso:** `201 Created` com os detalhes do novo usuário.
- **Resposta de Erro:** `400 Bad Request` se os dados estiverem incorretos.

### 4. Deletar um Usuário por ID
- **Endpoint:** `DELETE /delete/user/:id`
- **Descrição:** Deleta um usuário específico com base no ID fornecido.
- **Parâmetros:**
  - `id`: O ID do usuário a ser deletado.
- **Middleware:** `authMiddleware` (autenticação necessária).
- **Resposta de Sucesso:** `204 No Content` se o usuário for deletado com sucesso.
- **Resposta de Erro:** `404 Not Found` se o usuário não for encontrado.


### Exemplo de Uso

#### Obter todos os usuários

```http
GET /all/users
```

#### Criar um novo usuário

```http
POST /create/user
Content-Type: application/json

{
  "name": "Vinicius Reis",
  "email": "vinicius@example.com"
}
```

### Dependências

As dependências do projeto estão listadas no arquivo `package.json`:

```json
"dependencies": {
  "dotenv": "^16.4.5",
  "express": "^4.21.1",
  "pg": "^8.13.0"
}
```

### Scripts

Os scripts disponíveis no `package.json`:

- `dist`: Compila o código TypeScript para JavaScript.
- `start:dev`: Inicia o servidor em modo de desenvolvimento.
- `start:watch`: Inicia o servidor em modo de observação (watch).
- `start:dist`: Compila o projeto e inicia a versão distribuída.

