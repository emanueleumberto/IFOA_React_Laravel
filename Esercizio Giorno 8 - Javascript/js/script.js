let x = 15;
let z = x;

z += 5;

console.log(x, z)

let obj1 = {txt: "ciao"}
let obj2 = obj1;
let obj3 = {};
Object.assign(obj3, obj1)

obj3.txt = "Nuovo valore";

console.log(obj1, obj3)


let j = 5;
// let y = j + 1;
// console.log(j, y); // j = 5, y = 6
let y = j++;
console.log(j, y); // j = 6, y = 5

let m = ++j;
console.log(j, m); // j = 6, m = 6


for(let i = 0; i <5; i++) {
    
}


let f = 25;
let g = 5 * 8 - 2;


// Valore Assoluto
let v = Math.abs(-25); // Math.abs(num) ritorna un valore assoluto
