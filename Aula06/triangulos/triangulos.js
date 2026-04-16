function classificarTriangulo() {
    const lado1 = Number(document.getElementById("lado1").value);
    const lado2 = Number(document.getElementById("lado2").value);
    const lado3 = Number(document.getElementById("lado3").value);
    const resultado = document.getElementById("resultado");

    if (!lado1 || !lado2 || !lado3) {
        resultado.textContent = "Informe valores validos para os tres lados.";
        return;
    }

    if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        resultado.textContent = "Os valores informados nao formam um triangulo.";
        return;
    }

    if (lado1 === lado2 && lado2 === lado3) {
        resultado.textContent = "Triangulo Equilatero: todos os lados sao iguais.";
        return;
    }

    if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
        resultado.textContent = "Triangulo Escaleno: todos os lados sao diferentes.";
        return;
    }

    resultado.textContent = "Triangulo Isosceles: dois lados sao iguais.";
}
