document.getElementById('calcular').addEventListener('click', function() {
    const anoInicial = parseInt(document.getElementById('ano-inicial').value);
    const populacaoInicial = parseFloat(document.getElementById('populacao-inicial').value);
    const percentualCrescimento = parseFloat(document.getElementById('percentual-crescimento').value);
    const anoFinal = parseInt(document.getElementById('ano-final').value);

    if (isNaN(anoInicial) || isNaN(populacaoInicial) || isNaN(percentualCrescimento) || isNaN(anoFinal)) {
        alert('Por favor, preencha todos os campos com valores válidos.');
        return;
    }

    if (anoFinal < anoInicial) {
        alert('O ano final deve ser maior ou igual ao ano inicial.');
        return;
    }

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    let anoAtual = anoInicial;
    let populacaoAtual = populacaoInicial;

    do {
        const p = document.createElement('p');
        p.textContent = `Ano ${anoAtual}: ${Math.round(populacaoAtual)} habitantes`;
        resultadosDiv.appendChild(p);

        populacaoAtual *= (1 + percentualCrescimento / 100);
        anoAtual++;
    } while (anoAtual <= anoFinal);
});