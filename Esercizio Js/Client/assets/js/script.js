const urlApi = 'http://localhost:3000/';

document.addEventListener('DOMContentLoaded', () => {
    
    let btnRegister = document.querySelector('#register-page button');
    let btnLogin = document.querySelector('#login-page button');
    let btnAddProduct = document.querySelector('#formProducts button')

    if(btnRegister){
        btnRegister.addEventListener('click', registerEvent)
    } else if(btnLogin){
        btnLogin.addEventListener('click', loginEvent)
    } else if(btnAddProduct){
        btnAddProduct.addEventListener('click', addNewProductEvent)
        getAllProducts();
    } else {
        getAllCardProducts();
    }
    
    getUserLog();
})


function getUserLog() {
    let loggedIn = localStorage.getItem('UserLog')
    if(loggedIn){
        let userLog = JSON.parse(loggedIn);
        let logNav = document.querySelector('#logNav');
        logNav.innerHTML = '';
        logNav.innerText = 'Ciao ' + userLog.user.firstname + ' ' + userLog.user.lastname

        // <button type="button" class="btn btn-outline-warning">Warning</button>
        let logOutBtn = document.createElement('button');
        logOutBtn.setAttribute('type', "button")
        logOutBtn.className = "btn btn-sm btn-outline-warning ms-3"
        logOutBtn.innerText = 'Logout';
        logOutBtn.addEventListener('click', () => {
            localStorage.removeItem('UserLog');
            window.location = 'index.html';
        })
        logNav.appendChild(logOutBtn);

        // Creo la voce di menu Admin
        let li = document.createElement('li');
        li.className = "nav-item"
        let a = document.createElement('a');
        a.className = "nav-link";
        a.href = "admin.html";
        a.setAttribute('aria-current', "page");
        a.innerText = 'Admin';
        li.appendChild(a);
        document.querySelector('#navbarText ul').appendChild(li);
    } else {
        if(document.location.pathname.includes('admin.html')) {
            window.location = 'login.html';
        }
    }
}

function registerEvent(e) {
    e.preventDefault();
    let firstname = document.querySelector('#register-page input#firstname').value.trim();
    let lastname = document.querySelector('#register-page input#lastname').value.trim();
    let city = document.querySelector('#register-page input#city').value.trim();
    let email = document.querySelector('#register-page input#email').value.trim();
    let password = document.querySelector('#register-page input#password').value.trim();

    //console.log(firstname, lastname, city, email, password);
    let obj = {
        firstname,
        lastname,
        city,
        email,
        password
    }
    fetch(urlApi+'register', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(obj) })
        .then(response => response.json())
        .then(json => {
            statusResponse(json);
        }
        )
        .catch(err => console.log(err))
}

function loginEvent(e) {
    e.preventDefault();
    let email = document.querySelector('#login-page input#email').value.trim();
    let password = document.querySelector('#login-page input#password').value.trim();
    fetch(urlApi+'login', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                email,
                password
            }) })
        .then(response => response.json())
        .then(json => statusResponse(json))
        .catch(err => console.log(err))
}

function statusResponse(response) {
    console.log("statusResponse")
    let form = document.querySelector('form');
    form.lastElementChild.role !== null ? form.removeChild(form.lastElementChild) : null;

    let alertDiv = document.createElement('div');
    alertDiv.setAttribute('role', "alert")
    alertDiv.className = "alert alert-dismissible fade show mx-3";
    
    if(response.accessToken){
        alertDiv.classList.add('alert-success');
        alertDiv.innerText = "Logged In!!"
        document.querySelector('#login-page input#email').value = '';
        document.querySelector('#login-page input#password').value = '';

        localStorage.setItem('UserLog', JSON.stringify(response))
        getUserLog();
    } else {
        alertDiv.classList.add('alert-danger');
        alertDiv.innerText = response
    }

    let alertBtn = document.createElement('button');
    alertBtn.className = "btn-close";
    alertBtn.setAttribute('type', "button");
    alertBtn.setAttribute('data-bs-dismiss', "alert");
    alertBtn.setAttribute('aria-label', "Close");
    alertDiv.appendChild(alertBtn);

    document.querySelector('form').appendChild(alertDiv);
}

// Admin Page

function addNewProductEvent(e) {
    e.preventDefault();
    let brand = document.querySelector('#formProducts input[name="brand"]').value;
    let model = document.querySelector('#formProducts input[name="model"]').value;
    let category = document.querySelector('#formProducts input[name="category"]').value;
    let price = document.querySelector('#formProducts input[name="price"]').value;
    let quantity = document.querySelector('#formProducts input[name="quantity"]').value;
    let image = document.querySelector('#formProducts input[name="image"]').value;

    fetch(urlApi+'products', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({ brand, model, category, price, quantity, image }) 
    })
    .then(response => response.json())
    .then(json => getAllProducts())
    .catch(err => console.log(err))
}

