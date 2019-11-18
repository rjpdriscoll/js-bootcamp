let num = 103.941;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 0;
let max = 1;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// 0 - .999999
console.log(randomNum);

// Challenge area
// range 1 - 5
// true if correct, false if incorrect

let makeGuess = function (guess) {
    let minNum = 1;
    let maxNum = 5;
    let randNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    return guess === randNum;
}

console.log(makeGuess(3));
console.log(makeGuess(4));
console.log(makeGuess(1));
console.log(makeGuess(2));
console.log(makeGuess(1));