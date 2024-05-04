// Solicitar o nome de uma nave.
let spaceshipName = prompt("Insira o nome da nave")
let spaceshipNameInverted = "" 

for (let i = spaceshipName.length - 1; i >= 0; i--) {
    if(spaceshipName[i] == "e"){
        break
    }
    
    spaceshipNameInverted += spaceshipName[i];
}

// R e v e l a t i o n
// 0 1 2 3 4 5 6 7 8 9
// n o i t a l e v e R - InvertedName
// Após o for vai ser impresso: n o i t a l

console.log(`Nome original da nave  ${spaceshipName} \n Nome após ocultação  ${spaceshipNameInverted}`)
alert(`Nome original da nave  ${spaceshipName} \n Nome após ocultação  ${spaceshipNameInverted}`)