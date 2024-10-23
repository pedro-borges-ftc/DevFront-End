//Tema 10 - Aula 05
function investigar(){
    //leitura dos dados do HTML
    var checkTelefonou = document.getElementById("checkTelefonou")
    var checkLocal = document.getElementById("checkLocal")
    var checkMora = document.getElementById("checkMora")
    var checkDevia = document.getElementById("checkDevia")
    var checkTrabalhou = document.getElementById("checkTrabalhou")

     //Processamento dos dados
    var resultado = ""
    var contador = 0
     
    if(checkTelefonou.checked){contador++}
    if(checkLocal.checked){contador++}
    if(checkMora.checked){contador++}
    if(checkDevia.checked){contador++}
    if(checkTrabalhou.checked){contador++}

    switch(contador){
        case 2:
            resultado = "<strong>Suspeito</strong>"
            break
        case 3:
        case 4:
            resultado = "<strong>Cúmplice</strong>"
            break
        case 5:
            resultado = "<strong>Assassino</strong>"
            break
        default:
            resultado = "<strong>Inocente</strong>"
    }

    //escrita do resultado no DOM do HTML
    document.getElementById('divresposta').innerHTML = resultado
}

//Tema 10 - Aula 04
function calcularRaizes() {
    //leitura dos dados do HTML
    var a = Number(document.getElementById("txtvalorA").value)
    var b = Number(document.getElementById("txtvalorB").value)
    var c = Number(document.getElementById("txtvalorC").value)

    //Processamento dos dados   
    var resposta = ""

    var delta = (b * b) - 4 * a * c;

    if (delta > 0) {
        raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

        resposta = "Raiz 1: " + raiz1 + "<br/>" + "Raiz 2: " + raiz2;
    } else if (delta == 0) {
        raiz = (-b + Math.sqrt(delta)) / (2 * a);
        
        resposta = "Raiz dupla: " + raiz;
    } else {
        resposta = "Não existem raízes reais"
    }

    //escrita do resultado no DOM do HTML
    document.getElementById('divresposta').innerHTML = resposta
}

//Tema 10 - Aula 03
function testadorTriangulos() {
    //leitura dos dados do HTML
    var l1 = Number(document.getElementById("txtvalor_l1").value)
    var l2 = Number(document.getElementById("txtvalor_l2").value)
    var l3 = Number(document.getElementById("txtvalor_l3").value)
    var resOK = ''
    var resTriangulo = ''

    //Processamento dos dados
    if (l1 > 0 && l2 > 0 && l3 > 0) {
        var eh_triangulo = (l1 + l2) > l3 || (l1 + l3) > l2 || (l3 + l2) > l1
        var eh_equilatero = l1 == l2 && l2 == l3
        var eh_isoceles = l1 == l2 || l2 == l3 || l1 == l3
        //var eh_escaleno = l1 != l2 && l2 != l3 && l1 != l3

        if (eh_triangulo == true) {
            resOK = "<img src='Imagens/ok.png' height='50px' width='50px'/>"

            if (eh_equilatero == true) {
                resTriangulo = "<img src='Imagens/triangulo_equilatero.png' height='150px' width='150px'/>"
            } else if (eh_isoceles == true) {
                resTriangulo = "<img src='Imagens/triangulo_isoceles.png' height='150px' width='150px'/>"
            } else {
                resTriangulo = "<img src='Imagens/triangulo_escaleno.png' height='150px' width='150px'/>"
            }
        } else {
            resOK = "<img src='Imagens/nao.png' height='50px' width='50px'/>"
        }

    } else {
        resOK = "<img src='Imagens/nao.png' height='50px' width='50px'/>"
    }

    //escrita do resultado no DOM do HTML
    document.getElementById("divOK").innerHTML = resOK
    document.getElementById("divTriangulo").innerHTML = resTriangulo
}

//Tema 10 - Aula 02
function calcularFolhaSalarial() {
    //leitura dos dados do HTML
    var valorhora = Number(document.getElementById("txtvalorhora").value)
    var totalhoras = Number(document.getElementById("txttotalhoras").value)

    //Processamento dos dados    
    var salario = valorhora * totalhoras
    var percIR = calcularPercentualIR(salario)
    var descontoIR = salario * percIR
    var descontoINSS = salario * 0.1
    var totalDescontos = descontoIR + descontoINSS
    var salarioLiquido = salario - totalDescontos
    percIR *= 100

    var resposta = "Salário Bruto: R$" + salario.toFixed(2).replace('.', ',') + "<br>"
    resposta += `(-) IR (${percIR}%): R$` + descontoIR.toFixed(2).replace('.', ',') + `<br>`
    resposta += "(-) INSS (10%): R$" + descontoINSS.toFixed(2).replace('.', ',') + "<br>"
    resposta += "Total de descontos: R$" + totalDescontos.toFixed(2).replace('.', ',') + "<br>"
    resposta += "Salário Líquido: <strong>R$" + salarioLiquido.toFixed(2).replace('.', ',') + "</strong>"

    //escrita do resultado no DOM do HTML
    document.getElementById("divresposta").innerHTML = resposta

    function calcularPercentualIR(salario) {
        if (salario <= 900) {
            return 0.0                  //0%
        } else if (salario <= 1500) {
            return 0.05                 //5%
        } else if (salario <= 2500) {
            return 0.1                  //10%
        } else {
            return 0.2                  //20%
        }
    }
}

//Tema 10 - Aula 01
function calcularReajusteSalarial() {
    //leitura dos dados do HTML
    var salario = Number(document.getElementById("txtsalarioatual").value)
    var percentual = 0.0
    var reajuste = 0.0
    var novosalario = 0.0

    //Processamento dos dados    
    if (salario <= 1280) {
        percentual = 0.2            //20%
    } else if (salario <= 2700) {
        percentual = 0.15           //15%
    } else if (salario <= 3500) {
        percentual = 0.1            //10%
    } else {
        percentual = 0.05           //05%
    }

    reajuste = salario * percentual
    novosalario = salario + reajuste

    //escrita do resultado no DOM do HTML
    document.getElementById("txtperc").value = (percentual * 100).toFixed(2)
    document.getElementById("txtreajuste").value = reajuste.toFixed(2)
    document.getElementById("txtnovosalario").value = novosalario.toFixed(2)
}