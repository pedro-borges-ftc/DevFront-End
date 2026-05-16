var carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2019,
    getDetalhes: function(){
        return this.marca + ", " + this.modelo + ", " + this.ano
    }
}
carro.ano = 2022
console.log(carro.getDetalhes())