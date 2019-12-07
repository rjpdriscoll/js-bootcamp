// HTTP (Hypertext Transfer Protocol)
// Request - what do we want to do
// Response - what was actually done

// Primitive value: string, number, boolean, null, undefined

// Object prototype chain: myObject --> Object.prototype --> null
// Array prototype chain: myArray --> Array.prototype --> Object.prototype --> null
// Function prototype chain: myFunc --> Function.prototype --> Object.prototype --> null
// String prototype chain: myString --> String.prototype --> Object.prototype --> null
// Number prototype chain: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean prototype chain: myBoolean --> Boolean.prototype --> Object.prototype --> null

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('car parts store', 4);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.getGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;
})

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle);
    }
});


// // Making an HTTP request


// // Challenge
// const countryCode = 'US';

// const countryRequest = new XMLHttpRequest();

// countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         const countryNameArray = data.filter((country) => country.alpha2Code === countryCode);
//         const countryName = countryNameArray.pop().name;
//         console.log(countryName);
//     } else if (e.target.readyState === 4) {
//         console.log('An error has occurred.');
//     }
// })

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
// countryRequest.send();