<?php
include_once('connection.php');

//Selecionar tabela
$selectTable = mysqli_query($con, "SELECT * FROM usuarios");

//criar um array
$usuarios = array();

//criar uma condição while e a variavel que conecta a tabela
while($linha = mysqli_fetch_assoc($selectTable)){
    $usuarios[] = $linha;
}

//imprimir as informações do array em formato JSON
echo json_encode($usuarios);
?>