// Primitive value: string, number, boolean, null, undefined

// Object prototype chain: myObject --> Object.prototype --> null
// Array prototype chain: myArray --> Array.prototype --> Object.prototype --> null
// Function prototype chain: myFunc --> Function.prototype --> Object.prototype --> null
// String prototype chain: myString --> String.prototype --> Object.prototype --> null
// Number prototype chain: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean prototype chain: myBoolean --> Boolean.prototype --> Object.prototype --> null

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('cat', 2);

puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.statusMessage();

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.getGuess(guess);
    puzzleEl.textContent = game1.getPuzzle();
    guessesEl.textContent = game1.statusMessage();
})