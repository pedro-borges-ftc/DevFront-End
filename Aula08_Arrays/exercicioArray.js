var informacoes = []
var opcao = 0
var prompt = require('prompt')

function adicionarElemento() {
    let numero = random(1,99)
    console.log('Inserindo elemento' + numero)
    informacoes.push(numero) 
}

function removerElemento() {
    console.log('Remover elemento no fim')
    informacoes.pop()
}

function lerDadoTeclado(){
    prompt.start()
   
    prompt.get(["valor"], function (err, result) {
        console.log("valor lido: " + result.valor)
        return result.valor
    })
}

//Início da execução do programa
while (opcao != 999) {
    console.log('Programa de Manipulação de Array')
    console.log('1 - Adicionar elemento')
    console.log('2 - Remover elemento')
    console.log('3 - Buscar elemento')
    console.log('4 - Ordenar elementos')
    console.log('5 - Imprimir elementos')
    console.log('999 - Encerrar o programa')
    console.log('Digite uma opção válida:')
    opcao = lerDadoTeclado()
    opcao = Number(opcao)
    switch (opcao) {
        case 1:
            adicionarElemento()
            break
        case 2:
            removerElemento()
            break
        case 3:
            buscarElemento()
            break
        case 4:
            ordenarElementos()
            break
        case 5:
            console.log(informacoes)
        case 999:
            console.log('fim do programa')
        default:
            console.log('opção inválida')
    }
}