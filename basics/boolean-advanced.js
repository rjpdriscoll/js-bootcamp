let isAccountLocked = false;
let userRole = 'user'

if (isAccountLocked) {
    console.log('Your account is logged');
} else if (userRole === 'admin') {
    console.log('Welcome admin!');
} else {
    console.log('Welcome user!');
}

// Challenge area

let temp = 31;

// It is freezing outside!
// It is hot outside!
// Go for it. It is pretty nice out!

if (temp <= 32) {
    console.log('It is freezing outside!');
} else if (temp >= 110) {
    console.log('It is hot outside!');
} else {
    console.log('Go for it! It is pretty nice out!');
}