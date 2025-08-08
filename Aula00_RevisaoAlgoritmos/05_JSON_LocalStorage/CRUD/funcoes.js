//Definição de variáveis globais
var operacao = "A" //"A"=Adição; "E"=Edição
var indice_selecionado = -1 //Índice do item selecionado na lista
var tbClientes = localStorage.getItem("tbClientes")// Recupera os dados armazenados
tbClientes = JSON.parse(tbClientes) // Converte string para objeto
if (tbClientes == null) { tbClientes = [] }// Caso não haja conteúdo, iniciamos um vetor vazio

function salvar() {
    if (operacao == "A")
        return Adicionar()
    else
        return Editar()
}

function Adicionar() {
    var txtCodigo = Number(document.getElementById("txtCodigo").value)
    var txtNome = document.getElementById("txtNome").value
    var txtTelefone = document.getElementById("txtTelefone").value
    var txtEmail = document.getElementById("txtEmail").value
    var objeto = {
        "Codigo": txtCodigo,
        "Nome": txtNome,
        "Telefone": txtTelefone,
        "Email": txtEmail
    }
    var cliente = JSON.stringify(objeto)
    //console.log(cliente)
    tbClientes.push(cliente)
    //console.log(tbClientes)
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes))
    alert("Registro adicionado.")
    Listar()
    return true
}

function Editar() {
    tbClientes[indice_selecionado] = JSON.stringify({
        Codigo: txtCodigo.value(),
        Nome: txtNome.value(),
        Telefone: txtTelefone.value(),
        Email: txtEmail.value()
    });//Altera o item selecionado na tabela
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes))
    alert("Informações editadas.")
    operacao = "A" //Volta ao padrão
    return true
}

function Excluir() {
    tbClientes.slice(indice_selecionado, 1)
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes))
    alert("Registro excluído.")
}

function Listar() {
    var tblListar = document.getElementById("tblListar").querySelector("tbody")

    tblListar.innerHTML = ''

    for (var i in tbClientes) {
        var coluna1 = document.createElement('td')
        var coluna2 = document.createElement('td')
        var coluna3 = document.createElement('td')
        var coluna4 = document.createElement('td')
        var coluna5 = document.createElement('td')
        var linha = document.createElement('tr')

        coluna1.innerHTML = "<img src='https://cdn.icon-icons.com/icons2/841/PNG/32/flat-style-circle-edit_icon-icons.com_66939.png' alt='" + i + "'class='btnEditar' width='17' height= '17'/>     "
        coluna1.innerHTML += "<img src='https://cdn.icon-icons.com/icons2/1380/PNG/32/vcsremoved_93492.png' alt='" + i + "' class='btnExcluir'width='17' height= '17'/></td>"
        
        var cli = JSON.parse(tbClientes[i])
        coluna2.innerHTML = `${cli.Codigo}`
        coluna3.innerHTML = `${cli.Nome}`
        coluna4.innerHTML = `${cli.Telefone}`
        coluna5.innerHTML = `${cli.Email}`

        linha.appendChild(coluna1)
        linha.appendChild(coluna2)
        linha.appendChild(coluna3)
        linha.appendChild(coluna4)
        linha.appendChild(coluna5)

        tblListar.appendChild(linha)
    }

    // Todas os edit da página
    var edits = document.querySelectorAll('.btnEditar');
    console.log(edits)
    // Associação de cada edit à função
    for (var i = 0; i < edits.length; i++) {
        //edits[i].onclick = carregaEdicao; // Sem parênteses!

        edits[i].onclick = function (i) {
            operacao = "E"
            indice_selecionado = i

            alert('índice' + indice_selecionado)
        }
    }
}

/*function carregaEdicao(indice){
    operacao = "E";   
    indice_selecionado = indice;
    alert('índice' + indice_selecionado)
}

/*$("#tblListar").on("click", ".btnEditar", function () {
    operacao = "E";
    indice_selecionado = parseInt($(this).attr("alt"));
    var cli = JSON.parse(tbClientes[indice_selecionado]);
    $("#txtCodigo").val(cli.Codigo);
    $("#txtNome").val(cli.Nome);
    $("#txtTelefone").val(cli.Telefone);
    $("#txtEmail").val(cli.Email);
    $("#txtCodigo").attr("readonly", "readonly");
    $("#txtNome").focus();
})

$("#tblListar").on("click", ".btnExcluir", function () {
    indice_selecionado = parseInt($(this).attr("alt"));
    Excluir();
    Listar();
})
*/