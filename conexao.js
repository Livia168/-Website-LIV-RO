const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'aluno',
    database: 'LIVRO'
});

module.exports = conexao;