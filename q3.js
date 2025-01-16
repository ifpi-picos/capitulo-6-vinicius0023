function calcularMedia(n1, n2, n3) {
    let num1 = parseFloat(n1);
    let num2 = parseFloat(n2);
    let num3 = parseFloat(n3);

    let numeros = [num1, num2, num3];

    let soma = numeros.reduce((acc, num) => acc = num, 0);

    let media = soma / numeros.length;

    return Math.round(media);
}
let media = calcularMedia("4.5", "6.2", "8.3");
console.log(`a média arredondada é: ${media}`)