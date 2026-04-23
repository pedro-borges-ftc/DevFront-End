const form = document.getElementById("form-imc");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);

    if (!peso || !altura || altura <= 0) {
        resultado.textContent = "Informe valores validos para peso e altura.";
        return;
    }

    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2).replace(".", ",");

    if (imc < 18.5) {
        resultado.textContent = "Seu IMC e " + imcFormatado + ". Voce esta abaixo do peso ideal.";
        return;
    }

    if (imc <= 25) {
        resultado.textContent = "Seu IMC e " + imcFormatado + ". Voce esta no peso ideal.";
        return;
    }

    resultado.textContent = "Seu IMC e " + imcFormatado + ". Voce esta acima do peso ideal.";
});
