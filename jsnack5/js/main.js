'use strict'

/**
 * creazione array
 */
let numeri = [];
/*/array*/
/**
 * creazione cicolo for
 */
for (let i = 0; i < 6; i++) {
    /*chedo all'utente 6 numeri*/
    let count = Number(prompt('inserisci il numero'));
    /*controllo che alla sua divisione per 2 il risultato sia diverso da 0*/
    if (count % 2 != 0) {
        /*se si push del numero iserito nel array*/
        numeri.push(count);
        /*/console.log  del array*/
        console.log(numeri)
    }

}
/**
 * /ciclo for
 */