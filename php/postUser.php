<?php
include_once('connection.php');

$id = filter_input(INPUT_POST, 'id');
$nome = filter_input(INPUT_POST, 'nome');
$sobrenome =  filter_input(INPUT_POST, 'sobrenome');
$cpf = filter_input(INPUT_POST, 'cpf');
$rg = filter_input(INPUT_POST, 'rg');
$cep = filter_input(INPUT_POST, 'cep');
$endereco = filter_input(INPUT_POST, 'endereco');

$selectTable = mysqli_query($con, "SELECT * FROM usuarios");

if($id == ''){
    //criar o comando pra salvar
    $selectTable = "INSERT INTO usuarios (nome, sobrenome, cpf, rg, cep, endereco) VALUES ('$nome', '$sobrenome', '$cpf', '$rg', '$cep', '$endereco')";
} else {
   $selectTable = "UPDATE usuarios set nome = '$nome' , sobrenome = '$sobrenome' , cpf = '$cpf' , rg = '$rg' , cep = '$cep' , endereco = '$endereco' WHERE id = $id;";
}

$result = mysqli_query($con, $selectTable);

if($result === true){
    echo "Usuário ".$nome." ".$sobrenome." cadastrado com sucesso!" ;
} else {
    echo "Problemas ao salvar o usuário!";
}
?>

