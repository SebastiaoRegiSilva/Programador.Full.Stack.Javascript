let nomeNave = prompt("Insira o nome da nave!")
let qtdDobras = 0
let validarEntrada = ""

validarEntrada = parseInt(prompt("Deseja em dobra espacial?\n1- Sim\n2- Não"))

while(validarEntrada  == 1){
    qtdDobras ++
    validarEntrada = prompt("Deseja entrar em outra dobra espacial?\n1- Sim\n2- Não")
}

alert (`O nome da nave é: ${nomeNave} fez ${qtdDobras} dobras espaciais.`)
console.log(`O nome da nave é: ${nomeNave} fez ${qtdDobras} dobras espaciais.`)