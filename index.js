const express = require('express');
const handlebars = require('express-handlebars');
const path = require ('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'aluno',
    database: 'LIVRO'
})

const server = express();


server.use(bodyParser());
server.use(express.static(path.join(__dirname, 'public')));
server.engine('handlebars', handlebars({defaultLayout: 'main'}));
server.set('view engine', 'handlebars');

server.get('/', function(req, res){
    res.render('Pagina_Inicial');
});

server.get('/chat', function(req, res){
    res.render('Chat');
});

server.get('/avaliacoes', function(req, res){
    res.render('Avaliacoes');
});

/*LIVRO*/
server.get('/usuario', function(req, res) {

    const sql = "SELECT ISBN, TITULO, EDITORA,VOLUME, EDICAO, DESCRIÇÃO, Situacao, Estado_do_livro, Genero,  NOME_AUTOR,  FROM Livro";
    
    conexao.query(sql, function(error, results, fields) {
        if(error) throw error;
        
        res.render('/usuario', { usuarios : results });
    });

    
});

server.get('/Cadastro_Livro', function(req, res) {
    res.render('Cadastro_Livro');
});

server.post('/Cadastro_Livro', function(req, res) {
    console.log(req.body);
    const sql = "INSERT INTO Livro VALUES(?,?,?,?,?,?,?,?,?,?);";
    const dados = [req.body.ISBN,req.body.titulo, req.body.editora, req.body.volume, req.body.edicao, req.body.descricao, req.body.situacao , req.body.estado, req.body.genero , req.body.autor];

    conexao.query(sql, dados, function(error, results, fields) {
        if(error) throw error;
        res.redirect('/');
    });
    
});

/*USUARIO*/
server.get('/usuario', function(req, res){
    const sql = "SELECT ID_USUARIO, NOME, NICKNAME, EMAIL, SENHA, DATA_NASC FROM Usuario";
    conexao.query(sql,function(error, results, fields) {
        if(error)
         throw error;

         res.render('/usuario', {usuarios: results});
   });
});

server.get('/Cadastro_Usuario', function(req, res){
  res.render('Cadastro_Usuario')
});

server.post('/Cadastro_Usuario', function(req, res) {
    console.log(req.body);
    const sql = "INSERT INTO Usuario VALUES (NULL,?,?,?,?,?);";
    const dados = [req.body.usuario, req.body.nome, req.body.email, req.body.senha, req.body.nascimento];

    conexao.query(sql, dados, function(error, results, fields) {
        if(error) throw error;
         res.redirect('/');
    });
});
module.exports = server;

server.listen(3000);
