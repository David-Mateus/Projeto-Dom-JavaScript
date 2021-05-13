function calcula(){
    var salario = Number(document.getElementById('salarioInicial').value);
    var percentual = document.getElementById('percentual').value
    var total = salario * (percentual/100);
    var reaju = salario - total;
    console.log(total)
    //
    var novoSalario = document.getElementById('novoSalario');
    var reajust = document.getElementById('reajuste');
    //RESULTADO DENTRO DO INPUT
    novoSalario.value = total.toFixed(1);
    reajust.value = reaju.toFixed(1)



}