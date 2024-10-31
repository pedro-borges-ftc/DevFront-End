var termo = 11
var fibo01 = 1
var fibo02 = 1

console.log(fibo01)
console.log(fibo02)
for (let i = 3; i <= termo; i++) {
    let aux = fibo01 + fibo02
    console.log(aux)
    fibo01 = fibo02
    fibo02 = aux
}