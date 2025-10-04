# API de Gerenciamento - Loja de Games 
# Descrição do Projetos

Este projeto consiste no desenvolvimento de uma API REST completa como parte da avaliação A1 da disciplina de **Construção de Backend (ADS28)**, ministrada pelo Prof. Gustavo Clay. O objetivo principal foi aplicar os conceitos de API Rest, rotas, métodos HTTP e colaboração em equipe utilizando Node.js, Express e Git.

A API simula o sistema de gerenciamento de uma loja de games, permitindo o controle sobre cinco recursos distintos e logicamente relacionados: Jogos, Desenvolvedoras, Plataformas, Clientes e Pedidos.

---

## 2. Tecnologias e Conceitos Aplicados

**Node.js & Express:** A API foi construída sobre o ecossistema Node.js, utilizando o framework Express para a criação do servidor e o gerenciamento das rotas.
**Princípios REST:** Foram seguidas as convenções REST para a criação dos endpoints, incluindo:
**Métodos HTTP** corretos para cada operação (`GET`, `POST`, `PUT`, `DELETE`).
**URLs semânticas** para identificar os recursos (ex: `/jogos`, `/jogos/:id`).
*Uso de **Status Codes** adequados para indicar o resultado das operações (ex: 200, 201, 404, 400).
* **Estrutura de Dados:** As requisições e respostas foram estruturadas em formato **JSON**. Os dados foram armazenados em memória (arrays) sem a necessidade de um banco de dados.
* **Validação:** Foi implementada uma validação básica de campos obrigatórios para as operações de criação e atualização.

---

## 3. Instruções de Instalação e Execução

Para executar este projeto em sua máquina local, siga os passos abaixo.

**Pré-requisitos:**
* Node.js (versão LTS)
* NPM
* Git
* nodemon
* express

**Passos:**
1.  Clone o repositório para sua máquina:
    ```bash
    git clone [https://github.com/Rafacosti/Trabalho-Back-End-.git]
    ```
2.  Navegue até a pasta raiz do projeto:
    ```bash
    cd [Trabalho-Back-End-]
    ```
3.  Instale as dependências necessárias:
    ```bash
    npm init -y
    npm install express
    npm install --save-dev nodemon

    ```
4.  Inicie o servidor:
    ```bash
    npm start
    ```
O servidor estará rodando em `http://localhost:3000`.

---

## 4. Endpoints da API

A seguir, a lista completa dos 25 endpoints implementados no projeto, com exemplos de requisição e resposta.

### Recurso: Jogos (`/jogos`)
* `GET /jogos`: Lista todos os jogos.
* `GET /jogos/:id`: Busca um jogo por ID.
* `POST /jogos`: Cria um novo jogo.
    * **Exemplo de Requisição (JSON):**
        ```json
        {
            "titulo": "The Legend of Zelda: Tears of the Kingdom",
            "ano": 2023,
            "desenvolvedoraId": 1,
            "plataformaId": 1
        }
        ```
    * **Exemplo de Resposta (JSON):**
        ```json
        {
            "id": 3,
            "titulo": "The Legend of Zelda: Tears of the Kingdom",
            "ano": 2023,
            "desenvolvedoraId": 1,
            "plataformaId": 1
        }
        ```
* `PUT /jogos/:id`: Atualiza um jogo.
* `DELETE /jogos/:id`: Deleta um jogo.

*(A estrutura de rotas se repete para os recursos a seguir)*

### Recurso: Desenvolvedoras (`/desenvolvedoras`)
* `GET /desenvolvedoras`, `GET /desenvolvedoras/:id`, `POST /desenvolvedoras`, `PUT /desenvolvedoras/:id`, `DELETE /desenvolvedoras/:id`

### Recurso: Plataformas (`/plataformas`)
* `GET /plataformas`, `GET /plataformas/:id`, `POST /plataformas`, `PUT /plataformas/:id`, `DELETE /plataformas/:id`

### Recurso: Clientes (`/clientes`)
* `GET /clientes`, `GET /clientes/:id`, `POST /clientes`, `PUT /clientes/:id`, `DELETE /clientes/:id`

### Recurso: Pedidos (`/pedidos`)
* `GET /pedidos`, `GET /pedidos/:id`, `POST /pedidos`, `PUT /pedidos/:id`, `DELETE /pedidos/:id`

---

## 5. Ferramentas de Desenvolvimento e Colaboração

**Git & GitHub:** O versionamento do código foi realizado com o Git e a colaboração da equipe foi gerenciada através de um repositório único no GitHub. Foram criadas **Issues detalhadas** para cada etapa do desenvolvimento , atribuídas aos membros da equipe para organizar o fluxo de trabalho.
 **Postman:** Foi utilizada a ferramenta Postman para testar todos os endpoints da API. Uma **collection completa** foi criada, contendo exemplos de requisições  e o arquivo de exportação `.json` foi incluído neste repositório, conforme solicitado.

