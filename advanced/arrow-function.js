const square = (num) => num * num;

console.log(square(25));

const squareLong = (num) => {
    return num * num;
};

const people = [{
    name: 'Ryan',
    age: 26
}, {
    name: 'Bill',
    age: 29
}, {
    name: 'Jess',
    age: 22
}]

// const under30 = people.filter(function (person) {
//     return person.age < 30;
// })

const under30 = people.filter((person) => person.age < 30);
console.log(under30);

const age22 = people.find((person) => person.age === 22);
console.log(age22);