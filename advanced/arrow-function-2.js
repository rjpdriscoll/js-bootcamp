const add = function () {
    return arguments[0] + arguments[1];
}


add(11, 22, 33, 44);
console.log(add(11, 22, 33, 44));

const car = {
    color: 'black',
    getSummary() {
        return `The car is ${this.color}`
    }
};

console.log(car.getSummary());