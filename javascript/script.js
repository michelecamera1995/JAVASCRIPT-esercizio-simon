console.log("js-ok")

// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Timer di 30 secondi con un'array composto da 5 numeri casuali


// carico gli elementi dall' HTML

const numbers = createRandomNumberArray(5);
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const num3 = document.getElementById('num3')
const num4 = document.getElementById('num4')
const num5 = document.getElementById('num5')
const container = document.getElementById('numeri');

console.log(numbers)

// timer di 30 secondi poi scompaiono i numeri del gioco

setTimeout(startGame, 2000); {
    container.innerText = ' ' + numbers + ' ';
}

// inizia il gioco

function startGame() {
    const container = document.getElementById('numeri');
    container.style.display = "none";
    console.log(numeri)
    for (let i = 0; i < 5; i++) {
        userNumber = parseInt(prompt("inserisci il numero!"))

        // comparo i numeri 
        if (numbers[0] === userNumber) {
            num1.innerHTML = 'primo numero trovato!';
        } else if (numbers[1] === userNumber) {
            num2.innerHTML = 'secondo numero trovato!';
        } else if (numbers[2] === userNumber) {
            num3.innerHTML = 'terzo numero trovato!';
        } else if (numbers[3] === userNumber) {
            num4.innerHTML = 'quarto numero trovato!';
        } else if (numbers[4] === userNumber) {
            num5.innerHTML = 'quinto numero trovato!';
        }
    }
    console.log(userArray)
}