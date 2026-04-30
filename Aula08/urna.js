var votosBrancos = 0
var votosFulano = 0
var votosBeltrano = 0
var votosNulo = 0
var txtcandidato = window.document.getElementById("txtcandidato")
var divresultado = document.getElementById("divresultado")
var btnconfirmar = document.getElementById("btnconfirmar")

txtcandidato.addEventListener("blur", validarCandidato)
btnconfirmar.addEventListener("click", votar)

function validarCandidato() {
    var voto = Number(txtcandidato.value)

    if (voto <= 999) {
        txtcandidato.style.background = "white"
        return true
    } else {
        alert("Digite um valor válido: 0,13,22,99")
        txtcandidato.style.background = "yellow"
        return false
    }
}

function votar() {
    if (validarCandidato() == true) {
        var voto = Number(txtcandidato.value)
        txtcandidato.value = ""
        txtcandidato.focus()
        divresultado.innerHTML = ""

        switch (voto) {
            case 0:
                votosBrancos++
                break
            case 13:
                votosFulano++
                break
            case 22:
                votosBeltrano++
                break
            case 999:
                exibirResultado()
                break
            default:
                votosNulo++
        }
    }
}

function exibirResultado() {
    var totalVotos = votosFulano + votosBeltrano + votosBrancos + votosNulo
    var percentualBrancos = votosBrancos / totalVotos * 100
    var percentualNulos = votosNulo / totalVotos * 100
    var percentualFulano = votosFulano / totalVotos * 100
    var percentualBeltrano = votosBeltrano / totalVotos * 100
    var resultado = "<h4> RESULTADO </h4>"
    resultado += `<p> Votos Fulano: ${votosFulano} </p>`
    resultado += `<p> Votos Beltrano: ${votosBeltrano} </p>`
    resultado += `<p> Votos Brancos: ${votosBrancos} </p>`
    resultado += `<p> Votos Nulos: ${votosNulo} </p>`
    resultado += "<p> ------------------------ </p>"
    resultado += `<h4> Total de votos: ${totalVotos} </h4>`
    resultado += `<p> Percentual de Brancos: ${percentualBrancos.toFixed(2)} % </p>`
    resultado += `<p> Percentual de Nulos: ${percentualNulos.toFixed(2)} % </p>`
    resultado += `<p> Percentual de Fulano: ${percentualFulano.toFixed(2)} % </p>`
    resultado += `<p> Percentual de Beltrano: ${percentualBeltrano.toFixed(2)} % </p>`
    divresultado.innerHTML = resultado
}
