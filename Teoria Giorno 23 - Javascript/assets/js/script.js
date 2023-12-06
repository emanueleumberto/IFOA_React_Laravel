// Formato JSON
let json = {
    "nome": "Mario",
    "cognome": "Rossi",
    "eta": 25,
    "occhiali": true,
    "linguaggi": ["Javascript", "html", "css", "sass"],
    "indirizzo": {
        "via": "test 53",
        "citta": "Roma",
        "regione": "Lazio"
    }
};

// Object Literal JS
let obj = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 25,
    occhiali: true,
    linguaggi: ['Javascript', 'html', 'css', 'sass'],
    indirizzo: {
                via: 'test 53',
                citta: 'Roma',
                regione: 'Lazio'
            }
};

// Metodi della classe JSON (stringify - parse)
console.log(obj);
let jsonObj = JSON.stringify(obj); // Metodo della classe JSON che trasforma un oggetto JS in JSON
console.log(jsonObj);
let objJson = JSON.parse(jsonObj); // Metodo della classe JSON che trasforma un JSON in oggetto JS
console.log(objJson);

// Web Storage (Local Storage - Session Storage)

console.log(window);
localStorage.setItem("test", "Mio Local Storage");
localStorage.setItem("name", "Umberto Emaneule");

console.log(localStorage.length);

let testLocal = localStorage.getItem("test");
console.log(testLocal);

let key = localStorage.key(0);
console.log(key);

localStorage.removeItem("test");

localStorage.clear();







