const formCadastro = document.getElementById('formCadastro');
const resultado = document.getElementById('resultado');

formCadastro.addEventListener('submit', function (event) {
    event.preventDefault();

    const cliente = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        cpf: document.getElementById('cpf').value,
        meioPagamento: document.getElementById('meioPagamento').value
    };

    resultado.textContent = JSON.stringify(cliente, null, 4);
    console.log(cliente);
});
