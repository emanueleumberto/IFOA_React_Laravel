// Spread Operator 
//...nomeVar

let arr1 = [5, 7, 9];
let arr2 = Object.assign([], arr1);
let arr3 = [6, ...arr1, 3];

console.log(...arr1)
console.log(arr2)
console.log(arr3)

let obj1 = {
    name: "Mario",
    lastname: "Rossi",
    age: 45,
    city: "Roma"
}

let obj2 = Object.assign({}, obj1);
let obj3 = {
    ...obj1,
    city: "Milano",
    age: 22,
    test: true
}

obj1 = null;
console.log(obj1)
console.log(obj2)
console.log(obj3)


// Rest Parameter 
// function func(...parameter) {}

function func(nome, cognome) {
    console.log(nome, cognome)
}

function func1() {
    console.log(arguments.length)
    console.log(arguments[0])
}

function func2(...args) {
    console.log(args.length)
    console.log(args[0])
}

func('Mario', 'Rossi')
func1(9,5,6,7,9)
func2(9,5,6,7,9)
func2(...arr3)

// Destructuring Operator

let obj = {
    name: "Mario",
    lastname: "Rossi",
    age: 45,
    city: "Roma"
}

obj.name;
obj['name'];

for (const key in obj) {
    console.log(obj[key])
}

/* let name = obj.name;
let lastname = obj.lastname; */

let { city: citta, name } = obj;

console.log(citta)
console.log(name)

let arr = [5, 7, 9];
let x = arr[1];
let [ , , y ] = arr;


console.log(x, y)

// Template Literals 

let str1 = "Ciao sono " + obj.name + " " + obj.lastname + " la mia città è " + obj.city + " ed ho " + obj.age + " anni";
let str2 = `Ciao sono ${obj.name} ${obj.lastname} 
            la mia città è ${obj.city} 
            ed ho ${obj.age} anni`;
            
console.log(str1)
console.log(str2)

// Metodi Array
// Splice | Slice
let arrMethod = [5, 7, 9, 56, 12, 75, 6, 8];
console.log(arrMethod)
let arrRemove = arrMethod.splice(2, 3);
console.log(arrRemove)
console.log(arrMethod)
let arrUpdate = arrMethod.splice(2, 1, 99999999)
console.log(arrUpdate)
console.log(arrMethod)
let arrAdd = arrMethod.splice(2, 0, 555555555)
console.log(arrAdd)
console.log(arrMethod)

let newArr = [5,5,5];

console.log(typeof newArr)

//let newArrConcat = arrMethod.concat(newArr)
let newArrConcat = [...arrMethod, ...newArr]
let sliceArr = newArrConcat.slice(2, 6);
console.log(newArrConcat)
console.log(sliceArr)


// Dichiarazione di funzione
f1();
function f1(params) {
    // blocco di istruzioni
}
f1();

// Funzione Espressione
//f2(); // Errore!!!
let f2 = function (params) {
    // blocco di istruzioni
}
f2();

// Funzioni Freccia
let f3 =(param) => {
    // blocco di istruzioni
}

() => {
    // blocco di istruzioni
}

param => {
    // blocco di istruzioni
}

(param1, param2, ...params) => {
    // blocco di istruzioni
}

() => returnValue



// For loop

let altroArray = ['Uno', 'Due', 'Tre', 'Quattro', 'Cinque'];
console.log(altroArray)
for(let i=0; i<altroArray.length; i++) {
    console.log(i + ": " + altroArray[i])
}

for (const key in altroArray) {
    console.log(key + ": " + altroArray[key])
}

for (const value of altroArray) {
    console.log(value)
}

console.log("**********************************")

// Array Method Advanced


function callFunc(val) {
    console.log(val);
}

// callFunc('ciao')

altroArray.forEach(
    callFunc
)

console.log('--------')

altroArray.forEach(
    function(val) {
        console.log(val);
    }
)

console.log('--------')

// forEach() -> itera un array, non ha ritorno 
altroArray.forEach((val, index) => console.log(index + ": " + val))


/* let nArr = [];
altroArray.forEach(val => {
    let str = val + '!!!';
    nArr.push(str);
}) */

/* let acc = 0;
altroArray.forEach(val => {
    acc += val;
}) */

// map() -> modifica ogni elemento contenuto in un array e ne ritorna un nuovo array modificato
let newArrMap = altroArray.map(ele => ele + '!!!')
console.log(altroArray)
console.log(newArrMap)

// filter() -> filtra un array in base ad una condizione e ne ritorna un nuovo array filtrato
let filterArray = altroArray.filter(ele => ele.length > 3)
console.log(altroArray)
console.log(filterArray)

// reduce() -> manipola tutti i valori di un array di tipo numerico e ne restituisce un risultato
let arrNum = [5, 3, 8, 6, 2];
let tot = arrNum.reduce((acc, value) => acc * value, 1);
console.log(tot)

// every() -> restituisce true se tutti i valori di un array soddisfano una condizione
// some() -> restituisce true se almeno un valore dell'array soddisfa una condizione
let b = arrNum.every(ele => ele > 0);
console.log(b)
let s = arrNum.some(ele => ele > 8);
console.log(s)

console.log(arrNum.indexOf(8));

// find() -> restituisce un elemento(oggetto) in base ad una condizione
// findIndex() -> restituisce l'indice di un elemento(oggetto) in base ad una condizione

let arrUser = [{
        id: 1,
        name: "Mario",
        lastname: "Rossi",
        age: 45,
        city: "Roma"
    },{
        id: 2,
        name: "Giuseppe",
        lastname: "Verdi",
        age: 22,
        city: "Milano"
    },{
        id: 3,
        name: "Francesca",
        lastname: "Neri",
        age: 31,
        city: "Napoli"
    }]

let user = arrUser.find(u => u.id === 1);
console.log(user)
let indexUser = arrUser.findIndex(u => u.name === 'Francesca');
console.log(indexUser)


