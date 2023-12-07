// Esercizio 1
let btnAdd = document.querySelector('.es1 button.btn-dark');
let btnReset = document.querySelector('.es1 button.btn-danger');

document.querySelector(".es1 fieldset").innerText = localStorage.getItem('utente') || '';

btnAdd.addEventListener('click', () => {
    let input = document.querySelector(".es1 input").value.trim();
    localStorage.setItem('utente', input);
    document.querySelector(".es1 input").value = '';
    document.querySelector(".es1 fieldset").innerText = input;
})

btnReset.addEventListener('click', () => {
    localStorage.removeItem('utente');
    document.querySelector(".es1 fieldset").innerText = '';
})

// Esercizio 2
let contatore = sessionStorage.getItem("contatore") || 0;
document.querySelector('.es2 h1').innerText = contatore;
setInterval(() => {
    contatore++;
    document.querySelector('.es2 h1').innerText = contatore;
    sessionStorage.setItem("contatore", contatore);
}, 1000);

// Esercizio 3
let todolist = [];
let addTodo = document.querySelector('.es3 button.btn-dark');
createListTodo();
addTodo.addEventListener('click', () => {
    let input = document.querySelector(".es3 input").value.trim();
    todolist.push(input);
    localStorage.setItem('todolist', JSON.stringify(todolist));
    createListTodo();
})

function createListTodo() {
    let jsonList = localStorage.getItem('todolist');
    let ul = document.querySelector(".es3 ul");
    if(jsonList) {
        todolist = JSON.parse(jsonList);
        ul.innerHTML = '';
        /* ul.addEventListener('click', (e) => {
            console.dir(e.target.localName);
            if(e.target.localName === 'button') {
                todolist.splice(e.target.parentNode.index, 1);
                localStorage.setItem('todolist', JSON.stringify(todolist));
                createListTodo();
            }
        }) */
        todolist.forEach((element, index) => {
            let li = document.createElement('li');
            li.classList.add('list-group-item');
            li.index = index;
            //li.innerHTML = `<span>${element}</span><button type="button" class="btn btn-sm btn-outline-danger float-end"><i class="bi bi-trash3-fill"></i></button>`
            let span = document.createElement('span');
            span.innerText = (index+1) + " - " + element;
            let btn = document.createElement('button');
            btn.type = "button";
            
            btn.classList = "btn btn-sm btn-outline-danger float-end";
            btn.innerHTML = '<i class="bi bi-trash3-fill"></i>';
            btn.addEventListener('click', (e) => {
                //ul.removeChild(e.target.parentNode)
                //console.dir(e.target.parentNode.index);
                todolist.splice(e.target.parentNode.index, 1);
                localStorage.setItem('todolist', JSON.stringify(todolist));
                createListTodo();
            })
            
            li.appendChild(span);
            li.appendChild(btn);
            ul.appendChild(li);
        });

    } else {
        ul.innerHTML = '<span class="text-center"> Nessun todo presente </span>'
    }
}