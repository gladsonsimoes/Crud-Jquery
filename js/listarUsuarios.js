$.get("php/getArray.php", function (data) {
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
      + "<td><button type='button' class='btn btn-warning' onclick=\"editar("
      + usuarios[i].id + ' , '
      + usuarios[i].nome + ' , '
      + usuarios[i].sobrenome + ' , '
      + usuarios[i].cpf + ' , '
      + usuarios[i].rg + ' , '
      + usuarios[i].cep + ' , '
      + usuarios[i].endereco + ");\" > Editar </button></td>"
      + "<td><button type='button' class='btn btn-danger'  onclick=\"excluir(" + usuarios[i].id + ");\"  >Excluir</button></td>"
      + "</tr>"
    );
  }


});


function excluir(id) {
  var excluir = confirm("Tem certeza que deseja excluir o usuário ID " + id + "?");
  if (excluir) {
    $.get("php/excluirusuario.php?id=" + id, function (data) {
      alert(data);
    })
      .fail(function () {
        alert("Erro");
      })
      .done(function () {
        window.location.href = "table.html"
      })
  } 
}

// function editar(id, nome, sobrenome, cpf, rg, cep, endereco) {
//   var editar = confirm("Editar Usuário " + id + "?");
//   if (editar){
//     $.get('php/Editar_Usuario.php?id=' + id + "?nome=" + nome + "?sobrenome=" + sobrenome + "?cpf=" + cpf + "?rg=" + rg + "?cep" + cep + "?endereco=" + endereco , function(data){
//          alert(data);
//     })
//     .fail(function(){
//       alert("Erro");
//     })
//     .done(function(){

//     })
//   }
// };


//está função irá adicionar os dados nos campos dos inputs!
// function editar(id, nome, sobrenome, cpf, rg, cep, endereco) {
//       $("input[name='id']").val(id);
//       $("input[name='nome']").val(nome);
//       $("input[name='sobrenome']").val(sobrenome);
//       $("input[name='cpf']").val(cpf);
//       $("input[name='rg']").val(rg);
//       $("input[name='cep']").val(cep);
//       $("input[name='endereco']").val(endereco);
// };

// $.post("php/postForm",
// { id: id, nome: nome, sobrenome: sobrenome, cpf: cpf, rg: rg, cep: cep, endereco: endereco },
// function (data) {
//   alert(data);
// }).fail(function () {
//   alert("Falha ao tentar executar o comando!");
// }).done(function () {
//   limparForm();
// });
// });


//está função irá adicionar os dados nos campos dos inputs!
// function editar(id, nome, sobrenome, cpf, rg, cep, endereco) {
//   $.get('php/Editar_Usuario.php?id=' + id + "?nome=" + nome + "?sobrenome=" + sobrenome + "?cpf=" + cpf + "?rg=" + rg + "?cep" + cep + "?endereco=" + endereco , function(data){
         
//   });
// };

