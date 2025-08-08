var valorDivida = 3000
var valorParcelamento = valorDivida
var valorParcela = valorDivida
var quantidadeParcela = 0
var taxa = 0
var valorJuros = 0
var resultado = ""

do{
    resultado = ` Dívida = R$ ${valorParcelamento}`
    resultado += ` Juros = R$ ${valorJuros}`    
    resultado += ` Parcelas = ${quantidadeParcela}`
    resultado += ` Valor Parcela = R$ ${valorParcela.toFixed(2)}`    

    console.log(resultado)
    
    quantidadeParcela += 3

    switch(quantidadeParcela){
        case 3:
            taxa = 0.1 // 10 / 100 = 10%
            break;
        case 6:
            taxa = 0.15 // 15 / 100 = 15%
            break;
        case 9: 
            taxa = 0.2 // 20 / 100 = 20%
            break;
        case 12:
            taxa = 0.25 // 25 / 100 = 25%
            break;
        default:
            taxa = 0
            
    }
    
    valorJuros = valorDivida * taxa
    valorParcelamento = valorDivida + valorJuros
    valorParcela = valorParcelamento / quantidadeParcela        
    
}while(quantidadeParcela <= 12)