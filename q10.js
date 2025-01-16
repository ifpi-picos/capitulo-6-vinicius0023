const solicitarNumero = (mensagem) =>{
    const numero = parseFloat(prompt(mensagem));
    return numero;
};

const calcularMedia = (num1, num2) =>{
    return (num1 + num2) / 2;
};

const numero1 = solicitarNumero("Digite o primeiro número:");
const numero2 = solicitarNumero("Digite o segundo número:");

const media = calcularMedia(numero1, numero2);

console.log("A média dos dois números é: " + media);