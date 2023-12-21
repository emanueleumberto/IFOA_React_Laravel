const url = 'http://localhost:3000/users/';


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#getAll').addEventListener('click', () => {
        getAll();
    })
    document.querySelector('#getById').addEventListener('click', () => {
        getById(1).then(data => console.log(data));
    })
    document.querySelector('#create').addEventListener('click', () => {
        let obj = {
            name: "Mario",
            lastName: "Rossi",
            email: "mario.rossi@example.com",
            password: "12345",
            city: "Roma"
        }
        create(obj)
    })
    document.querySelector('#update').addEventListener('click', () => {
        update(1);
    })
    document.querySelector('#delete').addEventListener('click', () => {
        deleteObj(2);
    })
    document.querySelector('#login').addEventListener('click', () => {
        const urlLogin = 'http://localhost:3000/login';
        let userLogin = {
            email: "mario.rossi@example.com",
            password: "123456"
        } 
        fetch(urlLogin, {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(userLogin) 
        }).then(response => response.json())
        .then(json => console.log(json))
    })
})

// GETAll
const getAll = () => {
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}
//getAll();

// GET/ID
const getById = async (id) =>{
    // Soluzione 1
    /* return await fetch(url+id)
        .then(response => response.json())
        .then(json => { return json })
        .catch(err => console.log(err)); */

    // Soluzione 2
    const response = await fetch(url+id);
    return await response.json();
}
//getById(1);


// POST

let obj = {
    name: "Mario",
    lastName: "Rossi",
    email: "mario.rossi@example.com",
    password: "12345",
    city: "Roma"
}

const create = (obj) => {
    fetch(url, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(obj) 
    }).then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}

//create(obj);

// PUT
//console.log(getById(1));
const update = (id) => {
    getById(id).then(obj => {
        obj.password = 'password';
        console.log(obj.id)
        fetch(url+id, {
            method: 'PUT', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(obj)})
            .then(response => response.json())
            
    })
}

// DELETE

const deleteObj = (id) => {
    fetch(url+id, {method: 'DELETE'})
        .then(response => response.json())
        .then(json => console.log(json))
}



// PROMISES
// Pending - Resolve - Reject

//fetch(url+1).then(response => response.json()).then(json => console.log(json));

/* const func = async () => {
    const response = await fetch(url+1);
    const data = await response.json();
    console.log(data)
}

func() */