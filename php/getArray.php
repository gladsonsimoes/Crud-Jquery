
<?php

include_once('connection.php');

$con = mysqli_connect($host, $user, $pass);

$database = mysqli_select_db($con, $db); 

//Selecionar tabela e imprimir as informações

$sql = mysqli_query($con, "SELECT * FROM pessoas");

$pessoas = array();

while($linha = mysqli_fetch_assoc($sql)){
    $pessoas[] = $linha;
}

echo json_encode($pessoas); //IMPRIMIR as informações da tabela da database na table.html
?>