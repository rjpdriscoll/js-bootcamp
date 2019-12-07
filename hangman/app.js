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
const game1 = new Hangman('car part store', 4);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.getGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;
})

// Making an HTTP request
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        console.log(data);
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place');
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
request.send();

// Challenge
const countryCode = 'US';

const countryRequest = new XMLHttpRequest();

countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const countryNameArray = data.filter((country) => country.alpha2Code === countryCode);
        const countryName = countryNameArray.pop().name;
        console.log(countryName);
    } else if (e.target.readyState === 4) {
        console.log('An error has occurred.');
    }
})

countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
countryRequest.send();