//5_caixaregistradora
function caltularTroco(){
    let totalCompra = Number(document.getElementById("txttotalcompra").value)
    let dinheiro = Number(document.getElementById("txtdinheiro").value)
    let troco = dinheiro - totalCompra

    document.getElementById("txttroco").value = troco.toFixed(2).replace('.',',')
}

//4_caixaregistradora
function adicionarProduto(){
    let valorProduto = Number(document.getElementById("txtvalorproduto").value)
    let totalCompra = Number(document.getElementById("txttotalcompra").value)
    let tabela = document.getElementById("tableprodutos")
    let quantidadeItens = tabela.childElementCount

    totalCompra += valorProduto

    let linha = document.createElement('tr')
    let coluna1 = document.createElement('td')
    let coluna2 = document.createElement('td')

    coluna1.innerHTML = `Produto ${quantidadeItens}`
    coluna2.innerHTML = ` R$ ${valorProduto.toFixed(2).replace('.',',')}`

    linha.appendChild(coluna1)
    linha.appendChild(coluna2)
    tabela.appendChild(linha)

    document.getElementById("txtvalorproduto").value = ''
    document.getElementById("txttotalcompra").value = totalCompra
}

//3_crescimentopopulacional
function crescimentoPopulacional(){
    let anoInicial = Number(document.getElementById("txtanoinicial").value)
    let populacao = Number(document.getElementById("txtpopulacao").value)
    let taxa = Number(document.getElementById("txttaxa").value)
    let anoFinal = Number(document.getElementById("txtanofinal").value)
    let tabela = document.getElementById("tableresultado")

    for(i=anoInicial+1; i<=anoFinal; i++){
        populacao += populacao * (taxa / 100)       //0.2

        let linha = document.createElement('tr')
        let coluna1 = document.createElement('td')
        let coluna2 = document.createElement('td')

        coluna1.innerHTML = `${i}`
        coluna2.innerHTML = `${populacao.toFixed(0)}`

        linha.appendChild(coluna1)
        linha.appendChild(coluna2)
        tabela.appendChild(linha)
    }
}

//2_geradortabuada
function tabuada(){
    let num = document.getElementById("txtnum")
    let tab = document.getElementById('seltab')
    
    if(num.value.length == 0){
        window.alert("Por favor, digite um número!")
    }else{
        let n = Number(num.value)
        tab.innerHTML=''
        for(i=1; i<=10; i++){
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            tab.appendChild(item)
        }
    }
}
