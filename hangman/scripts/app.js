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
let game1;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.getGuess(guess);
    render();
})

const render = () => {
    puzzleEl.innerHTML = '';
    guessesEl.textContent = game1.statusMessage;

    const puzzleArray = game1.puzzle.split('');
    puzzleArray.forEach((letter) => {
        const puzzleLetter = document.createElement('span');
        puzzleLetter.textContent = letter;
        puzzleEl.appendChild(puzzleLetter);
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game1 = new Hangman(puzzle, 5);
    render();
}

document.querySelector('#reset').addEventListener('click', () => {
    startGame();
});

startGame();

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name);
// }).catch((err) => {
//     console.log(err);
// })

