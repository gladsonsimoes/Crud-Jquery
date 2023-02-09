<?php 
//Configurar PHP com o banco de dados
$host = 'localhost:3312'; //3312 é a porta do meu banco de dados
$db = 'dbForm'; 
$user = 'root' ; 
$pass = '' ; 

$con = mysqli_connect($host, $user, $pass);

$database = mysqli_select_db($con, $db);

?>
