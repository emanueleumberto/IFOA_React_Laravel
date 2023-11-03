
/* 
    // Dichiarazione di Funzione
    function nameFuntion(...params?) {
        // blocco di istruzioni
        return? val
    } 
    nameFuntion(...params?) // Invocazione di funzione

    // Funzioni Espressione
    let ExprFunc = function(...params?) {
        // blocco di istruzioni
        return? val
    }
    ExprFunc(...params?) // Invocazione di funzione

    // Arrow Function
    let arrowFunc = () => {// blocco di istruzioni}
*/

function printString() {
    console.log("Hello World!");
}

printString();

function somma(x, y) {
    let sum = x + y;
    //console.log(sum)
    return sum;
}

let res = somma(3, 9);
console.log(res)
let sum2 = somma(res, 5);
console.log(sum2)
let str = somma('Ciao ', 'ragazzi')
console.log(str)

let num = somma(5,8,6);
console.log(num)

let und = somma(6);
console.log(und)

// Array arguments nelle funzioni di Javascript

function func() {
    let result = 0;
    console.log("Parametri di una funzione: " + arguments.length)
    for(let i=0; i<arguments.length; i++) {
        //console.log(arguments[i])
        result += arguments[i];
    }
    return result;
}

let r = func(5, 8);
console.log(r);

// Hoisting delle variabili/funzione
console.log("**********************************")


console.log(test);
//console.log(test2);
var test = "Test Var";
let test2 = "Test Let";
console.log(test);
console.log(test2);

func();
function func() {
    console.log("Test Func")
}
func();



// Expression Function

// func2(); // Errore
let func2 = function() {
    console.log("Test Func2")
}
func2();


// Particolarità di una funzione Javascript

let f1 = function () {
    return 'Sono una funzione';
}

let result = f1; // assegno il corpo della funzione alla variabile result
console.log(result);


// Arrow Function

let func1 = function(x, y) {
    console.log("Sono una funzione")
    return 'Sono una funzione';
}

let arrFunc1 = () => {
    console.log("Sono una funzione")
}

let arrFunc2 = () => console.log("Sono una funzione");
let arrFunc3 = () => "Sono una funzione";
let arrFunc4 = (x, y) => "Sono una funzione";

console.log(arrFunc3())

// Scope di una variabile

let v1 = "Sono una variabile globale"; // Global Scope
var v2 = "Sono una variabile globale"; // Global Scope

{
    let v1 = "Sono una variabile di blocco"; // Block Scope
    var v2 = "Sono una variabile globale"; // Global Scope // PROBLEMA
}

function fscope() {
    let v1 = "Sono una variabile di Function"; // Function Scope
    var v2 = "Sono una variabile di Function"; // Function Scope
}

for(var i=0; i<5; i++) {
    console.log(i);
}
console.log(i); // Global Scope // PROBLEMA utilizzare sempre let


// Metodi della Stringa

let stringa = " Sono una variabile - di tipo String di Epicode ";

console.log(stringa.indexOf("di"));
console.log(stringa.lastIndexOf("di"));
console.log(stringa.search("di"));
console.log(stringa.length)
console.log(stringa.slice(5, 18))
console.log(stringa.slice(-8))
console.log(stringa.replace('a', 'X'))
console.log(stringa.replaceAll('a', 'X'))
console.log(stringa.toLowerCase())
console.log(stringa.toUpperCase())
console.log(stringa.concat(' - FINE'))
console.log(stringa.trim())
console.log(stringa.charAt(10));
console.log(stringa.split('-'))

// Metodi di Math

let numCas = Math.random() * 10;
console.log(numCas);
console.log(Math.floor(numCas));
console.log(Math.ceil(numCas));
console.log(Math.round(numCas))
console.log(Math.max(19,8,4,2,15))
console.log(Math.min(19,8,4,2,15))

// Metodi di Date

let now = new Date();
let bdate = new Date(2023, 10, 23)
console.log(now)
console.log(bdate)

now.setDate(22);

console.log('Oggi è il giorno ' + now.getDate() + " del mese di " + (now.getMonth()+1))

console.log("FINE")