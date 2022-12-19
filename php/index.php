<?php 

//Configurar PHP com o banco de dados

header("Content-Type: application/json");

$host = 'localhost:3309'; 
$db= 'dbgladson'; 
$user = 'root' ; 
$pass = 'usbw' ; 

$con = mysqli_connect($host, $user, $pass);

$database = mysqli_select_db($con, $db); 

//Selecionar tabela e imprimir as informações

$sql = mysqli_query($con, "SELECT * FROM pessoas");

$pessoas = array();

while($linha = mysqli_fetch_assoc($sql)){
    $pessoas[] = $linha;
}

echo json_encode($pessoas, JSON_UNESCAPED_UNICODE); //imprimindo as informações da tabela pessoas 

//========================== PEGAR DADOS =================================//

 if(isset($_POST['submit'])){

//   include_once('config.php'); //para arquivo diferente

  $nome = $_POST['nome'];
  $sobrenome = $_POST['sobrenome'];
  $cpf = $_POST['cpf'];
  $rg = $_POST['rg'];
  $cep = $_POST['cep'];
  $endereco = $_POST['endereco'];
 
  $result = mysqli_query($con, "INSERT INTO pessoas(nome ,sobrenome ,cpf ,rg ,cep ,endereco) VALUES ('$nome', '$sobrenome', '$cpf', '$rg', '$cep', '$endereco')");
 }

?>