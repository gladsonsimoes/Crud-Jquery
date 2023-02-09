<?php
include_once('connection.php');

$id = filter_input(INPUT_GET, 'id');

$selectTable = mysqli_query($con, "SELECT * FROM usuarios WHERE id = $id;");

$usuario = array();

while($linha = mysqli_fetch_assoc($selectTable)){
    $usuario[] = $linha;
}

echo json_encode($usuario);

