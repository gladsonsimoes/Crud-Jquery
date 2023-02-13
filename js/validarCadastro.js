function validar() {
  //validar cpf
  var cpf = document.getElementById("cpf").value;
  document.getElementById("cpf").value = cpf.replace(/[^0-9]/g, '');

  //validar rg
  var rg = document.getElementById("rg").value;
  document.getElementById("rg").value = rg.replace(/[^0-9]/g, '');

  //validar cep
  var cep = document.getElementById("cep").value;
  document.getElementById("cep").value = cep.replace(/[^0-9]/g, '');

}