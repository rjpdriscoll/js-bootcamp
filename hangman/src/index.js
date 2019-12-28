import Hangman from './hangman';
import getPuzzle from './requests';

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