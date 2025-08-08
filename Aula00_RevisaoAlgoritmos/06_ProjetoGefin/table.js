//Povoando a tabela registrosFinanceiros com dados fictícios
/*const registrosFinanceiros = [
    { codigo: '001', descricao: 'Compra de materiais', data: '2024-05-01', valor: '150.00', tipo: 'debito' },
    { codigo: '002', descricao: 'Venda de produto', data: '2024-05-03', valor: '300.00', tipo: 'credito' },
    { codigo: '003', descricao: 'Serviço de manutenção', data: '2024-05-05', valor: '100.00', tipo: 'debito' },
    { codigo: '004', descricao: 'Venda de serviço', data: '2024-05-10', valor: '200.00', tipo: 'credito' }
];

localStorage.setItem('registrosFinanceiros', JSON.stringify(registrosFinanceiros));*/

// Função para obter registros financeiros do Local Storage
function getRegistrosFinanceiros() {
    const records = localStorage.getItem('registrosFinanceiros');
    return records ? JSON.parse(records) : [];
}

// Função para salvar registros financeiros no Local Storage
function saveRegistrosFinanceiros(records) {
    localStorage.setItem('registrosFinanceiros', JSON.stringify(records));
}

// Função para excluir um registro financeiro
function deletarRegistro(index) {
    const records = getRegistrosFinanceiros();
    records.splice(index, 1);
    saveRegistrosFinanceiros(records);
    //exibirRegistros(records);
}

// Função para calcular o saldo final até uma data específica
function calculaSaldo(date) {
    const records = getRegistrosFinanceiros();
    const targetDate = new Date(date);
    let saldoAnterior = 0;
    let totalCreditos = 0;
    let totalDebitos = 0;

    records.forEach(record => {
        const recordDate = new Date(record.data);
        if (recordDate < targetDate) {
            const valor = parseFloat(record.valor);
            if (record.tipo === 'credito') {
                totalCreditos += valor;
            } else if (record.tipo === 'debito') {
                totalDebitos += valor;
            }
        }
    });

    const saldoFinal = saldoAnterior + totalCreditos - totalDebitos;
    return saldoFinal;
}

// Função para exibir os registros na tabela
function exibirRegistros(records, startDate = null, endDate = null) {
    const tbody = document.getElementById('registros-financeiros');
    tbody.innerHTML = ''; // Limpar a tabela antes de adicionar os registros

    let saldoAnterior = 0;
    let totalCreditos = 0;
    let totalDebitos = 0;    

    saldoAnterior = calculaSaldo(new Date(startDate));

    records.forEach((record, index) => {
        //Tratamento da data
        const novaData = new Date(record.data);
        novaData.setDate(novaData.getDate() + 1)
        dataAux = novaData.toLocaleDateString('pt-BR',{ timezone: 'UTC' })
        const row = document.createElement('tr');
        
        //Tratamento do Valor
        valorAux = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(record.valor)
        const valor = parseFloat(record.valor);
        if (record.tipo === 'credito') {
            totalCreditos += valor;
        } else if (record.tipo === 'debito') {
            totalDebitos += valor;
        }
        
        row.innerHTML = `
            <td>${record.codigo}</td>
            <td>${record.descricao}</td>            
            <td>${dataAux}</td>
            <td>${valorAux}</td>
            <td>${record.tipo.charAt(0).toUpperCase() + record.tipo.slice(1)}</td>
            <td>
                <button class="btn-edit" onclick="editarRegistro(${index})">Editar</button>
                <button class="btn-delete" onclick="deletarRegistro(${index})">Excluir</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    const saldoFinal = saldoAnterior + totalCreditos - totalDebitos;

    document.getElementById('saldo-anterior').innerText = `${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(saldoAnterior)}`;
    document.getElementById('total-creditos').innerText = `${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalCreditos)}`;
    document.getElementById('total-debitos').innerText = `${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalDebitos)}`;
    document.getElementById('saldo-final').innerText = `${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(saldoFinal)}`;
}

// Função para inicializar a tabela com dados do Local Storage
function init() {
    const records = getRegistrosFinanceiros();
    exibirRegistros(records);
}

// Função para redirecionar para a página de edição com o índice do registro
function editarRegistro(index) {
    window.location.href = `form.html?index=${index}`;
}

// Função para aplicar o filtro por período
function aplicarFiltro() {
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const records = getRegistrosFinanceiros();

    const filteredRecords = records.filter(record => {
        const recordDate = new Date(record.data);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;

        return (!start || recordDate >= start) && (!end || recordDate <= end);
    });

    exibirRegistros(filteredRecords, startDate, endDate);
}

// Executar a função de inicialização ao carregar a página
window.onload = init;