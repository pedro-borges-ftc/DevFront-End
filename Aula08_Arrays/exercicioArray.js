var dados = []
var opcao = 0

function adicionarElemento() { console.log('Adicionar elemento') }
function removerElemento() { console.log('Remover elemento') }

//Início da execução do programa
while (opcao != 999) {
    console.log('Programa de Manipulação de Array')
    console.log('Digite uma opção válida:')
    console.log('1 - Adicionar elemento')
    console.log('2 - Remover elemento')
    console.log('999 - Encerrar o programa')
    //opcao = console.log(window.prompt())

    switch (opcao) {
        case 1:
            adicionarElemento()
            break
        case 2:
            removerElemento()
            break
        case 999:
            console.log('fim do programa')
        default:
            console.log('opção inválida')
    }
}