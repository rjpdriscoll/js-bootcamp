let temp = 20;

// really nice out is between 60 and 90 degrees F

if (temp >= 60 && temp <= 90) {
    console.log('It is really nice outside!');
} else if (temp <= 0 || temp >= 120) {
    console.log('Definitely do not go outside.');
} else {
    console.log('Eh, do what you want.');
}

// Challenge area

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

// are both guests vegan? only offer vegan dishes

// is one guest vegan? offer some vegan options

// are no guests vegan? offer full menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer vegan dishes to this table!');
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer some vegan dishes to this table!');
} else {
    console.log('Offer the full menu!');
}