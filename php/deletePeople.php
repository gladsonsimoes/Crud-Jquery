<?php

include_once('connection.php');



$result = mysqli_query($database, "DELETE FROM usuarios WHERE id = '$id'");


header("Location: ../table"); //redirecionar para table
?>
