function consultaCep() {

    var cep = document.getElementById('txtcep').value
    var tblcep = document.getElementById("tblcep").querySelector("tbody")
    tblcep.innerHTML = ''

    if (cep.length !== 8) {
        alert('CEP inválido!')
        return
    }

    var url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url)
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw new Error("CEP não encontrado!")
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
            mostrarEndereco(data)/*leitura do JSON data*/
        })
        .catch(error => {
            console.error('Erro:', error)
        })
}

function mostrarEndereco(dados) {
    if (dados.erro) {
        alert("CEP não encontrado!")
    } else {
        //Logradouro
        inserirLinhaTable(`Logradouro`, `${dados.logradouro}`)
        //Bairro
        inserirLinhaTable(`Bairro`, `${dados.bairro}`)
        //Cidade/UF
        inserirLinhaTable(`Cidade/UF`, `${dados.localidade} / ${dados.uf}`)
        //CEP
        inserirLinhaTable(`CEP`, `${dados.cep}`)
    }
}

function inserirLinhaTable(c1, c2) {
    let coluna1 = document.createElement('td')
    let coluna2 = document.createElement('td')
    let linha = document.createElement('tr')

    coluna1.innerHTML = c1
    coluna2.innerHTML = c2

    linha.appendChild(coluna1)
    linha.appendChild(coluna2)
    tblcep.appendChild(linha)
}