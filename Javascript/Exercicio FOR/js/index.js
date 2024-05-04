// Solicitar o nome da espacionave.
let spaceship = prompt("Digite o nome da nave")

let charToReplace = prompt("Qual caracter você deseja substituir?")

let replacementChar = prompt("Por qual caracter você deseja substituir?")

// Receber nome da nave caracter a caracter.
let newSpaceship = ""

// Elemental - substituir e por k
for(let pos = 0; pos < spaceship.length; pos++) {
    if(spaceship[pos] == charToReplace) {
        newSpaceship += replacementChar // Elkmkntal
    } else {
        newSpaceship += spaceship[pos] // Elemental
    }
}

alert("O novo nome da nave é " + newSpaceship)