var texto = '{ "at1" : "ouou", "at2": "yes"}'
//Converte de String para JSON
var objeto = JSON.parse(texto)

console.log(texto)
console.log(objeto)
console.log(objeto.at1)
objeto.at2=5
console.log(objeto)
//Converte de JSON para String
var texto2 = JSON.stringify(objeto)
console.log(texto)

//Criando o terceiro atributo
objeto.at3 = 54.87
objeto.at4 = null
console.log(objeto)