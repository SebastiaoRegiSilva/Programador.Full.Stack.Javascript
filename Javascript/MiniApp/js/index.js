let departureDateEntry = prompt("Digite a data de patida da nave (DD/MM/YYYY)")
// Validações futuras.
// Moment converte String em DATETIME
let departureDate = moment(departureDateEntry, "DD/MM/YYYY")
let today = moment()
let dateDiff = today - departureDate // Cálculo em Milisegundos.
let choseOption = parseInt(prompt("Escolha o formato de exibição do tempo de partida. \n1- Segundos\n2- Minutos\n3- Horas\n4- Dias\n5- Anos"))

// Solução com encadeamento de ifs.
if(choseOption == 1){
    let secondsOfDeparture = Math.round(dateDiff/1000)
    alert("Tempo de vôo: " + secondsOfDeparture + " segundos")
} else if(choseOption == 2){
    let minutesOfDeparture = Math.round(dateDiff/1000/60) // Segundos em minuto. 
    alert("Tempo de vôo: " + minutesOfDeparture + " minutos")
} else if(choseOption == 3){
    let hoursOfDeparture = Math.round(dateDiff/1000/3600) // Segundos em hora.
    alert("Tempo de vôo: " + hoursOfDeparture + " horas")
} else if(choseOption == 4){
    let daysOfDeparture = Math.round(dateDiff/1000/3600/24) // Segundos em dia.
    alert("Tempo de vôo: " + daysOfDeparture + " dias")
} else if(choseOption == 5){
    let yearsOfDeparture = Math.round(dateDiff/1000/3600/24/365) // Segundos em ano.
    alert("Tempo de vôo: " + yearsOfDeparture + " anos") 
} else {
    alert("Nenhuma opção válida foi escolhida!")
}
