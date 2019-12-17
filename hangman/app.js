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

getPuzzle('2').then((puzzle) => {
    console.log(puzzle);
}).catch((err) => {
    console.log(`Error: ${err}`);
})

getCountry('MX').then((country) => {
    console.log(`Country's full name: ${country.name}`);
}).catch((err) => {
    console.log(`There was an error: ${err}`);
})

getLocation().then((location) => {
    return getCountry(location.country)
}).then((country) => {
    console.log(country.name);
}).catch((err) => {
    console.log(`There was an error: ${err}`);
})