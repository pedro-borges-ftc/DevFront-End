function consultaCep() {

    var cep = document.getElementById('txtcep').value
    var url = `https://viacep.com.br/ws/${cep}/json/`
    var request = new XMLHttpRequest()

    request.open('GET', url)
    request.onerror = function (e) {
        document.getElementById('divresultado').innerHTML = 'API offline ou CEP inválido'
    }

    request.onload = () => {
        var tblcep = document.getElementById("tblcep").querySelector("tbody")
        tblcep.innerHTML = ''
        var response = JSON.parse(request.responseText)
        
        console.log(request.responseText)
        
        if (response.erro === true) {
            document.getElementById('divresultado').innerHTML = 'CEP não encontrado'            
        } else {
            /*document.getElementById('divresultado').innerHTML = `CEP: ${response.cep} <BR>` +
                `Logradouro: ${response.logradouro} <BR>` +
                `Bairro: ${response.bairro} <BR>` +
                `CIDADE/UF: ${response.localidade}` +
                `/ ${response.uf} <BR>`*/

            document.getElementById('divresultado').innerHTML = ''

            var coluna1 = document.createElement('td')
            var coluna2 = document.createElement('td')
            var linha = document.createElement('tr')
            
            //var contador = tblsimulacao.childElementCount

            //CEP
            coluna1 = document.createElement('td')
            coluna2 = document.createElement('td')
            linha = document.createElement('tr')

            coluna1.innerHTML = `CEP`
            coluna2.innerHTML = `${response.cep}`

            linha.appendChild(coluna1)
            linha.appendChild(coluna2)
            tblcep.appendChild(linha)

            //Logradouro
            coluna1 = document.createElement('td')
            coluna2 = document.createElement('td')
            linha = document.createElement('tr')

            coluna1.innerHTML = `Logradouro`
            coluna2.innerHTML = `${response.logradouro}`

            linha.appendChild(coluna1)
            linha.appendChild(coluna2)
            tblcep.appendChild(linha)

            //Bairro
            coluna1 = document.createElement('td')
            coluna2 = document.createElement('td')
            linha = document.createElement('tr')

            coluna1.innerHTML = `Bairro`
            coluna2.innerHTML = `${response.bairro}`

            linha.appendChild(coluna1)
            linha.appendChild(coluna2)
            tblcep.appendChild(linha)

            //Cidade/UF
            coluna1 = document.createElement('td')
            coluna2 = document.createElement('td')
            linha = document.createElement('tr')

            coluna1.innerHTML = `Cidade/UF`
            coluna2.innerHTML = `${response.localidade} / ${response.uf}`

            linha.appendChild(coluna1)
            linha.appendChild(coluna2)
            tblcep.appendChild(linha)
        }
    }
    request.send()
}