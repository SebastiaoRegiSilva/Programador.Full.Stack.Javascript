alert("Bem vindo! Iremos te pedir alguns dados.")

let nomePrimeiraPessoa = (prompt("Qual é o seu nome?"));
let idadePrimeiraPessoa = parseInt((prompt("Qual é a sua idade?")))

let nomeSegundaPessoa = (prompt("Qual é o seu nome?"));
let idadeSegundaPessoa = parseInt((prompt("Qual é a sua idade?")))

let diferencaIdade = idadePrimeiraPessoa - idadeSegundaPessoa;

alert(
    nomePrimeiraPessoa + " possui " + idadePrimeiraPessoa + " anos! \n\n" +
    nomeSegundaPessoa + " possui " + idadeSegundaPessoa + " anos! \n\n" +
    "A diferença de idade entre " + nomePrimeiraPessoa + " e " + nomeSegundaPessoa + " são de " + diferencaIdade + " anos! \n"
)

console.log(nomePrimeiraPessoa + " possui " + idadePrimeiraPessoa + " anos! \n");
console.log(nomeSegundaPessoa + " possui " + idadeSegundaPessoa + " anos! \n")
console.log("A diferença de idade entre " + nomePrimeiraPessoa + " e " + nomeSegundaPessoa, "são de " + diferencaIdade + " anos! \n");