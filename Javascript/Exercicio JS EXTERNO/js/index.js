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




/* 1 Pedir o nome pessoa mais velha;
2 Pedir o idade da pessoa mais velha; <br>

    3 Pedir o nome da pessoa mais nova;
    4 Pedir o idade da pessoa mais nova;<br>

        5 Calcular a diferença de idade entre elas.<br>

            6 Exibir o nome e idade da pessoa mais velha.<br>

                7 Exibir o nome e idade da pessoa mais nova.<br>

                    8 Exibir diferença de idade.<br></br> */