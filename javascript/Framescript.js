
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

//----------funzione genera numero casuale---------//