//validação

function validar() {
  //validar cpf
  var cpf = document.getElementById("cpf").value;
  document.getElementById("cpf").value = cpf.replace(/[^0-9]/g, '')
   
  //validar rg
  var rg = document.getElementById("rg").value;
  document.getElementById("rg").value = rg.replace(/[^0-9]/g, '');

  //validar cep
  var cep = document.getElementById("cep").value;
  document.getElementById("cep").value = cep.replace(/[^0-9]/g, '')

  //validar nome --> Problemas com nome de acento
  // var nome = document.getElementById("nome").value;
  // document.getElementById("nome").value = nome.replace(/[^aA-zZ]/g, '')

  //validar sobrenome --> Problemas  em ignorar espaço e acento na letra
  // var sobrenome = document.getElementById("sobrenome").value;
  // document.getElementById("sobrenome").value = sobrenome.replace(/[^aA-zZ]/g, ' ')

}
//Edição de cadastro

function editarCadastro() {

  //pegar as informações e editar
  
}


