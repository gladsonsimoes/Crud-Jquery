# CRUD JQUERY

Este é um crud simples feito com php , javascript e sua biblioteca Jquery

Passo a passo de como executar!

Passo 1 - Crie uma database no mysql com a seguinte tabela:

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

Passo 2 - vai no arquivo php/connection.php e altere as configurações necessárias

~~~php
<?php 
//Configurar PHP com o banco de dados

$host = 'localhost:3312'; <- Altere a porta 3312 de acordo com a porta do seu banco de dados
$db = 'dbForm'; <- sua database criada ( esta database esta de acordo com o codigo do passo 1)
$user = 'root' ; <- Altere o usuario se for diferente
$pass = '' ; <- Coloque sua senha se caso tiver!

$con = mysqli_connect($host, $user, $pass);

$database = mysqli_select_db($con, $db);

?>
~~~

Passo 3 - Coloque todos os arquivos na pasta htdocs do xampp , ou ser for diferente do xampp é só colocar na pasta que irá mostrar no localhost

Passo 4 - Depois de ter colocado, e ative o <b> apache </b> e o <b> mysql </b> do xampp e depois digite localhost em qualquer navegador!
