const { request } = require('express');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();
app.use(cors());
app.use(express.json()); //converte o json em objeto javascript, entendivel pela aplicação
app.use(routes);
app.use(errors());

module.exports = app;
/**
 * npm start para iniciar o servidor
 */

/**
 * Rota / Recurso. Em /users, o "/" é a rota e o "users" é o recurso, tabela ou entidade do banco de dados que queremos buscar os dados
 */

/**
 * Métodos HTTP:
 * GET: Buscar/listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação do backend
 * DELETE: Deletar uma informação do backend
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após '?' para filtros (/users?name=Fábio), paginação (/users?page=2) ou ambos(/users?page=2&name=Fábio). É do método GET e acessado por "const nomevariavel = request.query". Seu log é feito por "console.log(nomevariavel)".
 * Route Params: Parâmetros utilizados para identificar recursos. Serve para identificar um único recurso, por exemplo, buscar dados de um único usuário('/users/:1', id = 1 nesse caso). É do método GET e acessado por "const nomevariavel = request.params".Seu log é feito por "console.log(nomevariavel)".
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos. É do método POST e acessado por "const nomevariavel = request.body".Seu log é feito por "console.log(nomevariavel)".
 *  */ 

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server 
 * NoSQL: MongoDB, CouchDB, etc */ 

