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

        return `Hello, I am ${this.name}. `;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreetings() {
        let greeting = super.getGreetings();

        if(this.hasHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }

        return greeting;
    }
}

const student = new Student('Juan Dela Cruz', 25, 'Computer Science');
const other = new Student();

console.log(student.hasMajor());
console.log(other.hasMajor());

console.log(student.getDescription());
console.log(other.getDescription());

const traveler = new Traveler('Lily Chua', 24, 'Manila');
console.log(traveler.getGreetings());

const new_traveler = new Traveler('Holly Chua', 24);
console.log(new_traveler.getGreetings());



