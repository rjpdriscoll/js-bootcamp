// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

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

    set fullName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes);
        this.position = position;
    }
    getBio() {
        return `${this.fullName} is a ${this.position}.`;     
    }
    getYearsLeft() {
        return 65 - this.age;
    }

}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes = []) {
        super(firstName, lastName, age, likes);
        this.grade = grade;
    }
    getBio() {
        if (this.grade >= 70) {
            return `${this.firstName} is passing the class!`;
        } else {
            return `${this.firstName} is failing the class.`;
        }
    }
    updateGrade(amount) {
        this.grade += amount;
    }
}

const me = new Employee('Ryan', 'Driscoll', 26, 'killer', ['coding', 'dogs', 'wife']);
me.fullName = 'Clancy Turner';
console.log(me.getBio());