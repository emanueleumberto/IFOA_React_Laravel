/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. 
 Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let str = 'Ciao sono una stringa'; // Una string è un semplice testo
let num = 25; // Numero
let bol = true; // Un booleano è un valore che può assumere True o False

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Umberto";
console.log("Il mio nome è " + name);
//console.log(window)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 12;
let num2 = 20;
let sum = num1 + num2;
console.log("La somma tra " + num1 + " e " + num2 + " è: " + sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x;
x = 12;
console.log("Il valore della variabile x è: " + x);


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata 
  con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let name = "Mario"; // Errore!!!
name = "Mario";
console.log("Il nuovo valore della variabile name è: " + name);
const COGNOME = "Rossi";
console.log("Il valore della costante cognome è: " + COGNOME);
// COGNOME = "Verdi"; // Errore!

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata 
 (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let diff = x - 4;
console.log("La differenza tra il valore contenuto nella variabile x e 4 è: " + diff);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1, name2;
name1 = 'john';
name2 = 'John';

console.log("Il valore della variabile name1:" + name1 + " e la varibile name2: " + name2 + " è uguale? " + (name1 === name2));
console.log("Il valore della variabile name1:" + name1 + " e la varibile name2: " + name2.toLowerCase() + " è uguale? " + (name1 === name2.toLowerCase()))