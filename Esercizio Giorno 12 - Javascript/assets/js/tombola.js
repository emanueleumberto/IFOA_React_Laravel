let numeriTabellone = 76;
let numeriEstratti = [];
generaTabellone(numeriTabellone)
//numRandom(numeriTabellone)
document.querySelector('#randBtn')
    .addEventListener('click', () => numRandom(numeriTabellone) )
document.querySelector('#userBoardBtn')
    .addEventListener('click', () => numCartelline(numeriTabellone))


// Crea programmaticamente, utilizzando JS, un tabellone per la Tombola 
// formato da 76 celle, numerate con i numeri da 1 a 76.
function generaTabellone(num) {
    let board = document.querySelector('.main-board')
    for(let i=0; i<num; i++) {
        let div = document.createElement('div');
        div.className = 'cell';
        div.innerText = i+1
        board.appendChild(div)
    }
}

// Crea un bottone per simulare l’estrazione di un numero: 
// dovrà selezionare un numero random da 1 a 76.
// Fai in modo che non sia possibile richiamare un numero 
// già precedentemente estratto.
function numRandom(num) {
    if(numeriEstratti.length === num) {
        console.log("Fine Partita")
    } else {
        let rand = Math.round(Math.random() * num);
        if(!numeriEstratti.includes(rand)) {
            numeriEstratti.push(rand);
            document.querySelector('#randNum').innerText = rand;
            selezNumTabellone(rand)
            selezNumTabelline(rand)
        } else {
            numRandom(num)
            console.log(rand + ' già uscito')
        }
    }
}
// numRandom(numeriTabellone)

// Dopo il click del bottone, evidenza in qualche modo la cella 
// corrispondente sul tabellone (quella con lo stesso numero), 
// ad esempio cambiandone il colore di sfondo.
// Mantieni evidenziate le celle corrispondenti ai numeri 
// precedentemente estratti dopo ogni nuova estrazione.
function selezNumTabellone(num) {
    let board = document.querySelectorAll('.main-board div')
    board.forEach(ele => {
        if(+ele.innerText === num) {
            //console.log(ele)
            ele.classList.add('highlight')
        }
    })
}

// In aggiunta al tabellone, crea per il giocatore una tabellina da 24 celle, 
// con numeri random da 1 a 76, che si comporterà come il 
// tabellone principale (evidenziando i numeri estratti).
function generaTab(num) {
    let main = document.querySelector('main');
    let divTab = document.createElement('div');
    divTab.className = 'tabellina'
    let arrNum = [];
    while(true) {
        if(arrNum.length === 24) {
            break;
        }
        let rand = Math.round(Math.random() * num);
        if(!arrNum.includes(rand) && rand !== 0) {
            arrNum.push(rand);
            let div = document.createElement('div');
            div.className = 'cell';
            div.innerText = rand;
            divTab.appendChild(div)
        } 
        
    }
    main.appendChild(divTab)
}

function selezNumTabelline(num) {
    let board = document.querySelectorAll('.tabellina')
    //console.log(board)
    board.forEach(tabellina => {
        //console.log(tabellina.children)
        for(let ele of tabellina.children) {
            if(+ele.innerText === num) {
                ele.classList.add('highlight')
            }
        }
    })
}


// Permetti all’utente di selezionare il numero di tabelline con le quali 
// intende giocare, e generale a schermo prima dell’inizio della partita.
function numCartelline(numeriTabellone) {
    let input = document.querySelector('#usersNumber');
    for(let i = 0; i < +input.value; i++) {
        generaTab(numeriTabellone)
    }
}
//generaTabelline(numeriTabellone)