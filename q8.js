function verificarEscopo(){
    if (true){
        let variavelBloco = "Eu sou uma variável de bloco";
        console.log(variavelBloco); // Acessando a variável dentro do bloco
    }
    console.log(variavelBloco); // Tentando acessar a variável fora do bloco dará erro
}
verificarEscopo();