$.get("php/getArray.php", function (data) {
  //alert(usuarios);
  var usuarios = JSON.parse(data);
  for (var i in usuarios) {
    $("tbody").append(
      "<tr>"
      + "<td>" + usuarios[i].id + "</td>"
      + "<td>" + usuarios[i].nome + "</td>"
      + "<td>" + usuarios[i].sobrenome + "</td>"
      + "<td>" + usuarios[i].cpf + "</td>"
      + "<td>" + usuarios[i].rg + "</td>"
      + "<td>" + usuarios[i].cep + "</td>"
      + "<td>" + usuarios[i].endereco + "</td>"
      + "<td><form action='editarCadastro.html'><button type='button' class='btn btn-warning' onclick=\"editar(" 
        + usuarios[i].id + ' , '
        + usuarios[i].nome + ' , '
        + usuarios[i].sobrenome + ' , '
        + usuarios[i].cpf + ' , '
        + usuarios[i].rg + ' , '
        + usuarios[i].cep + ' , '
        + usuarios[i].endereco + ");\" > Editar </button></form></td>"
      + "<td><button type='button' class='btn btn-danger'  onclick=\"excluir(" + usuarios[i].id + ");\"  >Excluir</button></td>"
      + "</tr>"
    );
  }
});

//está função irá adicionar os dados nos campos dos inputs!
function editar(id, nome, sobrenome, cpf, rg, cep, endereco) {
  $("input[name='id']").val(id);
  $("input[name='nome']").val(nome);
  $("input[name='sobrenome']").val(sobrenome);
  $("input[name='cpf']").val(cpf);
  $("input[name='rg']").val(rg);
  $("input[name='cep']").val(cep);
  $("input[name='endereco']").val(endereco);
};
