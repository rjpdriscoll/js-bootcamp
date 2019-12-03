const Hangman = function (word, numOfGuesses) {
    this.word = word.toLowerCase().split('');
    this.guessedLetters = [];
    this.guessesLeft = numOfGuesses;
    this.status = 'playing';
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

    if (this.status !== 'playing') {
        return
    }

    if (isUnique && !isBadGuess) {
        this.guessedLetters.push(guess);
    } else if (isUnique && isBadGuess) {
        this.guessedLetters.push(guess);
        this.guessesLeft--;
    } else if (this.guessedLetters.includes(guess)) {
        console.log('You\'ve already guessed that letter!');
    }

    this.getStatus();
}

Hangman.prototype.getStatus = function () {
    let finished = true;

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {
            
        } else {
            finished = false;
        }
    })
    
    if (this.guessesLeft <= 0) {
        this.status = 'failed';
    } else if (finished) {
        this.status = 'finished';
    } else {
        this.status = 'playing';
    }
}

Hangman.prototype.statusMessage = function () {
    if (this.status === 'playing') {
        return `Guesses left: ${this.guessesLeft}`;
    } else if (this.status === 'failed') {
        return `Nice try! The word was "${this.word.join('')}".`;
    } else {
        return 'Great work! You guessed the word.';
    }
}