let name = '  Ryan Driscoll ';

// Length Property
console.log(name.length);

// Convert to Uppercase
console.log(name.toUpperCase());

// Convert to Lowercase
console.log(name.toLowerCase());

// Includes method
let password = 'abc123apples098';
console.log(password.includes('password'));

// Trim
console.log(name.trim());

// Challenge Area

// isValidPassword function - single argument (password) - return true if valid, false otherwise
// length > 8, doesn't contain the word password

let isValidPassword = function (password) {
    let length = password.length;
    let contains = password.includes('password');
    if (length > 8 && contains === false) {
        return true;
    } else {
        return false;
    }
}

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123@#%@!%'));
console.log(isValidPassword('sfsadfaspassword'));