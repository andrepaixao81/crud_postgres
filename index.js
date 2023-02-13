//.env
require('dotenv').config()

//Banco de dados
const pool = require('./src/db/dbpostgres')

//Controller
const controller = require('./src/controllers/controller');

//express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Rotas
app.get('/dados', controller.getAluno)
app.get('/dados/:id', controller.getAlunoById)
app.post('/dados', controller.createAluno)
app.put('/dados/:id', controller.updateAluno)
app.delete('/dados/:id', controller.deleteAluno)

//Ativar servidor
app.listen(process.env.PORT_EXPRESS, () => {
  console.log(`Servidor rodando na porta de conexão ${process.env.PORT_EXPRESS}.`)
});

//Testar conexão com o banco de dados

console.log("Conectando com o banco de dados...")
pool.connect();
console.log("Conexão realizada com sucesso!")