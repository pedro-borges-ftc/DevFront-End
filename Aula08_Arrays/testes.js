a = [];				// Começa com um array vazio 
a.push("zero")		// Adiciona um valor no final. 
console.log(a)
a.push("um", "dois") 	// Adiciona mais dois valores. 
console.log(a)

console.log(a.pop())    //removendo o elemento no fim do array
console.log(a.length)

//Iterando um array
var cores = ['vermelho', 'verde', 'azul', 'branco'];

for(i in cores){
    console.log(`Índice: ${i} - Valor: ${cores[i]}`);
}

for (var i = 0; i < cores.length; i++) {
  console.log(`Índice: ${i} - Valor: ${cores[i]}`);
}