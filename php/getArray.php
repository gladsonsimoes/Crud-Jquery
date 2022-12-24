
<?php

include_once('connection.php');

//Selecionar tabela e imprimir as informações

$sql = mysqli_query($con, "SELECT * FROM pessoas");

$pessoas = array();

while($linha = mysqli_fetch_assoc($sql)){
    $pessoas[] = $linha;
}

echo json_encode($pessoas); //IMPRIMIR as informações da tabela da database na table
?>