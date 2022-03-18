console.log("js-ok")

// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Timer di 30 secondi con un'array composto da 5 numeri casuali

const numbers = createRandomNumberArray(5);

const userArray = [];

console.log(numbers)

setTimeout(startGame, 2000); {
    const container = document.getElementById('numeri');
    container.innerText = ' ' + numbers + ' ';
}

function startGame() {
    const container = document.getElementById('numeri');
    container.style.display = "none";
    console.log(numeri)
    for (let i = 0; i < 5; i++) {
        userNumber = parseInt(prompt("inserisci il numero!"))
        userArray.push(userNumber);

        // comparo i numeri 
        if (numbers[0] === userNumber) {
            console.log("hai trovato il primo numero!")
        } else if (numbers[1] === userNumber) {
            console.log("hai trovato il secondo numero!")
        } else if (numbers[2] === userNumber) {
            console.log("hai trovato il terzo numero!")
        } else if (numbers[3] === userNumber) {
            console.log("hai trovato il quarto numero!")
        } else if (numbers[4] === userNumber) {
            console.log("hai trovato il quinto numero!")
        }
    }
    console.log(userArray)
}