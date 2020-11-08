create database if not exists  'LIVRO' default character set utf8 ;
use 'LIVRO';

create table if not exists 'LIVRO'.'Livro' ( 'ISBN' char(17) not null,
                                    'TITULO' varchar (60) not null,
								    'EDITORA' varchar (60) not null,
                                    'VOLUME' varchar (60) not null,
                                    'EDICAO' varchar (60) not null, 
                                    'DESCRIÇÃO' VARCHAR(1000) not null,
                                    'Situacao'varchar(60) not null,
                                    'Estado_do_livro' varchar (60) not null,
                                    'Genero' varchar(60) not null,
                                    'NOME_AUTOR' varchar(60) not null,
                                    primary key ('ISBN') )
                                    ENGINE = InnoDB;

                                  
create table if not exists 'LIVRO'.'Usuario' ('ID_USUARIO' int not null AUTO_INCREMENT,
									'NOME' varchar (45) not null,
									'NICKNAME' varchar (45) not null,
									'EMAIL' varchar (70) not null,
									'SENHA' varchar (20) not null, 
									'DATA_NASC' datetime not null,
									primary key ('ID_USUARIO') )
                                    ENGINE = InnoDB;
                                   