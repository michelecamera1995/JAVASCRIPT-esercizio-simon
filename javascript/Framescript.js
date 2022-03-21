
console.log("Framework ok")

//----------funzione genera array con numeri casuali---------//

function createRandomNumberArray(arrayLength) {
    const resultArray = [];
    for (let i = 0; i < arrayLength; i++) {
        const random = generaNumeroRandom(0, 100);
        resultArray.push(random);
    }
    return resultArray;
}

//----------funzione genera numero casuale---------//

function generaNumeroRandom(min, max) {
    const range = max - min + 1;
    const generatedNumber = Math.floor(Math.random() * range) + min;
    return generatedNumber;
}

//----------funzione controllo numero pari o dispari---------//

function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

//----------controllo l'input---------//

function askUserANumber(message) {

    let valid = false;
    let userInput;
    while (valid === false) {
        userInput = parseInt(prompt(message));
        if (isNaN(userInput) === false) {
            valid = true;
        }
    }
    return userInput;
}

//---------ùùùùùùùùùùùùùùùùù----------//