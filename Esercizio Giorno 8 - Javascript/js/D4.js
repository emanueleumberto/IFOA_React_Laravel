/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa 
che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo 
sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e 
 calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area1(l1, l2) {
    return l1 * l2;
}
let result = area1(5,8);
console.log(result);

const area2 = function(l1, l2){
    let res = l1 * l2;
    console.log(res);
}
area2(5,8);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri 
 è il medesimo deve invece tornare la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
    if(num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return num1 + num2;
    }
}

console.log(crazySum(10, 10))


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito 
 come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero 
 fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(num) {
    if(num > 19) {
        return Math.abs(num - 19) * 3;
    } else {
        return Math.abs(num - 19);
    } 
}
console.log(crazyDiff(10))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if( (n > 20 && n <= 100) || n === 400) {
        return true;
    } else {
        return false;
    }
}

console.log(boundary(400))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(str) {
    //if(str.indexOf("EPICODE") === 0) {
    if(str.startsWith("EPICODE")) {
        return str;
    } else {
        return "EPICODE " + str;
    }
    
}

console.log(epify("Ciao a tutti sono EPICODE"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
    if(n >= 0 && ( n % 3 === 0  ||  n % 7 === 0 ) ) {
        return true;
    } else {
        return false;
    }
}

console.log(check3and7(12))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita 
 come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {

    // return str.split('').reverse().join(''); Soluzione annidata

    let arrStr = str.split('');
    let arrStrRev = arrStr.reverse();
    let arrStrRevJoin = arrStrRev.join('');
    return arrStrRevJoin;
}

console.log(reverseString("EPICODE"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata 
 da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(str) {
    let arrStr = str.split(' ');
    let newStr = ''; 
    for(let i=0; i<arrStr.length; i++) {
        let letter = arrStr[i].charAt(0).toUpperCase();
        let strSlice = arrStr[i].slice(1)
        let strUpper = letter + strSlice;
        //console.log(strUpper)
        newStr += strUpper + ' ';
    }
    //console.log(arrStr)
    return newStr
}

console.log(upperFirst("ciao a tutti sono epicode"))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(str) {
    return str.slice(1, -1);
}

console.log(cutString("sono epicode"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e 
 ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    const arr = [];
    for(let i=0; i<n; i++) {
        let numRand = Math.round(Math.random() * 10);
        arr.push(numRand);
    }
    return arr
}

console.log(giveMeRandom(15))