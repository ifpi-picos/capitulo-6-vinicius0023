var VariavelGlobal = ("Eu sou global");

function minhaFuncao(){

    var VariavelGlobal = ("Eu sou local");

    console.log(VariavelGlobal);//Acessando a variável global dentro da função
    console.log(VariavelGlobal);//Acessando a variável local dentro da função
}
minhaFuncao();

console.log(VariavelGlobal);//Acessando a variável global fora da função
console.log(VariavelLocal);//Tentando acessar a variável local fora da função dará erro