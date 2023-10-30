/* Stampa in una console del browser il contenuto 
inserito nelle parentesi tonde */

console.log("Sono nel file esterno alla pagina");

var v; // Dichiarazione di una variabile
v = 'valore'; // Inizializzazione di una variabile
var q = 'valore'; // Dichiarazione e Inizializzazione di una variabile

var g;
var g = 'abc';

// Number | String | Boolean | Null | Undefined
var num1 = 25;
var num2 = 15.5;
var str1 = "Questa è la somma: ";
var str2 = 'Questo è u\'n "testo"';
var bol1 = true;
var bol2 = false;
var emp1 = null;
var emp2 = undefined;


var sum = num1 + num2;
var printSomma = str1 + sum;
console.log(printSomma);
console.log(str1 + (num1 + num2));


let test = "Test!";
let newTest;
const PIPPO = "Sono una costante!!";

{
    let innerTest = "Nuovo Test!!!";
    console.log(innerTest);
    newTest = innerTest + test;
}

test = "Modifico Var Test!"; 
// PIPPO = "Modifico COS Test!";  // Errore

console.log(test);
// console.log(innerTest); // Errore
console.log(newTest);


//let test = "Modifico Var Test!";
//console.log(test);


// Data Type
let data = "Ciao Sono una String";
console.log(typeof data);
data = 25;
console.log(typeof data);
data = true;
console.log(typeof data);

 
// Operatori Aritmetici
// + - * / %

let n1 = 3;
let n2 = 10;
let somma = n1 + n2;
let diff = n2 - n1;
let molt = n2 * n1;
let div = n2 / n1;
let mod = n2 % n1;
console.log("Somma: " + somma);
console.log("Differenza: " + diff);
console.log("Moltiplicazione: " + molt);
console.log("Divisione: " + div);
console.log("Resto: " + mod);

//n1 = n1 + 2; 
//n1 += 2; 
//n2 += n1 + 3;

// Operatori Logici | == | === | != | !== |
// && -> VERO se entrambe le condizioni sono vere 
// || -> VERO se almeno una delle due condizione è vera
// ! -> VERO se la condizione è FALSA e il contrario
let n3 = 5;
let n4 = '5';
let n5 = 10;
console.log(n3 !== n4 || n3 > n5);

// Operatore Ternario 
// let var = (condizione) ? 'true' : 'false'
let eta = 19;
let accesso = (eta >= 18) ? 'Accesso Consentito' : 'Accesso Negato';
console.log(accesso);
