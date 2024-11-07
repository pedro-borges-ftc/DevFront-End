var soma = 0
var multiplica = 1
//Iterando um array
var cores = [15,26.25,8,15]
//              0           1        2       3        4
console.log(cores.length)
for(i in cores){
  soma += Number(cores[i])
  multiplica *= Number(cores[i])
  console.log(`Índice: ${i} - Valor: ${cores[i]} - Soma: ${soma} - Multiplicação: ${multiplica}`)
}
console.log(`Media: ${soma / cores.length}`)
/*
var b = [2,3,5,8,7,6,21,58]
//       0 1 2 3 4 5  6  7
console.log(`Tamanho do Array: ${b.length}`)
b.unshift(32)
console.log(b)

var a = ["casa", "carro", "moto"]
//          0       1       2       3
console.log(a[1])
a[3]="bicicleta"
a[2]="motocicleta"
a[4]="barco"
console.log(a)

a = [];				// Começa com um array vazio 
a.unshift("zero")		// Adiciona um valor no final. 
console.log(a)
a.unshift("um", "dois") 	// Adiciona mais dois valores. 
console.log(a)
a.unshift(2,3,5,8,7,6,21,58)
console.log(a)

a = [];				// Começa com um array vazio 
a.push("zero")		// Adiciona um valor no final. 
console.log(a)
a.push("um", "dois") 	// Adiciona mais dois valores. 
console.log(a)
a.push(2,3,5,8,7,6,21,58) 	// Adiciona mais valores. 
console.log(a)

console.log(a.pop())    //removendo o elemento no fim do array
console.log(a.length)

//Iterando um array
var cores = ['vermelho', 'verde', 'azul', 'branco', 'amarelo'];
//              0           1        2       3        4
for(i in cores){
    console.log(`Índice: ${i} - Valor: ${cores[i]}`);
}
for (var i = 0; i < cores.length; i++) {
  console.log(`Índice: ${i} - Valor: ${cores[i]}`);
}
  */