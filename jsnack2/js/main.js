'use stript'

let primaParola = prompt('INSERISCI LA PRIMA PAROLA');

let secondaParola = prompt('INSERISCI LA SECONDA PAROLA');

if (primaParola.length > secondaParola.length) {
    console.log(secondaParola + primaParola)
}
else if (primaParola.length < secondaParola.length) {
    console.log(primaParola + secondaParola)
}