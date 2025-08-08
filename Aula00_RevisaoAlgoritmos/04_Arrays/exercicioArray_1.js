const prompt = require('prompt-sync')();

let array = [];
let opcao = '';

console.log("=== Programa de Manipulação de Array ===");

do {
    console.log("\nMenu de Opções:");
    console.log("1 - Adicionar elemento");
    console.log("2 - Remover elemento");
    console.log("3 - Buscar elemento");
    console.log("4 - Ordenar elementos");
    console.log("5 - Imprimir elementos");
    console.log("999 - Encerrar o programa");

    opcao = prompt("Digite a opção desejada: ");

    switch(opcao) {
        case '1':
            const elementoAdicionar = prompt("Digite o elemento a ser adicionado: ");
            array.push(elementoAdicionar);
            console.log(`Elemento "${elementoAdicionar}" adicionado com sucesso!`);
            break;

        case '2':
            const elementoRemover = prompt("Digite o elemento a ser removido: ");
            const indexRemover = array.indexOf(elementoRemover);
            if (indexRemover !== -1) {
                array.splice(indexRemover, 1);
                console.log(`Elemento "${elementoRemover}" removido com sucesso!`);
            } else {
                console.log("Elemento não encontrado no array.");
            }
            break;

        case '3':
            const elementoBuscar = prompt("Digite o elemento a ser buscado: ");
            const indexBuscar = array.indexOf(elementoBuscar);
            if (indexBuscar !== -1) {
                console.log(`Elemento encontrado na posição ${indexBuscar}.`);
            } else {
                console.log("Elemento não encontrado no array.");
            }
            break;

        case '4':
            array.sort();
            console.log("Array ordenado com sucesso.");
            break;

        case '5':
            if (array.length === 0) {
                console.log("O array está vazio.");
            } else {
                console.log("Elementos do array:");
                array.forEach((el, i) => console.log(`${i}: ${el}`));
            }
            break;

        case '999':
            console.log("Encerrando o programa...");
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }

} while (opcao !== '999');
