const gerarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const solicitarPalpite = (tentativa) => {
    return parseInt(prompt(`Tentativa ${tentativa}: Digite um número entre 1 e 100:`));
};

const verificarPalpite = (palpite, numeroSecreto) => {
    if (palpite === numeroSecreto) {
        return "correto";
    } else if (palpite < numeroSecreto) {
        return "menor";
    } else {
        return "maior";
    }
};

const jogarAdivinhacao = () => {
    const numeroSecreto = gerarNumeroAleatorio();
    let tentativas = 10;

    for (let i = 1; i <= tentativas; i++) {
        const palpite = solicitarPalpite(i);
        const resultado = verificarPalpite(palpite, numeroSecreto);

        if (resultado === "correto") {
            console.log(`Parabéns! Você adivinhou o número secreto (${numeroSecreto}) em ${i} tentativas.`);
            return;
        } else if (resultado === "menor") {
            console.log("Seu palpite é menor do que o número secreto.");
        } else {
            console.log("Seu palpite é maior do que o número secreto.");
        }
    }

    console.log(`Que pena! Você não conseguiu adivinhar o número secreto (${numeroSecreto}) em 10 tentativas.`);
};

jogarAdivinhacao();
