# 📝 Projeto: ToDo API com Autenticação JWT
API RESTful para gerenciamento de tarefas com autenticação baseada em JWT. Desenvolvido com Node.js, Express, e TypeScript, seguindo boas práticas de organização por camadas (controllers, services, middleware, etc).


## 🔐 Funcionalidades

 • Login com email e senha (mockado)

 • Geração de token JWT

 • Middleware para autenticação via token

 • CRUD de tarefas (com proteção via token)
 
 • ERROS personalizados (para melhorar o tratamento de erros)



## 🚀 Tecnologias

 - Node.js

 - Express

 - TypeScript

 - JWT (jsonwebtoken)

## 📡 Rotas principais
🔑 Autenticação


| Método | Rota               | Descrição                        |
|--------|--------------------|----------------------------------|
| POST   | `/authentication`  | Login e geração de token         |



### Payload
```bash
{
  "email": "usuario@exemplo.com",
  "password": "senha123"
}
```
### Resposta

```bash
{
  "token": "seu_jwt_token"
}

```
## ✅ Tarefas (protegidas por token)

| Método | Rota           | Descrição                     |
|--------|----------------|-------------------------------|
| GET    | `/tasks`       | Lista todas as tarefas        |
| POST   | `/tasks`       | Cria nova tarefa              |
| PATCH  | `/tasks/:id`   | Atualiza uma tarefa           |
| PATCH  | `/tasks/:id/complete` | Marca como completa |
| DELETE | `/tasks/:id`   | Remove uma tarefa             |


## 📌 Observações
- O sistema de login está mockado com email e senha fixos por enquanto.

- A chave JWT fica isolada no arquivo config/jwt-config.ts.

- Esse projeto é uma base para aprendizado e evolução de APIs RESTful com autenticação.

- Este sistema ainda está em desenvolvimento. Pretendo adicionar muitas novas funcionalidades em breve.



## ✅ Próximos passos
- Adicionar banco de dados (PostgreSQL ou MySQL)

- Configuração do banco com TypeORM 

- Criptografar senhas com bcrypt

- Criar pasta dtos/ para melhorar o tipos esperados nas entradas e saida

- Adicionar subtarefas, tags, filtros
