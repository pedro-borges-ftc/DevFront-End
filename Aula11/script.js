const formContato = document.getElementById('formContato');
const indiceEdicao = document.getElementById('indiceEdicao');
const codigo = document.getElementById('codigo');
const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');
const email = document.getElementById('email');
const btnSalvar = document.getElementById('btnSalvar');
const btnCancelar = document.getElementById('btnCancelar');
const btnLimpar = document.getElementById('btnLimpar');
const tabelaContatos = document.getElementById('tabelaContatos');
const mensagemVazia = document.getElementById('mensagemVazia');

const chaveLocalStorage = 'contatosAula11';

function buscarContatos() {
    const contatosJSON = localStorage.getItem(chaveLocalStorage);
    return contatosJSON ? JSON.parse(contatosJSON) : [];
}

function salvarContatos(contatos) {
    localStorage.setItem(chaveLocalStorage, JSON.stringify(contatos));
}

function limparFormulario() {
    formContato.reset();
    indiceEdicao.value = '';
    btnSalvar.textContent = 'Salvar';
}

function montarLinha(contato, indice) {
    const linha = document.createElement('tr');
    const celulaCodigo = document.createElement('td');
    const celulaNome = document.createElement('td');
    const celulaTelefone = document.createElement('td');
    const celulaEmail = document.createElement('td');
    const celulaAcoes = document.createElement('td');
    const acoes = document.createElement('div');
    const botaoEditar = document.createElement('button');
    const botaoExcluir = document.createElement('button');

    celulaCodigo.textContent = contato.codigo;
    celulaNome.textContent = contato.nome;
    celulaTelefone.textContent = contato.telefone;
    celulaEmail.textContent = contato.email;

    acoes.classList.add('acoes');

    botaoEditar.type = 'button';
    botaoEditar.classList.add('btn-editar');
    botaoEditar.textContent = 'Editar';
    botaoEditar.addEventListener('click', function () {
        editarContato(indice);
    });

    botaoExcluir.type = 'button';
    botaoExcluir.classList.add('btn-excluir');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', function () {
        excluirContato(indice);
    });

    acoes.appendChild(botaoEditar);
    acoes.appendChild(botaoExcluir);
    celulaAcoes.appendChild(acoes);

    linha.appendChild(celulaCodigo);
    linha.appendChild(celulaNome);
    linha.appendChild(celulaTelefone);
    linha.appendChild(celulaEmail);
    linha.appendChild(celulaAcoes);

    return linha;
}

function listarContatos() {
    const contatos = buscarContatos();

    tabelaContatos.innerHTML = '';
    mensagemVazia.classList.toggle('oculto', contatos.length > 0);

    contatos.forEach(function (contato, indice) {
        tabelaContatos.appendChild(montarLinha(contato, indice));
    });
}

function editarContato(indice) {
    const contatos = buscarContatos();
    const contato = contatos[indice];

    codigo.value = contato.codigo;
    nome.value = contato.nome;
    telefone.value = contato.telefone;
    email.value = contato.email;
    indiceEdicao.value = indice;
    btnSalvar.textContent = 'Atualizar';
}

function excluirContato(indice) {
    const contatos = buscarContatos();
    contatos.splice(indice, 1);
    salvarContatos(contatos);
    listarContatos();
    limparFormulario();
}

formContato.addEventListener('submit', function (event) {
    event.preventDefault();

    const contato = {
        codigo: codigo.value,
        nome: nome.value,
        telefone: telefone.value,
        email: email.value
    };

    const contatos = buscarContatos();

    if (indiceEdicao.value === '') {
        contatos.push(contato);
    } else {
        contatos[indiceEdicao.value] = contato;
    }

    salvarContatos(contatos);
    listarContatos();
    limparFormulario();
});

btnCancelar.addEventListener('click', limparFormulario);

btnLimpar.addEventListener('click', function () {
    localStorage.removeItem(chaveLocalStorage);
    listarContatos();
    limparFormulario();
});

listarContatos();
