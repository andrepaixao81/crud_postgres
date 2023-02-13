const pool = require('../db/dbpostgres')

//Endpoint GET
const getAluno = (request, response) => {
    pool.query('SELECT * FROM aluno ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  //Endpoint GET by ID
  
  const getAlunoById = (request, response) => {
    const id = request.params.id
  
    pool.query('SELECT * FROM aluno WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  //Endpoint Create
  const createAluno = (request, response) => {
    const { nome, idade, n1, n2 } = request.body
  
    pool.query('INSERT INTO aluno (nome, idade, n1, n2) VALUES ($1, $2, $3, $4)', [nome, idade, n1, n2], (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Aluno criado com sucesso.`)
    })
  }
  
  //Endpoint Upadate
  const updateAluno = (request, response) => {
    const id = request.params.id
    const {nome, idade, n1, n2} = request.body
  
    pool.query(
      'UPDATE aluno SET nome = $1, idade = $2, n1 = $3, n2 = $4 WHERE id = $5',
      [nome, idade, n1, n2, id],
      (error, result) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Aluno ${id} atualizado com sucesso.`)
      }
    )
  }
  
  //Endpoint Delete
  const deleteAluno = (request, response) => {
    const id = request.params.id
  
    pool.query('DELETE FROM aluno WHERE id = $1', [id], (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Aluno removido com sucesso com o identificador: ${id}`)
    })
  };

  //exportando os modulos
  
  module.exports = {
    getAluno,
    getAlunoById,
    createAluno,
    updateAluno,
    deleteAluno
};
