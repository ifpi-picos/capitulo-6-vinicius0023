const solicitarAltura = () => {
    return parseFloat(prompt("Digite sua altura em metros:"));
};

const solicitarPeso = () => {
    return parseFloat(prompt("Digite seu peso em quilogramas:"));
};

const calcularIMC = (altura, peso) => {
    return peso / (altura * altura);
};

const determinarCategoriaIMC = (imc) => {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
};

const exibirResultado = (altura, peso, imc, categoria) => {
    alert(`Sua altura: ${altura}m\nSeu peso: ${peso}kg\nSeu IMC: ${imc.toFixed(2)}\nCategoria: ${categoria}`);
};

const altura = solicitarAltura();
const peso = solicitarPeso();
const imc = calcularIMC(altura, peso);
const categoria = determinarCategoriaIMC(imc);

exibirResultado(altura, peso, imc, categoria);
