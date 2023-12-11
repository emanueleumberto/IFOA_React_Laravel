// Chiamate Ajax tramite XMLHttpRequest

let xhr = new XMLHttpRequest(); // Ogg in grado di effettuare Richieste al Server - readyState = 0
xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); // Definisco il Method e URL della chiamate - readyState = 1
xhr.send(); // Eseguo la chiamata - readyState = 2
// readyState = 3	LOADING	Downloading; responseText holds partial data.
// readyState = 4	DONE	The operation is complete.
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // Controllo che la risposta del server sia terminata (xhr.readyState == 4) e che sia terminata con successo (xhr.status == 200)
    console.log("The operation is complete");
    let json = xhr.responseText; // (xhr.responseText) ho accesso al JSON che mi invia il server
    let obj = JSON.parse(json); // Faccio il Parse del JSON e lo trasformo  in un array di ogg JS.
    console.log(obj);
    createList(obj);
  }
};
xhr.onerror = function () {
  console.log("Error!! " + xhr.responseText);
};

// Chiamate Ajax tramite Fetch

fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
  .then((response) => response.json())
  .then((obj) => {
    console.log(obj);
    createList(obj);
  })
  .catch((error) => console.log("Error!! " + error));

function createList(users) {
  let div = document.querySelector(".users");
  users.forEach((u) => {
    let p = document.createElement("p");
    p.innerText = u.name + " (" + u.email + ")";
    div.appendChild(p);
  });
  div.appendChild(document.createElement("hr"));
}

// Esempi di Chiamate Ajax tramite Fetch

let obj = {
  name: "Mario Rossi",
  username: "Mariolino",
  email: "m.rossi@example.com",
  phone: "+39 123.456.789",
  website: "http://mariorossi.com",
};

fetch("https://jsonplaceholder.typicode.com/users"); // Chiamata di tipo GET - Lettura
fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" }); // Chiamata di tipo GET

fetch("https://jsonplaceholder.typicode.com/users", {
  // Chiamata di tipo POST
  method: "POST", // Method della chiamata - Salvataggio di una risorsa
  body: JSON.stringify(obj), // nel body della richiesta invio il dato al server
  headers: {
    "Content-Type": "application/json", // il tipo del contenuto che sto inviando
  },
});

fetch("https://jsonplaceholder.typicode.com/users/2", {
  // Chiamata di tipo PUT
  method: "PUT", // Method della chiamata - Modifica di una risorsa
  body: JSON.stringify({
    id: 2,
    name: "Mario Rossi",
    username: "Mariolino",
    email: "m.rossi@example.com",
    phone: "+39 123.456.789",
    website: "http://mariorossi.com",
  }), // nel body della richiesta invio il dato al server
  headers: {
    "Content-Type": "application/json", // il tipo del contenuto che sto inviando
  },
});

fetch("https://jsonplaceholder.typicode.com/users/3", { method: "DELETE" }); // Chiamata di tipo DELETE - Elimina una risorsa



