/* Array é uma estrutura de dados capaz de armazenar e oragnizar dados, 
semelhante as listas. Podendo armazenar quaisquer tipos de dados.*/

/*
    1: Filtrar o nome das naves que possuem mais de 9 tripulantes;
    2: Informar o nº da plataforma em que está a primeira nave que ainda está em engate pendente. FINDINDEX
    3: Todos os nomes das naves em caixa alta;
    4: Alerta com todos estas informações.

*/
// Nome da nave, Nº Tripulantes, Engate pendente
const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

// 1:
let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9 // Golias - 10, Darwin - 15
}).map(spaceship => { // Encadear para recuperar somente o nome da nave.
    return spaceship[0] // Nome
})

// 2:
let ongoingHitchPlatform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false // Retorna indexes onde o valor é falso.
})

// 3:
let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase() // Retorno de todos os nomes em caixa alta.
})

// 4:
let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ")
message += "\nPlataforma com processo de engate: " + (ongoingHitchPlatform + 1)
message += "\nEspaçonaves destacadas: " + highlightedSpaceships.join(", ")

alert(message)

