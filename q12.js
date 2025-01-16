const adicionar = (num1, num2) => {
    return num1 + num2;
};

const subtrair = (num1, num2) => {
    return num1 - num2;
};

const multiplicar = (num1, num2) => {
    return num1 * num2;
};

const dividir = (num1, num2) => {
    if (num2 === 0) {
        return "Erro: Divisão por zero!";
    }
    return num1 / num2;
};

const exibirResultado = (operacao, num1, num2) => {
    let resultado;
    switch (operacao) {
        case "adicionar":
            resultado = adicionar(num1, num2);
            break;
        case "subtrair":
            resultado = subtrair(num1, num2);
            break;
        case "multiplicar":
            resultado = multiplicar(num1, num2);
            break;
        case "dividir":
            resultado = dividir(num1, num2);
            break;
        default:
            resultado = "Operação inválida!";
    }
    alert(`O resultado da operação ${operacao} é: ${resultado}`);
};

const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));
const operacao = prompt("Digite a operação (adicionar, subtrair, multiplicar, dividir):");

exibirResultado(operacao, num1, num2);
