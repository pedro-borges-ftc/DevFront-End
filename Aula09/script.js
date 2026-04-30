// Array que armazena os elementos
let arrayElements = [];

// Elementos DOM
const inputElement = document.getElementById('inputElement');
const btnAdd = document.getElementById('btnAdd');
const btnSort = document.getElementById('btnSort');
const btnSortNumeric = document.getElementById('btnSortNumeric');
const btnReverse = document.getElementById('btnReverse');
const btnClear = document.getElementById('btnClear');
const searchInput = document.getElementById('searchInput');
const btnSearch = document.getElementById('btnSearch');
const searchResult = document.getElementById('searchResult');
const arrayTableBody = document.getElementById('arrayTableBody');
const totalElements = document.getElementById('totalElements');
const jsonOutput = document.getElementById('jsonOutput');

// Event Listeners
btnAdd.addEventListener('click', adicionarElemento);
inputElement.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        adicionarElemento();
    }
});

btnSort.addEventListener('click', ordenarAlfabetico);
btnSortNumeric.addEventListener('click', ordenarNumerico);
btnReverse.addEventListener('click', inverterArray);
btnClear.addEventListener('click', limparTudo);
btnSearch.addEventListener('click', buscarElemento);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        buscarElemento();
    }
});

/**
 * Adiciona um elemento ao array
 */
function adicionarElemento() {
    const elemento = inputElement.value.trim();

    if (elemento === '') {
        alert('Por favor, digite um elemento válido!');
        inputElement.focus();
        return;
    }

    arrayElements.push(elemento);
    inputElement.value = '';
    inputElement.focus();
    atualizarTabela();
    limparBusca();
}

/**
 * Remove um elemento do array pelo índice
 */
function removerElemento(index) {
    if (confirm(`Deseja remover o elemento "${arrayElements[index]}"?`)) {
        arrayElements.splice(index, 1);
        atualizarTabela();
        limparBusca();
    }
}

/**
 * Ordena o array alfabeticamente
 */
function ordenarAlfabetico() {
    if (arrayElements.length === 0) {
        alert('Array vazio! Adicione elementos primeiro.');
        return;
    }

    arrayElements.sort((a, b) => {
        return String(a).localeCompare(String(b), 'pt-BR');
    });

    atualizarTabela();
    limparBusca();
}

/**
 * Ordena o array numericamente
 */
function ordenarNumerico() {
    if (arrayElements.length === 0) {
        alert('Array vazio! Adicione elementos primeiro.');
        return;
    }

    arrayElements.sort((a, b) => {
        const numA = parseFloat(a);
        const numB = parseFloat(b);

        if (isNaN(numA) || isNaN(numB)) {
            return String(a).localeCompare(String(b), 'pt-BR');
        }

        return numA - numB;
    });

    atualizarTabela();
    limparBusca();
}

/**
 * Inverte a ordem dos elementos
 */
function inverterArray() {
    if (arrayElements.length === 0) {
        alert('Array vazio! Adicione elementos primeiro.');
        return;
    }

    arrayElements.reverse();
    atualizarTabela();
    limparBusca();
}

/**
 * Limpa todos os elementos do array
 */
function limparTudo() {
    if (arrayElements.length === 0) {
        alert('Array já está vazio!');
        return;
    }

    if (confirm('Tem certeza que deseja limpar TODOS os elementos?')) {
        arrayElements = [];
        atualizarTabela();
        limparBusca();
    }
}

/**
 * Busca um elemento no array
 */
function buscarElemento() {
    const termo = searchInput.value.trim().toLowerCase();

    if (termo === '') {
        limparBusca();
        return;
    }

    if (arrayElements.length === 0) {
        searchResult.textContent = 'Array vazio!';
        searchResult.className = 'search-result not-found';
        return;
    }

    // Busca exata
    const indexExato = arrayElements.findIndex(
        elem => String(elem).toLowerCase() === termo
    );

    if (indexExato !== -1) {
        searchResult.textContent = `✓ Encontrado na posição ${indexExato}: "${arrayElements[indexExato]}"`;
        searchResult.className = 'search-result found';
        return;
    }

    // Busca parcial
    const encontrados = arrayElements
        .map((elem, idx) => ({
            elemento: elem,
            indice: idx
        }))
        .filter(item => String(item.elemento).toLowerCase().includes(termo));

    if (encontrados.length > 0) {
        const posicoes = encontrados.map(item => item.indice).join(', ');
        const elementos = encontrados.map(item => `"${item.elemento}"`).join(', ');
        searchResult.textContent = `✓ ${encontrados.length} resultado(s) encontrado(s) nas posições [${posicoes}]: ${elementos}`;
        searchResult.className = 'search-result found';
    } else {
        searchResult.textContent = `✗ Nenhum resultado encontrado para "${termo}"`;
        searchResult.className = 'search-result not-found';
    }
}

/**
 * Limpa o resultado da busca
 */
function limparBusca() {
    searchInput.value = '';
    searchResult.textContent = '';
    searchResult.className = 'search-result';
}

/**
 * Atualiza a tabela com os elementos atuais do array
 */
function atualizarTabela() {
    // Limpar tabela
    arrayTableBody.innerHTML = '';

    // Se array vazio
    if (arrayElements.length === 0) {
        arrayTableBody.innerHTML = `
            <tr class="empty-row">
                <td colspan="3">Array vazio. Adicione elementos para começar.</td>
            </tr>
        `;
        totalElements.textContent = '0';
        atualizarJsonOutput();
        return;
    }

    // Preencher tabela com elementos
    arrayElements.forEach((elemento, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="index-cell">${index}</td>
            <td class="element-cell">${escaparHTML(elemento)}</td>
            <td class="actions-cell">
                <button class="btn btn-delete" onclick="removerElemento(${index})">
                    ✕ Remover
                </button>
            </td>
        `;
        arrayTableBody.appendChild(row);
    });

    // Atualizar total
    totalElements.textContent = arrayElements.length;

    // Atualizar JSON
    atualizarJsonOutput();
}

/**
 * Atualiza a exibição do array em formato JSON
 */
function atualizarJsonOutput() {
    jsonOutput.textContent = JSON.stringify(arrayElements, null, 2);
}

/**
 * Escapa caracteres HTML especiais para evitar XSS
 */
function escaparHTML(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}

// Inicializar com alguns exemplos (opcional)
function inicializar() {
    arrayElements = ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js'];
    atualizarTabela();
    console.log('✓ Array inicializado com exemplos. Você pode começar a interagir!');
}

// Descomente a linha abaixo se quiser iniciar com exemplos
// inicializar();

// Log para debugging
console.log('Sistema de Gerenciamento de Array carregado com sucesso!');
