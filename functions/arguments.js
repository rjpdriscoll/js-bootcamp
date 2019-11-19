// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = function (name = 'User', score = 0) {
   return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText('Ryan', 100);
console.log(scoreText);

// Challenge Area

// calcTip = total * tipPercent (default 20%)
// A 25% tip on $(bill total) would be $(tip)
let calcTip = function (total, tipPercent = .2) {
    let tipAmt = total * tipPercent;
    let percent = tipPercent * 100;
    return `A ${percent}% tip on a $${total} bill would be $${tipAmt}.`
}

let tip = calcTip(10, .3);
console.log(tip);

