function func1() {
    console.log("Sono una funzione senza paramentri")
}

function func2(x, y) {
    console.log("Sono una funzione con parametri x e y")
    console.log(x+y)
}

function func3() {
    // arguments[] -> contiene tutti i valori passati come argomenti di una funzione
    console.log("Sono una funzione che utilizza arguments")
    let sum = 0;
    for (const arg of arguments) {
        sum += arg;
    }
    console.log(sum)
}

function func4(...args) {
    console.log("Sono una funzione che utilizza e rest parameters")
    //args.forEach(arg => console.log(arg))
    let sum = args.reduce((acc, arg) => acc+=arg, 0)
    console.log(sum)
}

func1();
func2(10, 5);
func3(10,5,8);
func4(10,5,8);


// Eventi JS
console.log(window)

function funClick() {
    //return "Click btn"
    console.log("Click btn")
}

/* let f = funClick
console.log(f) */

/* btn2.onclick = function() {
    console.log("Click btn")
} */

let btn2 = document.querySelector('#btn2');
btn2.onclick = funClick;

let btn3 = document.querySelector('#btn3');
/* btn3.addEventListener('click', funClick)
btn3.addEventListener('click', function() {
    //return "Click btn"
    console.log("Click btn")
}) */

btn3.addEventListener('click', () => console.log("Click btn"))


let btn = document.querySelector('form button')
btn.addEventListener('click', function(e) {
    /* let name = document.querySelector('form input[name="nome"]')
    if(name.value.trim().length >= 2) {
        console.log(name.value + ' OK')
    } else {
        console.log(name.value + ' Non corretto')
    }
    let email = document.querySelector('form input[name="email"]')
    if(email.value.trim().length >= 2) {
        console.log(email.value + ' OK')
    } else {
        console.log(email.value + ' Non corretto')
    }

    let age = document.querySelector('form input[name="anni"]')
    if(age.value.trim().length >= 2) {
        console.log(age.value + ' OK')
    } else {
        console.log(age.value + ' Non corretto')
    } */

    e.preventDefault()

    let form = document.forms[0];
    console.log(form[0].value)
    console.log(form[1].value)
    console.log(form[2].checkValidity())

})

/* setTimeout(() => {
    //alert('setTimeout')
    console.log("setTimeout")
}, 5000) */

/* let interval = setInterval(() => {
    console.log("setInterval")
}, 1000)

setTimeout(() => {
    clearInterval(interval)
}, 10000) */


/* let bt1 = document.querySelector('#row1 button')
bt1.addEventListener('click', (evt) => {
    console.log(evt.target)
    //alert('btn1')
})
let bt2 = document.querySelector('#row2 button')
bt2.addEventListener('click', (evt) => {
    //alert('btn2')
})
let bt3 = document.querySelector('#row3 button')
bt3.addEventListener('click', (evt) => {
    //alert('btn3')
}) */


/* let btns = document.querySelectorAll('table button')
btns.forEach(b => b.addEventListener('click', (evt) => {
    //console.log(evt.target)
    let tr = evt.target.parentNode.parentNode;
    tr.style.color = 'red';
})) */

let body = document.querySelector('body');
body.addEventListener('click', (evt) => {
    console.log(evt.target)
    let tr = evt.target.parentNode.parentNode;
    tr.style.color = 'red';
})






