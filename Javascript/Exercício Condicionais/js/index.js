alert("Seja bem vindo astronauta! Iremos partir em breve!")

let namePilot = prompt("What is your name?")
let velocity = 0
let newVelocity = parseInt(prompt("Qual é o velocidade da máquina, " + namePilot + "?"))
let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "km/s!")

/* Resolução com if encadeado. */

if (confirmVelocity && newVelocity >= 0) {
    velocity = newVelocity
}
if (velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if (velocity < 40) {
    alert("Você está devagar. Podemos aumentar mais.")
} else if (velocity < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if (velocity < 100) {
    alert("Velocidade alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}
alert("Piloto: " + namePilot + "\nVelocidade: " + velocity + "km/s")

console.log(`Piloto ${namePilot}, Nova velocidade ${newVelocity}.`)
