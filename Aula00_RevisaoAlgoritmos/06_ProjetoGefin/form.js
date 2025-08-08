document.getElementById('form-financeiro').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const index = document.getElementById('record-index').value;
    const codigo = document.getElementById('codigo').value;
    const descricao = document.getElementById('descricao').value;
    const data = document.getElementById('data').value;
    const valor = document.getElementById('valor').value;
    const tipo = document.getElementById('tipo').value;
    
    const newRecord = { codigo, descricao, data, valor, tipo };
    
    let records = localStorage.getItem('registrosFinanceiros');
    records = records ? JSON.parse(records) : [];
   
    if (index) {
        records[parseInt(index)] = newRecord;
    } else {
        records.push(newRecord);
    }
    
    localStorage.setItem('registrosFinanceiros', JSON.stringify(records));
    
    window.location.href = 'table.html'; // Redireciona de volta para a página de listagem
}
);

function carregarRegistroParaEditar() {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');
    if (index !== null) {
        const records = JSON.parse(localStorage.getItem('registrosFinanceiros'));
        if (records && records[index]) {
            const record = records[index];
            document.getElementById('record-index').value = index;
            document.getElementById('codigo').value = record.codigo;
            document.getElementById('descricao').value = record.descricao;
            document.getElementById('data').value = record.data;
            document.getElementById('valor').value = record.valor;
            document.getElementById('tipo').value = record.tipo;
            document.getElementById('form-title').textContent = 'Editar Registro Financeiro';
            document.querySelector('input[type="submit"]').value = 'Atualizar Registro';
        }
    }
}

// Executar a função de inicialização ao carregar a página
window.onload = carregarRegistroParaEditar;