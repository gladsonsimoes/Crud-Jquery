<?php

include_once('connection.php');

$con = mysqli_connect($host, $user, $pass);

$database = mysqli_select_db($con, $db); 

$sql = mysqli_query($con, "SELECT * FROM pessoas");

$pessoas = array();

if(isset($_POST['submit'])){
  $nome = $_POST['nome'];
  $sobrenome = $_POST['sobrenome'];
  $cpf = $_POST['cpf'];
  $rg = $_POST['rg'];
  $cep = $_POST['cep'];
  $endereco = $_POST['endereco'];
 
  $result = mysqli_query($con, "INSERT INTO pessoas(nome ,sobrenome ,cpf ,rg ,cep ,endereco) 
  VALUES ('$nome', '$sobrenome', '$cpf', '$rg', '$cep', '$endereco')");

}
?>