const campoNumero = document.getElementById("numero");
const botaoCalcular = document.getElementById("btnCalcular");
const listaTabuada = document.getElementById("listaTabuada");

function gerarTabuada() {
  const numero = Number(campoNumero.value);

  listaTabuada.innerHTML = "";

  if (campoNumero.value === "") {
    const item = document.createElement("li");
    item.textContent = "Digite um numero para calcular a tabuada.";
    listaTabuada.appendChild(item);
    return;
  }

  let contador = 1;

  while (contador <= 10) {
    const item = document.createElement("li");
    item.textContent = `${numero} x ${contador} = ${numero * contador}`;
    listaTabuada.appendChild(item);
    contador++;
  }
}

botaoCalcular.addEventListener("click", gerarTabuada);
