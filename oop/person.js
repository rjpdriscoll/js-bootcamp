// Prototypal Inheritance


// Class Syntax

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`;

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
    
        return bio; 
    }

    setName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

const myPerson = new Person('Ryan', 'Driscoll', 26, ['Coding']);
console.log(myPerson);

const me = new Person('Ryan', 'Driscoll', 26, ['Call of Duty', 'Tesla']);
me.setName('Dominic James');
console.log(me.getBio());

const personTwo = new Person('Andrew', 'Mead', 27);
console.log(personTwo.getBio());