var elem_pilhas = []

function adicionarelementos() {
    let elemento = document.getElementById("elemento").value
    elem_pilhas.push(elemento)
    window.alert('Elemento adicionado!')
}
function removerelementos() {
    if (elem_pilhas.length > 0) {
        elem_pilhas.pop()
        window.alert(`Elemento removido!`)
        console.log(elem_pilhas)
    }
    else {
        window.alert('A pilha está vazia!!!')
        console.log(elem_pilhas)
    }
}
function removertudo() {
    while (elem_pilhas.length > 0) {
        elem_pilhas.pop()
    }
    window.alert("Todos os elementos foram removidos!")
}
function ordernarelementos() {
    elem_pilhas.sort()
    window.alert(`Os elementos ordenados ficam dessa forma: ${elem_pilhas}`)
}
function exibirpilha() {
    let area2 = document.getElementById("area2")
    if (elem_pilhas.length === 0) {
        area2.innerHTML = 'A pilha não contém elementos!'
    }
    else {
        area2.innerHTML = `A pilha contem os elementos:[ ${elem_pilhas} ]`
    }



}
function buscarelementos() {
    let elemento = document.getElementById('busca').value
    let posicao = elem_pilhas.indexOf(elemento)

    if (posicao === -1) {
        window.alert('Elemento não encontrado na pilha.')
    }
    else {
        var area = document.getElementById("area");
        window.alert(`A posição do elemento é: ${posicao}`)
    }

}