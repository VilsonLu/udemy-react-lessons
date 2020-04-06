class Person {
    constructor(name = 'Anonymous', age = 0) {
        // use || for default (or)
        this.name = name;
        this.age = age;
    }

    getGreetings() {
        if(this.name === 'Anonymous') {
            return 'Hi!';
        }

        return `Hello, I am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`
    }
}

const me = new Person('Vilson Lu');
const other = new Person('Josh Cruz', 26);
console.log(me.getDescription());

console.log(other.getDescription());