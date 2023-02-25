# CRUD SIMPLES

<h4> Este é um crud simples feito com php , javascript e sua biblioteca Jquery <a href="https://youtu.be/nKoe722XS74">veja o video do projeto </a> ou <a href="https://gladsonsimoes.github.io/Crud-Simples/"> pré visualizar </a> </h4>

## Passo a passo de como executar (Localhost):

<b>Passo 1</b> - Crie uma database no mysql com a seguinte tabela:

~~~mysql
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

<b>Passo 2</b> - vai no arquivo php/connection.php e altere as configurações necessárias

~~~php
<?php 
//Configurar PHP com o banco de dados

$host = 'localhost:3312'; //<- Altere a porta 3312 de acordo com a porta do seu banco de dados
$db = 'dbForm'; // sua database criada ( esta database esta de acordo com o codigo do passo 1)
$user = 'root' ; // Altere o usuario se for diferente
$pass = '' ; // Coloque sua senha do banco de dados se caso tiver!

$con = mysqli_connect($host, $user, $pass);

$database = mysqli_select_db($con, $db);

?>
~~~

<b>Passo 3</b> - Coloque todos os arquivos na pasta htdocs do xampp , ou ser for diferente do xampp é só colocar na pasta que irá mostrar no localhost

<b>Passo 4</b> - Depois de ter colocado os arquivos ative o <b> Apache </b> e o <b> Mysql </b> , e digite <b> localhost/crud-jquery</b> em qualquer navegador e pronto!
