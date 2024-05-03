
Crea un array vuoto.

-array
--let numeri = [];


Chiedi per 6 volte all’utente di inserire un numero,

-creazione cicolo for con 6 ripetizioni
 
--for (let i = 0; i < 6; i++) 

-let count = Number(prompt('inserisci il numero'));

--/*chedo all'utente 6 numeri*/


Se è dispari inseriscilo nell’array.
-controllo con un if che alla sua divisione per 2 il risultato sia diverso da 0
    
--if (count % 2 != 0) 


Stampa in console l'array risultante.

---se si push del numero iserito nel array

----numeri.push(count)

-console.log  del array
--console.log(numeri)
    
