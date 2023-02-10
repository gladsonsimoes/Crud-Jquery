# CRUD JQUERY

Este é um crud simples feito com php , javascript e sua biblioteca Jquery

Passo a passo de como executar!

1 - Crie uma database com a seguinte tabela:

~~~sql
create database dbForm;
use dbForm;

create table usuarios (
    id int primary key auto_increment,
    nome varchar(20) not null,
    sobrenome varchar(50) not null,
    cpf varchar(20) not null,
    rg varchar(20) not null,
    cep varchar(20) not null,
    endereco varchar(20) not null
);
~~~

2 - vai no arquivo php/connection.php
