// $.get("php/editUsuario.php", function (data) {
//     var usuarios = JSON.parse(data); 
//     for (var i in usuarios){
//         $("tbody").append(
//            +  $("input[name='id']").val(usuarios[i].id)
//            +  $("input[name='nome']").val(usuarios[i].nome)
//            +  $("input[name='sobrenome']").val(usuarios[i].sobrenome)
//            +  $("input[name='cpf']").val(usuarios[i].cpf)
//             + $("input[name='rg']").val(usuarios[i].rg)
//             + $("input[name='cep']").val(usuarios[i].cep)
//             + $("input[name='endereco']").val(usuarios[i].endereco)
//         )
//     }
// });

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

    $.post("php/postForm.php",
        { id: id, nome: nome, sobrenome: sobrenome, cpf: cpf, rg: rg, cep: cep, endereco: endereco },
        function (data) {
            alert(data);
        }).fail(function () {
            alert("ERRO! Problemas em publicar no banco de dados");
        }).done(function () {
            window.location.href = "table.html";
        });
});
