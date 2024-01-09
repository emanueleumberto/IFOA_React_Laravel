import React, { Component } from 'react'

export default class StateComponent extends Component {

    state = {
        counter: 0,
        timer: new Date()
    };

/* constructor(props) {
    super(props);
    this.state = {
        counter: 0
    };
    }
 */

    startTimer = () => {
        // Aggiorno lo stato sovrascrivendo l'oggetto state
        this.setState({ timer: new Date() });
    }

    addCounter = () => {
        // Aggiorno lo stato tenendo conto dello stato precedente
        this.setState((prevState) => ({ counter: prevState.counter + 1}))
    }

  render() {
    return (
        <>
            <h1>State Component: {this.state.counter}</h1>
            <h2>Oggi è il giorno {this.state.timer.toLocaleTimeString()}</h2>
            
            <button onClick={() => this.addCounter()}>Click</button>
            <button onClick={() => this.startTimer()}>Click</button>
        </>
    )
  }
}


/* class Veicolo {
    targa;
    modello;
    marca;
    constructor(marca, modello, targa) {
        this.marca = marca;
        this.modello = modello;
        this.targa = targa;
    }
}

class Auto extends Veicolo {
    porte;
    constructor(marca, modello, targa, porte){
        super(marca, modello, targa)
        this.porte = porte;
    }
}

class Moto extends Veicolo {
    ruote;
}

let a = new Auto('Fiat', '500', 'AB123CD', 3);
let m = new Moto(); */


