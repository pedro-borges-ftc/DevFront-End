function JurosSimples(){
    //1) Leitura dos dados do HTML
    //Comando para acessar o input html através do JS 
    var txtvalorinicial = window.document.getElementById("txtvalorinicial").value
    var txttaxa = window.document.getElementById("txtaxa").value
    var txtperiodo = window.document.getElementById("txtperiodo").value    

    //2) Processamento
    var valorinicial = Number(txtvalorinicial)
    var taxa = Number(txttaxa)
    var periodo = Number(txtperiodo)
    var juros = valorinicial * taxa / 100 * periodo
    var total = valorinicial + juros

    //3) Saída do resultado no HTML
    var txtjuros = window.document.getElementById("txtjuros")
    txtjuros.value = juros
    var txttotal = window.document.getElementById("txttotal")
    txttotal.value = total
}

function calcularIdade(){
    //1) Leitura dos dados do HTML
    //Comando para acessar o input html através do JS 
    var dataNascimento = window.document.getElementById("txtdata").value
    var resultado = window.document.getElementById("txtresultado")

    //2) Processamento
    var dtn = new Date(dataNascimento)
    var hoje = new Date()
    var idade = Math.floor(
            Math.ceil(
                Math.abs( dtn.getTime() - hoje.getTime()) 
                / (1000 * 3600 * 24)
                    ) / 365.25
                )


    //3) Saída do resultado no HTML
    resultado.value = "A idade é " + idade + " ano(s)"
}

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