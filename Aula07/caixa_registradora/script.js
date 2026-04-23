const productValueInput = document.getElementById('productValue');
const addButton = document.getElementById('addButton');
const productList = document.getElementById('productList');
const totalValueInput = document.getElementById('totalValue');
const paidValueInput = document.getElementById('paidValue');
const changeValueInput = document.getElementById('changeValue');
const calculateChangeButton = document.getElementById('calculateChangeButton');
const clearButton = document.getElementById('clearButton');

const produtos = [];

function formatCurrency(value) {
  return value.toFixed(2).replace('.', ',');
}

function atualizarResumo() {
  productList.innerHTML = '';

  let total = 0;
  for (let i = 0; i < produtos.length; i += 1) {
    total += produtos[i];

    const item = document.createElement('li');
    item.textContent = `Produto ${i + 1}: R$ ${formatCurrency(produtos[i])}`;
    productList.appendChild(item);
  }

  totalValueInput.value = formatCurrency(total);
  return total;
}

function adicionarProduto() {
  const value = Number(productValueInput.value);
  if (!value || value <= 0) {
    alert('Digite um valor válido maior do que zero.');
    return;
  }

  produtos.push(value);
  atualizarResumo();
  productValueInput.value = '';
  productValueInput.focus();
}

function calcularTroco() {
  const total = atualizarResumo();
  const pago = Number(paidValueInput.value);

  if (!pago || pago < 0) {
    alert('Digite o valor pago corretamente.');
    return;
  }

  const troco = pago - total;
  changeValueInput.value = troco >= 0 ? formatCurrency(troco) : 'Valor pago insuficiente';
}

function limparCaixa() {
  produtos.length = 0;
  productList.innerHTML = '';
  totalValueInput.value = formatCurrency(0);
  paidValueInput.value = '';
  changeValueInput.value = formatCurrency(0);
  productValueInput.value = '';
  productValueInput.focus();
}

addButton.addEventListener('click', adicionarProduto);
calculateChangeButton.addEventListener('click', calcularTroco);
clearButton.addEventListener('click', limparCaixa);
productValueInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    adicionarProduto();
  }
});
paidValueInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    calcularTroco();
  }
});
