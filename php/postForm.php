<?php
include_once('connection.php');

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

header("Location: ../table"); //redirecionar para table
?>