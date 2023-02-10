<?php
include_once('connection.php');

$id = filter_input(INPUT_GET, 'id');

$selectTable = mysqli_query($con, "SELECT * FROM usuarios WHERE id = $id;");

$usuario = array();

//criar uma condição while e a variavel que conecta a tabela
while($linha = mysqli_fetch_assoc($selectTable)){
    $usuarios[] = $linha;
}

//imprimir as informações do array em formato JSON
echo json_encode($usuarios);


// if($id == true){
//     echo "Usuario Selecionado!";
// } else {
//     echo "Problemas ao excluir o usuário!";
// }



