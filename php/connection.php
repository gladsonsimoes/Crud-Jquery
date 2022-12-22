<?php 

//Configurar PHP com o banco de dados

header("Content-Type: application/json");

$host = 'localhost:3312'; 
$db= 'dbgladson'; 
$user = 'root' ; 
$pass = '' ; 

$con = mysqli_connect($host, $user, $pass);

$database = mysqli_select_db($con, $db); 
?>
