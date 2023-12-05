/*
    Esercizio 1
    Crea una classe User per la creazione di oggetti di tipo “utente”. 
    Il suo costruttore dovrà inizializzare ogni oggetto utente con i seguenti 
    attributi:
        - firstName
        - lastName
        - age
        - location
    
    Aggiungi alla classe User anche un metodo che restituisca il confronto 
    con l'età di un'altra persona.
    Ad esempio, date due istanze della classe utente “x” e “y” inizializzate con 
    le proprietà sopra descritte, il metodo dovrà restituire una frase simile a 
    “x è più vecchio di y” a seconda del risultato del confronto.
    
    Crea degli oggetti a partire dalla classe User e verifica che la comparazione 
    tra le età funzioni correttamente.
*/

class User {
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    confronto(persona) {
        if(this.age > persona.age) {
            return this.firstName + ' è più vecchio di ' + persona.firstName;
        } else if(this.age < persona.age) {
            return persona.firstName + ' è più vecchio di ' + this.firstName;
        } else {
            return persona.firstName + ' ha la stessa età di ' + this.firstName;
        }
    }
}

let m = new User('Mario', 'Rossi', 29, 'Roma');
let g = new User('Giuseppe', 'Verdi', 31, 'Milano');
let f = new User('Francesca', 'Neri', 29, 'Napoli');

console.log(m.confronto(g));
console.log(f.confronto(m));
console.log(g.confronto(f));


/* 

    Esercizio 2
    Crea un form per la creazione di oggetti “Pet” (animali domestici).
    La classe Pet dovrà essere dotata delle seguenti proprietà:
        - petName
        - ownerName
        - species // (cane, gatto, coniglio etc.)
        - breed // (labrador, soriano, nano etc.)
    
    Nella classe che utilizzerai per creare questi oggetti aggiungi anche 
    un metodo che restituisca true se due animali condividono lo stesso padrone.
    
    Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e 
    mostrane i dati in una lista sottostante.

*/

class Pet {
    static count = 0;
    constructor(petName, ownerName, species, breed){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
        Pet.count++;
    }

    ownerNameTest(pet) {
        if(pet.ownerName === this.ownerName) {
            return true;
        } else {
            return false;
        }
    }
}

/* let p1 = new Pet('Bobby', 'Mario Rossi', 'cane', 'labrador');
let p2 = new Pet('Billy', 'Giuseppe Verdi', 'gatto', 'soriano');

console.log(p1)
console.log(p2)
console.log(p1.ownerNameTest(p2)) */

let formBtn = document.querySelector('#petForm button');
formBtn.addEventListener('click', () => {
    //let f = document.forms;
    //let f = document.querySelector('#petForm form')
    let f = document.querySelectorAll('#petForm input, #petForm select')

    let petName = f[0].value;
    let ownerName = f[1].value;
    let species = f[2].value;
    let breed = f[3].value;

    let p = new Pet(petName, ownerName, species, breed);
    addList(p);

    f[0].value = '';
    f[1].value = '';
    f[2].value = '';
    f[3].value = '';
})

function addList(p) {
    let ul = document.querySelector('#listPet ul');
    // <li class="list-group-item">An item</li>
    let li = document.createElement('li');
    li.classList.add("list-group-item");
    li.innerHTML = `
            <strong>PetName:</strong> ${p.petName}   
            <strong>OwnerName:</strong> ${p.ownerName}  
            <strong>Species:</strong> ${p.species}  
            <strong>Breed:</strong> ${p.breed}`;
    ul.appendChild(li);

    document.querySelector('#listPet h3 span').innerText = Pet.count;
}