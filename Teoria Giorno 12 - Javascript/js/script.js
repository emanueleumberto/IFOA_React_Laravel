let now = new Date()
let lastDayDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
let lastDayOfTheMonth = lastDayDate.getDate();
let calendar = document.querySelector('#calendar');
let appointments = [];
creaCalendario();
creaArrayAppuntamenti();

document.querySelector('#appointments form button')
        .addEventListener('click', () => {
            saveMeeting();
        })

function creaCalendario() { 
    let h2 = document.querySelector('h1 + h2')
    h2.innerText = nomeMese(now.getMonth() + 1);
    for(let i = 1; i <= lastDayOfTheMonth; i++){
        const dayCellNode = document.createElement('div');
        dayCellNode.className = 'day';
        dayCellNode.addEventListener('click', () => {
            
            //dayCellNode.classList.add('selected') //Soluzione 1 -> seleziona ma non cancella la selezione
            selezionaGiorno(dayCellNode) // Soluzione 2 -> seleziona e cancella le selezioni precedenti
            
            let currentDayAppointments = appointments[i-1]
            
            showAppointments(i-1)
            
            /* if(currentDayAppointments.length > 0) {
                
            } else {
                document.querySelector('#appointments ul').style.display = 'none'
            } */
 
        })
        const day = document.createElement('h3');
        day.innerText = i;
        let today = now.getDate();
        if(today === i){
            day.className = 'color-epic';
        }
        dayCellNode.appendChild(day);
        calendar.appendChild(dayCellNode);
        
    }
}

function nomeMese(m) {
    switch (m) {
        case 1: return 'Gennaio'
        case 2: return 'Febbraio'
        case 3: return 'Marzo'
        case 4: return 'Aprile'
        case 5: return 'Maggio'
        case 6: return 'Giugno'
        case 7: return 'Luglio'
        case 8: return 'Agosto'
        case 9: return 'Settembre'
        case 10: return 'Ottobre'
        case 11: return 'Novembre'
        case 12: return 'Dicembre'
    }
}

function creaArrayAppuntamenti() {
    for(let i = 0; i < lastDayOfTheMonth; i++) {
        appointments[i] = []
    }
}

function selezionaGiorno(day) {
    let calendar = document.querySelectorAll('#calendar div');
    for(let i = 0; i < calendar.length; i++){
        calendar[i].className = 'day';
        if(calendar[i] === day) {
            day.classList.add('selected')
        } 
    }
}

function showAppointments(index) {
    document.querySelector('#appointments ul').style.display = 'block'

    document.querySelector('input[name="date"]').value = `${now.getFullYear()}-${now.getMonth()+1}-${index+1}`;

    let ul = document.querySelector('#appointments ul')
    ul.innerHTML = '';
    let selectedDayAppointments = appointments[index];
    selectedDayAppointments.forEach(element => {
        let li = document.createElement('li')
        li.innerText = element
        ul.appendChild(li)
    });

}

function saveMeeting() {
    let data = document.querySelector('input[name="date"]').value;
    let ora = document.querySelector('input[name="time"]').value;
    let titolo = document.querySelector('input[name="title"]').value;
    //console.log(data, ora, titolo)
    let evento = data + ' ' + ora + ' - ' + titolo
    let day = new Date(data);
    appointments[day.getDate()-1].push(evento);
    document.querySelector('input[name="time"]').value = '';
    document.querySelector('input[name="title"]').value = '';
    showAppointments(day.getDate()-1)
}
