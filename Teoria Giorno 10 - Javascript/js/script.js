
// BOM -> Browser Object Model
// Tutte le funzionalità che ci mette a disposizione il Browser

// DOM -> Document Object Model
// Tutte le funzionalità della pagina
console.log(window)
console.log(window.document)
console.dir(window.document)

// Selezione di un nodo html tramite il suo ID
// getElementById restituisce il nodo
let h = window.document.getElementById("titolo")
console.log(h)
console.dir(h)

h.innerText = "Testo modificato tramite javascript"
h.style.textDecoration = "underline" // background-color -> backgroundColor
h.style.textAlign = "center" 
console.log(h.innerText)

// Selezione di un nodo html tramite la sua classe
// getElementsByClassName restituisce un HTMLCollection
let p = document.getElementsByClassName('txt');
console.log(p[0])

// Selezione di un nodo html tramite il TagName
// getElementsByTagName restituisce un HTMLCollection
let a = document.getElementsByTagName('a');
console.log(a)
a[0].style.color = 'red'
a[1].style.color = 'green'
a[2].style.color = 'blue'

// Selezione di un nodo html tramite selettore css
// querySelector restituisce il nodo
// querySelectorAll restituisce una NodeList
let h1 = document.querySelector("#titolo")
console.log(h1)
let p1 = document.querySelector(".txt")
console.log(p1)
let aAll = document.querySelectorAll("a")
console.log(aAll)
let a1 = document.querySelector("a[title='link2']")
console.log(a1)
let innerP = document.querySelector("div > p")
innerP.style.color = 'green'


// Creare nuovi nodi HTML tramite Javascript
// createElement crea un nuovo nodo html

let titolo = document.createElement('h2')
titolo.innerText = "Titolo creato con JS"
titolo.style.textTransform = "uppercase"
console.log(titolo)

let testo = document.createElement('p')
testo.innerText = "Paragrafo creato con JS"
//testo.style.textAlign = 'center'
testo.className = 'center'
console.log(testo)

// Selezione un nodo radice presente nella pagina HTML
let section = document.querySelector('section');
// Appende un nuovo nodo ad un nodo radice
section.appendChild(titolo);
section.appendChild(testo)


// Navigazione del DOM

console.log(section)
console.dir(section)

let main = section.parentNode
main.style.backgroundColor = '#FFFFFF'
console.log(main)

let body = section.parentNode.parentNode
body.style.backgroundColor = '#555'

section.children[1].innerText = '-------------------'

function clickBtn() {
    alert('Button cliccato!!!')
}