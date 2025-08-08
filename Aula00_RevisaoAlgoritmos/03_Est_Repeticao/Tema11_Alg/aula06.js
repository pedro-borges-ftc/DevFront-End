var n_esimo_termo = 24
var fibo01 = 1
var fibo02 = 1

console.log(fibo01)
console.log(fibo02)
for (let i = 3; i <= n_esimo_termo; i++) {
    let termo = fibo01 + fibo02
    console.log(termo)
    fibo01 = fibo02
    fibo02 = termo
}