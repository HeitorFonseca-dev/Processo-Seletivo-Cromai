
    function calcular(CatetoOposto) {
        var valorHipotenusa = document.getElementById("inputHipotenusa").value;
        var valorCatetoOposto = document.getElementById("inputCatetoOposto").value;
        var valorCatetoAdjascente = document.getElementById("inputCatetoAdjascente").value;
        
        valorHipotenusa = Math.hypot(valorCatetoOposto, valorCatetoAdjascente,valorHipotenusa);

        document.getElementById("resultado").value = valorHipotenusa;
                      
    }





