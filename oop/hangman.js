const Hangman = function (word, numOfGuesses) {
    this.word = word.toLowerCase().split('');
    this.guessedLetters = ['a', 'n'];
    this.numOfGuesses = numOfGuesses;
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = [];

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle.push(letter);
        } else {
            puzzle.push('*');
        }
    })

    return puzzle.join('');
}


const game1 = new Hangman('new york', 5);
const game2 = new Hangman('pizza', 3);

console.log(game1.getPuzzle());
console.log(game2.getPuzzle());