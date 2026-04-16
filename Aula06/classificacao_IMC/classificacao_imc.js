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
    let classificacao = "";

    switch (true) {
        case imc < 18.5:
            classificacao = "Baixo Peso";
            break;
        case imc < 25:
            classificacao = "Peso Normal (Eutrofico)";
            break;
        case imc < 30:
            classificacao = "Sobrepeso";
            break;
        case imc < 35:
            classificacao = "Obesidade Grau I";
            break;
        case imc < 40:
            classificacao = "Obesidade Grau II (Elevado)";
            break;
        default:
            classificacao = "Obesidade Grau III (Muito Elevado)";
    }

    resultado.textContent = "Seu IMC e " + imcFormatado + ". Classificacao: " + classificacao + ".";
});
