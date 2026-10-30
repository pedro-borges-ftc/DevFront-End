const votos = { branco: 0, fulano: 0, beltrano: 0, nulo: 0 };
const txtcandidato = document.getElementById('txtcandidato');
const divresultado = document.getElementById('divresultado');
const mensagem = document.getElementById('vote-message');
const categorias = [
    { chave: 'fulano', nome: 'Fulano' },
    { chave: 'beltrano', nome: 'Beltrano' },
    { chave: 'branco', nome: 'Brancos' },
    { chave: 'nulo', nome: 'Nulos' }
];

document.getElementById('diventrada').addEventListener('submit', votar);
document.getElementById('btnresultado').addEventListener('click', exibirResultado);
txtcandidato.addEventListener('input', () => {
    txtcandidato.removeAttribute('aria-invalid');
    mensagem.textContent = '';
    mensagem.classList.remove('error');
});

function votar(event) {
    event.preventDefault();
    const entrada = txtcandidato.value.trim();
    if (!/^\d{1,3}$/.test(entrada)) {
        mensagem.textContent = 'Digite um número inteiro de 0 a 999.';
        mensagem.classList.add('error');
        txtcandidato.setAttribute('aria-invalid', 'true');
        txtcandidato.focus();
        return;
    }

    const voto = Number(entrada);
    txtcandidato.value = '';
    if (voto === 999) {
        mensagem.textContent = 'Apuração consultada. Nenhum voto foi adicionado.';
        exibirResultado();
    } else {
        switch (voto) {
            case 0: votos.branco++; break;
            case 13: votos.fulano++; break;
            case 22: votos.beltrano++; break;
            default: votos.nulo++;
        }
        mensagem.textContent = 'Voto registrado com sucesso. A urna está pronta para o próximo voto.';
        divresultado.hidden = true;
    }
    txtcandidato.focus();
}

function exibirResultado() {
    const total = Object.values(votos).reduce((soma, quantidade) => soma + quantidade, 0);
    const linhas = categorias.map(({ chave, nome }) => {
        const percentual = total === 0 ? 0 : votos[chave] / total * 100;
        const percentualFormatado = percentual.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return `<div class="result-row"><div class="result-label"><strong>${nome}</strong><span>${votos[chave]} ${votos[chave] === 1 ? 'voto' : 'votos'} · ${percentualFormatado}%</span></div><progress max="100" value="${percentual}" aria-label="Percentual de votos ${nome}">${percentualFormatado}%</progress></div>`;
    }).join('');
    divresultado.innerHTML = `<div class="results-heading"><div><p class="eyebrow">APURAÇÃO DA SESSÃO</p><h2 id="results-title">Resultado da votação</h2></div><span class="total"><strong>${total}</strong> ${total === 1 ? 'voto registrado' : 'votos registrados'}</span></div>${total === 0 ? '<p class="empty-note">Nenhum voto registrado ainda. Confirme o primeiro voto para começar.</p>' : ''}${linhas}`;
    divresultado.hidden = false;
    divresultado.setAttribute('tabindex', '-1');
    divresultado.focus({ preventScroll: true });
    divresultado.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest' });
}
