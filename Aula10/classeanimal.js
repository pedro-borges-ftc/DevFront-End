class Animal{
    //atributos
    constructor(_nome, _especie, _idade, _peso){
        this.nome = _nome
        this.especie = _especie
        this.idade = _idade
        this.peso = _peso
    }
    //métodos
    cantar(){
        return this.nome + " pode cantar"
    }
    dancar(){
        return this.nome + " pode dançar"
    }
}
let bingo = new Animal("bingo","gato","3","7kg")
let jaspion = new Animal("jaspion","raposa","5","9kg")
let rex = new Animal("rex","cachorro","9","12kg")
console.log(bingo.dancar())
console.log(jaspion.cantar())
console.log(rex.cantar())