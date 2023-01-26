<?php
include_once('connection.php');

$id = filter_input(INPUT_GET, 'id');

$selectTable = mysqli_query($con, "SELECT * FROM usuarios WHERE id = '$id'");

if($selectTable == true){
    echo "";
} else {
    echo "Erro!";
}
?>