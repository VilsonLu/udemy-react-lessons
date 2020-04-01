console.log('es6-arrow-function-2 is running');

const add = (a, b) => {
    return a + b;
}

console.log(add(1,2,3,4,5));

// use the ES5 function if you want to use bind this to the object

const user = {
    name: 'Vilson',
    cities: ['Quezon City', 'Makati City'],
    printPlacesLived() {
        return this.cities.map((city) =>  this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 5, 6, 7],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((x) => x * this.multiplyBy);
    }
};

console.log(multiplier.multiply());