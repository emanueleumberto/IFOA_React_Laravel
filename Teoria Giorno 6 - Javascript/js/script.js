let nome = 'Mario';
let cognome = 'Rossi';
let eta = 45;
let citta = 'Roma';

let eta2 = eta;
eta2 += 5;

console.log(eta2);
console.log(eta);

console.log(nome);
nome = 'Giuseppe';

const utente = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 45,
    citta: 'Roma',
    attivo: true
}

//console.log(utente.nome) // Leggo una proprietà di un ogg
//utente.nome = 'Giuseppe'; // Modifico il valore di una  proprietà ad un ogg
//utente.cap = '00100'; // Aggiunge una nuova proprietà ad un ogg
//delete utente.citta; // Elimino una proprietà da un ogg

// Errore non posso modificare una costante
/* utente = {
    nome: 'Giuseppe',
    cognome: 'Verdi',
    eta: 21,
    citta: 'Milano'
} */ 

const newUtente = utente; // Assegno ad newUtente le stesso riferimento alla zona di memoria di utente
const copyUtente = Object.assign({}, utente); // Faccio  una copia di utente in copyUtente
/* const altroUtente = {};
altroUtente.nome = utente.nome;
altroUtente.cognome = utente.cognome; */

// Soluzione alternativa
/* let copy2;
Object.assign(copy2, utente); */

console.log("Utente: ", utente);
console.log("CopyUtente: ", copyUtente);

console.log('Modifico NewUtente')
newUtente.nome = 'Giuseppe';
newUtente.cognome = 'Verdi';
newUtente.citta = 'Milano';

console.log("Utente: ", utente);
console.log(typeof utente);
console.log("NewUtente: ", newUtente);
console.log("CopyUtente: ", copyUtente);
console.log(copyUtente['cognome'])
console.log(copyUtente.cognome)

// Array
// let arr = [0:val, 1:val, 2:val, ... , n-1:val]  
let animal1 = 'Gatto';
let animal2 = 'Cane';
let animal3 = 'Tartaruga';
let animals = ['Gatto', 'Cane', 'Tartaruga'];
let numbers = [25, 49, 32];
let cond = [true, false, false];
let utenti = [utente, copyUtente, newUtente];
let mix = ['testo', 23, true, utente];

//let arr = new Array(); // metodo equivalente
const arr = ['Gatto', 'Cane', 'Tartaruga', 'Anatra'];
console.log(typeof arr);
console.log(arr[2])

arr[2] = 'Coniglio'; // Modifico un valore in un array
arr[4] = 'Serpente'; // Aggiungo un valore in un array

arr.push('Colomba'); // Aggiunge un elemento in coda ad un array
arr.unshift('Orso'); // Aggiunge un elemento in testa ad un array
let endVal = arr.pop(); // Elimina e restituisce l'ultimo elemento contenuto in un array
console.log(endVal + ' è il valore eleminato dal nostro array')
let startVal = arr.shift(); // Elimina e restituisce il primo elemento contenuto in un array
console.log(startVal + ' è il valore eleminato dal nostro array')
arr.splice(1, 2); // Elimina e restituisce n elementi partendo da un indice specificato | splice(start, deleteCount?)
arr.splice(1, 1, 'Coniglio') // Elimina ed insersice un nuovo elemento partendo da un indice specificato | splice(start, deleteCount?, ...newElement?)
arr.splice(1, 0, 'Tartaruga') // insersice un nuovo elemento partendo da un indice specificato | splice(start, deleteCount?, ...newElement?)
arr.sort() // Ordina gli elementi di un array;


let arrLength = arr.length;
 
console.log(arr)
console.log(arr.length); // La proprietà length mi restituisce la lunghezza del nostro array


// Strutture condizionali
// If - Else

let num = prompt('Inserisci un numero');
if(num > 10) {
    console.log("il numero inserito è maggiore di 10");
} else if(num == 10) {
    console.log("il numero inserito è uguale a 10");
} else {
    console.log("il numero inserito è minore di 10");
}

console.log("FINE")

// TRUE: true | altro numero | 'valore' | {} | []
// FALSE: false | 0 | '' | null | undefined | NaN
if(undefined) {
    console.log("Eseguo il blocco di istruzioni");
}