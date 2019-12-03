const Hangman = function (word, numOfGuesses) {
    this.word = word.toLowerCase().split('');
    this.guessedLetters = [];
    this.guessesLeft = numOfGuesses;
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

Hangman.prototype.getGuess = function (guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (isUnique && !isBadGuess) {
        this.guessedLetters.push(guess);
    } else if (isUnique && isBadGuess) {
        this.guessedLetters.push(guess);
        this.guessesLeft--;
    } else if (this.guessedLetters.includes(guess)) {
        console.log('You\'ve already guessed that letter!');
    }
}


const game1 = new Hangman('cat', 2);
console.log(game1.getPuzzle()); // c*t
console.log(game1.guessesLeft);

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.getGuess(guess);
    console.log(game1.getPuzzle()); // c*t
    console.log(game1.guessesLeft);
})