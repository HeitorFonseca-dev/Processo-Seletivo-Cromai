
function calcular() {
    let valorHipotenusa = document.getElementById("inputHipotenusa").value;
    let valorCatetoOposto = document.getElementById("inputCatetoOposto").value;
    let valorCatetoAdjacente = document.getElementById("inputCatetoAdjacente").value;

    valorHipotenusa = valorHipotenusa ? valorHipotenusa : 1.0;
    valorCatetoOposto = valorCatetoOposto ? valorCatetoOposto : 1.0;
    valorCatetoAdjacente = valorCatetoAdjacente ? valorCatetoAdjacente : 1.0;

    fetch('http://127.0.0.1:5000/hipotenusa/' + parseFloat(valorCatetoAdjacente).toFixed(1) + '/' + parseFloat(valorCatetoOposto).toFixed(1) + '/' + parseFloat(valorHipotenusa).toFixed(1) + '/')
        .then((response) => response.json())
        .then((data) => document.getElementById("resultado").value = data);
}

$(document).on("click", "#calcular", function () {

    var quantidadePreenchido = $('.opcao:text').filter(function (input) {
        return $(this).val() != "";
    }).length;

    if (quantidadePreenchido != 2) {
        alert("Preencha dois campos");
    } else {
        calcular();
    }
});
