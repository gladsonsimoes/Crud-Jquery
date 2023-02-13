$('#form').submit(function (event) {
  //evitar a submissão do formulário de cadastro
  event.preventDefault();
  var id = $("input[name='id']").val();
  var nome = $("input[name='nome']").val();
  var sobrenome = $("input[name='sobrenome']").val();
  var cpf = $("input[name='cpf']").val();
  var rg = $("input[name='rg']").val();
  var cep = $("input[name='cep']").val();
  var endereco = $("input[name='endereco']").val();

  $.post('php/postUser.php',
    { id: id, nome: nome, sobrenome: sobrenome, cpf: cpf, rg: rg, cep: cep, endereco: endereco },
    function (data) {
      alert(data);
    }).fail(function () {
      alert("Falha ao tentar executar o comando!");
    }).done(function () {
      limparForm();
    });
});

//função pra limpar o formulario depois que for enviado
function limparForm() {
  $("input[name='id']").val('');
  $("input[name='nome']").val('');
  $("input[name='sobrenome']").val('');
  $("input[name='cpf']").val('');
  $("input[name='rg']").val('');
  $("input[name='cep']").val('');
  $("input[name='endereco']").val('');
}


