require('dotenv').config()
const Pool = require('pg')
const pool = new Pool.Client(`${process.env.DB_URL}`)

module.exports = pool

//Conexão por paramertros
/*const pool = new Pool.Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
})*/

//Conexão por url

/*
//Realizando consulta em uma tabela de exemplo

db.query(`Select * from aluno`, (err, res)=>{
    
    if(!err){
        console.log(res.rows)
    } else {
        console.log(err.message);
    }
    db.end;
})
*/
  