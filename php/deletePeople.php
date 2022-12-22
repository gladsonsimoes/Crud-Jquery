<?php

include_once('connection.php');

$sql = mysqli_query($con, "SELECT * FROM pessoas");

if(isset($_POST['submit'])){
    $id = $_POST['id'];

    $result = mysqli_query($con, "DELETE FROM pessoas WHERE id = '$id'");
  }

?>