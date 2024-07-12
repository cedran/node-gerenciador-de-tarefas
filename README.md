# Gerenciador de Tarefas

Este é um aplicativo CRUD (Create, Read, Update, Delete) para gerenciar tarefas. Ele utiliza Node.js, Express e SQLite para manipulação de dados. O projeto está containerizado utilizando Docker.

## Requisitos

- Node.js
- Docker
- Docker Compose

## Configuração do Projeto

### Clonar o Repositório

```sh
git clone https://github.com/seu-usuario/gerenciador-de-tarefas.git
cd gerenciador-de-tarefas
```

### Instalar Dependências
```
npm install
```

### Executar a Aplicação Localmente
```
node src/app.js
```

A aplicação estará disponível em http://localhost:3000.

### Usar Docker para Rodar a Aplicação
```
docker-compose up --build
```

A aplicação estará disponível em http://localhost:3000.

### Endpoints da API
- **POST /tasks:** Criar uma nova tarefa.
    - Corpo da requisição: `{ "title": "Título", "description": "Descrição" }`
- **GET /tasks:** Listar todas as tarefas.
- **PUT /tasks/:id:** Atualizar uma tarefa.
    - Corpo da requisição: `{ "title": "Novo Título", "description": "Nova Descrição" }`
- **DELETE /tasks/:id:** Deletar uma tarefa.


### Estrutura do Projeto
```
gerenciador-de-tarefas/
├── docker-compose.yml
├── Dockerfile
├── package.json
├── README.md
└── src/
├── app.js
├── controllers/
│   └── taskController.js
├── models/
│   └── task.js
├── routes/
│   └── tasks.js
└── tasks.json
```

### Contribuição
Sinta-se à vontade para contribuir para este projeto. Basta abrir um pull request com as mudanças propostas.

### Licença
Este projeto está licenciado sob a Licença MIT.