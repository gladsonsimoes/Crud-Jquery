<?php 
include_once('connection.php');

$id = filter_input(INPUT_GET, 'id');

$selectTable = mysqli_query($con, "DELETE FROM usuarios WHERE id = $id;");

if($selectTable == true){
    echo "Usuário Deletado com Sucesso!";
} else {
    echo "Problemas ao excluir o usuário!";
}