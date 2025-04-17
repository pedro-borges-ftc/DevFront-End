function somaNumeros(){
    //1) Leitura dos dados do HTML
    //Comando para acessar o input html através do JS 
    var tn1 = window.document.getElementById("txtnum1").value
    var tn2 = window.document.getElementById("txtnum2").value
    var resultado = window.document.getElementById("txtresultado")

    //2) Processamento
    tn1 = Number(tn1)
    tn2 = Number(tn2)
    var soma = tn1 + tn2

    //3) Saída do resultado no HTML
    resultado.value = soma
}