function getAllProducts() {
    fetch(urlApi+'products', {
        method: 'GET'})
    .then(response => response.json())
    .then(json => {console.log(json); createTableAdminProducts(json)})
    .catch(err => console.log(err))
}

function createTableAdminProducts(products) {
    let tbody = document.querySelector('#tableProducts tbody');
    tbody.innerHTML = '';
    products.forEach((p,i) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <th scope="row">${i+1}</th>
        <td><img src="${p.image}" style="width:100px" /></td>
        <td>${p.model}</td>
        <td>${p.brand}</td>
        <td>${p.category}</td>
        <td>${p.quantity}</td>
        <td>${p.price}</td>
        `
        /* <td>
          <button type="button" class="btn btn-sm btn-outline-danger">
              <i class="bi bi-trash"></i>
          </button>
          <button type="button" class="btn btn-sm btn-outline-warning">
              <i class="bi bi-pencil-square"></i>
          </button>
        </td> */
        let td = document.createElement('td');
        let deleteBtn = document.createElement('button');
        deleteBtn.className = "btn btn-sm btn-outline-danger mx-1";
        deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';
        deleteBtn.addEventListener('click',() => deleteProducts(p))

        let updateBtn = document.createElement('button');
        updateBtn.className = "btn btn-sm btn-outline-warning mx-1";
        updateBtn.innerHTML = '<i class="bi bi-pencil-square"></i>';
        updateBtn.setAttribute('data-bs-toggle', "modal")
        updateBtn.setAttribute('data-bs-target', "#updateModal")
        updateBtn.addEventListener('click', () => updateProducts(p))

        td.appendChild(deleteBtn);
        td.appendChild(updateBtn);
        tr.appendChild(td);
        tbody.appendChild(tr); 
    })
}

function deleteProducts(obj) {
    if(confirm('Do you want to cancel this product? ' + obj.model + ' ' + obj.brand)) {
        fetch(urlApi+'products/'+obj.id, {
            method: 'DELETE'})
        .then(response => response.json())
        .then(json => getAllProducts())
        .catch(err => console.log(err))
    }
}

function updateProducts(obj) {
    document.querySelector('#updateModal input[name="id"]').value = obj.id;
    document.querySelector('#updateModal input[name="brand"]').value = obj.brand;
    document.querySelector('#updateModal input[name="model"]').value = obj.model;
    document.querySelector('#updateModal input[name="category"]').value = obj.category;
    document.querySelector('#updateModal input[name="price"]').value = obj.price;
    document.querySelector('#updateModal input[name="quantity"]').value = obj.quantity;
    document.querySelector('#updateModal input[name="image"]').value = obj.image;
    document.querySelector('#updateModal form button').addEventListener('click', saveProduct);
}

function saveProduct() {
    let obj = {
        id: document.querySelector('#updateModal input[name="id"]').value,
        brand: document.querySelector('#updateModal input[name="brand"]').value,
        model: document.querySelector('#updateModal input[name="model"]').value,
        category: document.querySelector('#updateModal input[name="category"]').value,
        price: document.querySelector('#updateModal input[name="price"]').value,
        quantity: document.querySelector('#updateModal input[name="quantity"]').value,
        image: document.querySelector('#updateModal input[name="image"]').value
    }
    fetch(urlApi+'products/'+obj.id, {
        method: 'PUT', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(obj) 
    })
    .then(response => response.json())
    .then(json => getAllProducts())
    .catch(err => console.log(err))
}

// Index Page 

function getAllCardProducts() {
    fetch(urlApi+'products', {
        method: 'GET'})
    .then(response => response.json())
    .then(json => {
        /*
            <div class="col">
                <div class="card h-100">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a short card.</p>
                    </div>
                </div>
            </div>
        */
       let cardProducts = document.querySelector('#cardProducts');
       json.forEach(p => {
        let div = document.createElement('div');
        div.className = 'col';
        let card = document.createElement('div');
        card.className = 'card h-100 p-3';
        let img = document.createElement('img');
        img.src = p.image;
        img.className = "card-img-top h-100 mb-2";
        let cardBody = document.createElement('div');
        cardBody.innerHTML = `
            <h5 class="card-title text-center">${p.model} ${p.brand} - ${p.category}</h5>
            <p class="card-text text-center">$ ${p.price}</p>
        `
        let btn = document.createElement('button');
        btn.className = "btn btn-outline-dark w-100";
        btn.innerText = "Add to Cart";

        cardBody.appendChild(btn);
        card.appendChild(img);
        card.appendChild(cardBody);
        div.appendChild(card);
        cardProducts.appendChild(div);
       })
    })
    .catch(err => console.log(err))
}