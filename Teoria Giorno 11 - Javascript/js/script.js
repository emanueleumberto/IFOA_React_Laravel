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
