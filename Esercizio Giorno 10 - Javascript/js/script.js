/* ESERCIZIO 1
    Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

const changeTitle = function () {
    /* let h1 = document.querySelector('div > h1');
    h1.innerText = "qualcos'altro" */
    document.querySelector('div > h1').innerText = "qualcos'altro"
}

changeTitle();

/* ESERCIZIO 2
    Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
    document.querySelector('div > h1').className = "myHeading"
};

addClassToTitle()

/* ESERCIZIO 3
    Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function () {
    const p = document.querySelectorAll('div > p')
    //console.log(p)
    p.forEach(paragraph => paragraph.innerText = "nuovo testo")
};

changePcontent();

/* ESERCIZIO 4
    Scrivi una funzione che cambi la proprietà href di ogni link 
    (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {
    const link = document.querySelectorAll('a:not(footer a)')
    link.forEach(l => l.href = "https://www.google.com")
};

changeUrls()

/* ESERCIZIO 5
    Scrivi una funzione che aggiunga un nuovo elemento lista 
    alla seconda lista non ordinata
*/

const addToTheSecond = function () {
    const ul = document.querySelector('ul#secondList')
    const li = document.createElement('li');
    li.innerText = "nuovo elemento"
    ul.appendChild(li)
    //console.log(ul)
};

addToTheSecond()

/* ESERCIZIO 6
    Scrivi una funzione che aggiunga un secondo paragrafo al primo div
*/

const addParagraph = function () {
    const div = document.querySelector('div')
    const p = document.createElement('p')
    p.innerText = "add paragrafo"
    div.appendChild(p)
};

addParagraph();

/* ESERCIZIO 7
    Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
    const ul = document.querySelector('ul')
    //ul.style.display = "none"
    //ul.style.visibility = "hidden"
    //ul.remove();
};

hideFirstUl()

/* ESERCIZIO 8 
    Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {

    /* const ulList = document.getElementsByTagName('ul');
    for(let i=0; i<ulList.length; i++) {
        ulList[i].style.backgroundColor = 'green'
    } */

    const ulList = document.querySelectorAll('ul');
    ulList.forEach(ele => ele.style.backgroundColor = 'green')

};

paintItGreen()


/* ESERCIZIO 9
    Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta 
    che l'utente lo clicca
*/

const makeItClickable = function () {
    const h1 = document.querySelector('div > h1');
    let txt = h1.innerText;
    txt = txt.slice(0, -1)
    h1.innerText = txt;
};

/* ESERCIZIO 10
    Crea una funzione che, al click sul footer, riveli l'URL del link interno 
    come contenuto di un alert()
*/

const revealFooterLink = function () {
    const linkFooter = document.querySelector('footer h3 > a');
    //const txt = linkFooter.href;
    const txt = linkFooter.getAttribute('href');
    alert(txt);
};

/* ESERCIZIO 11
          Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
          La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, 
          prezzo
       */

const generateTable = function () {};

/* ESERCIZIO 12
          Crea una funzione che aggiunga una riga alla tabella precedentemente creata e 
          fornisca i dati necessari come parametri
       */

const addRow = function () {};

/* ESERCIZIO 14
         Crea una funzione che nasconda le immagini della tabella quando eseguita
       */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
         Crea una funzione che cambi il colore del h2 con id "changeMyColor" 
         con un colore random ad ogni click ricevuto
       */

const changeColorWithRandom = function () {};

/* EXTRA ESERCIZIO 16
         Crea una funzione che elimini le vocali da ogni elemento testuale della pagina 
         (puoi aiutarti con i nuovi metodi degli array di ES6)
       */

const deleteVowels = function () {};
