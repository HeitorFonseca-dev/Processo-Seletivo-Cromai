
    function calcular() {
        var valorHipotenusa = document.getElementById("inputHipotenusa").value;
        var valorCatetoOposto = document.getElementById("inputCatetoOposto").value;
        var valorCatetoAdjascente = document.getElementById("inputCatetoAdjascente").value;

        valorHipotenusa = Math.pow(valorCatetoOposto, 2) + Math.pow(valorCatetoAdjascente, 2);

      

        document.getElementById("resultado").value = valorHipotenusa;

         console.log (Resultado)
    }



