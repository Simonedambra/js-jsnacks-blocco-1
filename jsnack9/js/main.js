'use strict'



/*creo una array con 10 valori*/
var numeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/*/var con 10 valori*/


/*creo una var con vaolore 0*/
let somma = 0;
/*/var con vaolore 0*/


/*creo un ciclo che si ripete per la lunghezza della array*/
for (let i = 0; i < numeri.length; i++) {
    /*/ciclo che si ripete*/


    /*prompt che chieda a ogni ciclo un numero e lo sommi al numero precedente*/
    somma += Number(prompt('inserisci i tuoi numeri'));

};


/*calcolo la media dividendo la somma alla lunghezza dell'array*/
let media = (somma / numeri.length)

/*spampo i risultati in console*/
console.log('la media dei numeri è=' + media);
console.log('la somma dei numeri è=' + somma);