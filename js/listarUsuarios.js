$.get("php/getUser.php", function (data) {
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
      + "<td><button type='submit' class='btn btn-warning' onclick=\"editar('" + usuarios[i].id + "' , '" + usuarios[i].nome + "' , '" + usuarios[i].sobrenome + "' , '" + usuarios[i].cpf + "' , '" + usuarios[i].rg + "' , '" + usuarios[i].cep + "' , '" + usuarios[i].endereco + "');\" > Editar </button></td>"
      + "<td><button type='button' class='btn btn-danger' onclick=\"excluir(" + usuarios[i].id + ");\"  >Excluir</button></td>"
      + "</tr>"
    );
  }
});

function excluir(id) {
  var excluir = confirm("Tem certeza que deseja excluir o usuário ID " + id + "?");
  if (excluir) {
    $.get("php/deleteUser.php?id=" + id, function (data) {
      alert(data);
    })
      .fail(function () {
        alert("Erro");
      })
      .done(function () {
        window.location.href = "table"
      })
  }
}

function editar(id, nome, sobrenome, cpf, rg, cep, endereco) {
  $("input[name=id]").val(id);
  $("input[name=nome]").val(nome);
  $("input[name=sobrenome]").val(sobrenome);
  $("input[name=cpf]").val(cpf);
  $("input[name=rg]").val(rg);
  $("input[name=cep]").val(cep);
  $("input[name=endereco]").val(endereco);

  $("input[name=nome]").focus();
}

//formulario especifico para edição
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

  $.post("php/PutUser.php",
    { id: id, nome: nome, sobrenome: sobrenome, cpf: cpf, rg: rg, cep: cep, endereco: endereco },
    function (data) {
      alert(data);
    }).fail(function () {
      alert("Falha ao tentar executar o comando!");
    }).done(function () {
      window.location.href = "table"
    });
});