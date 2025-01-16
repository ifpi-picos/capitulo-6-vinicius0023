function lerValorEmReal() {
    let valorEmReal = parseFloat(prompt("Digite o valor em Real (BRL):"));
    return valorEmReal;
}

function converterParaDolar(valorEmReal) {
    let taxaDeConversao = 6.06; 
    let valorEmDolar = valorEmReal * taxaDeConversao;
    return valorEmDolar;
}

function exibirResultado(valorEmDolar) {
    alert("O valor em Dólar (USD) é: " + valorEmDolar.toFixed(2));
}

function conversorDeMoeda() {
    let valorEmReal = lerValorEmReal();
    let valorEmDolar = converterParaDolar(valorEmReal);
    exibirResultado(valorEmDolar);
}

conversorDeMoeda();