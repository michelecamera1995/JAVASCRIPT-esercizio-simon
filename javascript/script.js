console.log("js-ok")

// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Timer di 30 secondi con un'array composto da 5 numeri casuali


//dichiaro la funzione che genera un'array da 5 numeri casuali

const numbers = createRandomNumberArray(5);
const timer = 2;
console.log(numbers)

// carico gli elementi dall' HTML

const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const num3 = document.getElementById('num3')
const num4 = document.getElementById('num4')
const num5 = document.getElementById('num5')
const container = document.getElementById('numeri');

// timer di 30 secondi poi scompaiono i numeri del gioco

setTimeout(startGame, timer * 1000); {
    container.innerHTML = numbers.join('  -   ');
}

// inizia il gioco

function startGame() {
    container.style.display = "none";
    let userNumber = [];
    for (let i = 0; i < 5; i++) {
        userImput = parseInt(prompt("inserisci il numero!"));
        userNumber.push(userImput);
        console.log(userNumber);

        // comparo i numeri  

        if (numbers[0] === userNumber[0]) {
            console.log("numero 1 trovato!");
            num1.classList.add('found');
            num1.innerHTML = userNumber[0]
        } else {
            num1.classList.add('wrong');
        }

        if (numbers[1] === userNumber[1]) {
            console.log("numero 2 trovato!");
            num2.classList.add('found');
            num2.innerHTML = userNumber[1];
        } else {
            num1.classList.add('wrong');
        }

        if (numbers[2] === userNumber[2]) {
            console.log("numero 3 trovato!");
            num3.classList.add('found');
            num3.innerHTML = userNumber[2];
        } else {
            num1.classList.add('wrong');
        }

        if (numbers[3] === userNumber[3]) {
            console.log("numero 4 trovato!");
            num4.classList.add('found');
            num4.innerHTML = userNumber[3];
        } else {
            num1.classList.add('wrong');
        }

        if (numbers[4] === userNumber[4]) {
            console.log("numero 5 trovato!");
            num5.classList.add('found');
            num5.innerHTML = userNumber[4];
        }
    }
}