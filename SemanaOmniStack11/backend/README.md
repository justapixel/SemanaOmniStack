# Overview
A API do backend é um recurso Node.js-based para comunicar com o frontend. Você pode usá-la para acessar dados e definir certas propriedades para usuários.  
Esta foi criada para servir à 11ª Semana da Omnistack desenvolvida pela Rocketseat.  
O Backend foi desenvolvido pensando-se no conceito DRY (Don't Repeat Yourself) e arquitetura MVC.

# Models: ONG
Este é o Model de ONGS (Usuário da aplicação)  

## Estrutura
```js
{
  "_id": "<UID Hexadecimal Aleatório>",
  "name": "<Nome da ONG>",
  "email": "<Email da ONG>",
  "whatsapp": "<Telefone de contato>",
  "city": "<Cidade>",
  "uf": "<Estado>",
}
```
# Controllers
Aqui estão listados os controles de API do Be The Hero, seus métodos, parâmetros e estrutura.

## Ongs
As Ongs são os usuários do sistema.

| Método       | Estrutura            | Ação                                   | Parâmetros                       | Retorno       |
| ------------ | -------------------- | -------------------------------------- | -------------------------------- | ------------- |
| [GET][1]     | `/ongs`              | Lista todos os usuários cadastrados    | **Nenhum**                       | JSON/Usuários |
| [POST][2]    | `/ongs    `          | Cadastrar um usuário no banco de dados | JSON/name,email,whatsapp,city,uf | JSON/Usuário  |

## Session
Válida se o usuário de id: x, possui um cadastro no banco de dados

| Método       | Estrutura           | Ação                                  | Parâmetros          | Retorno       |
| ------------ | ------------------- | ------------------------------------- | ------------------- | ------------- |
| [POST][3]    | `/sessions`         | Válida o cadastro de um único usuário | JSON/id             | JSON/Usuário  |


## Incident
Com este módulo é possível listar, inserir ou deletar um caso no banco.

| Método         | Estrutura           | Ação                                | Parâmetros                                         | Retorno       |
| -------------- | ------------------- | ----------------------------------- | -------------------------------------------------- | ------------- |
| [GET][4]       | `/incidents`        | Lista todos os Casos cadastrados    | Query/page                                         | JSON/Casos    |
| [POST][5]      | `/incidents`        | Cadastrar um novo Caso              | JSON/title,description,value, Header/authorization | JSON/Caso     |
| [DELETE][6]    | `/incidents/id`     | Deleta um Caso                      | Query/id, Header/authorization                     | STATUS/204    |


## Profile
Controller responsável por listar todos os casos cadastrados de um determinado usuário na aplicação.

| Método       | Estrutura           | Ação                                              | Parâmetros                       | Retorno       |
| ------------ | ------------------- | ------------------------------------------------- | -------------------------------- | ------------- |
| [GET][7]     | `/profile`          | Lista os casos cadastrados por um único usuário   | Header/authorization             | JSON/Casos    |


# Exemplos
## Index
```http
GET /incidents HTTP/1.1
```
<details>
<summary><code>HTTP/1.1 200 OK</code></summary>

```json
[
  {
    "id": 1,
    "title": "Caso 1",
    "description": "Detalhes do caso",
    "value": 120,
    "ong_id": "d1355371",
    "name": "APAD",
    "email": "contato@apad.com.br",
    "whatsapp": "928492938",
    "city": "Rio do Sul",
    "uf": "SC"
  },
  {
    "id": 2,
    "title": "Caso 2",
    "description": "Detalhes do caso",
    "value": 120,
    "ong_id": "d1355371",
    "name": "APAD",
    "email": "contato@apad.com.br",
    "whatsapp": "928492938",
    "city": "Rio do Sul",
    "uf": "SC"
  },
]
```
</details>

------------------------------------------------------------------------------------------------------------------------

## Create
```http
POST /incidents HTTP/1.1
```
<details>
<summary><code>HTTP/1.1 200 OK</code></summary>

```json
{
  "id": 3
}
```
</details>

------------------------------------------------------------------------------------------------------------------------

## Delete
```http
DELETE /incidents/2 HTTP/1.1
```
<details>
<summary><code>HTTP/1.1 204 No Content</code></summary></details>



------------------------------------------------------------------------------------------------------------------------

[1]: #
[2]: #
[3]: #
[4]: #index
[5]: #create
[6]: #delete
[7]: #
