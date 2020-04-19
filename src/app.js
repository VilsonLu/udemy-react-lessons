import { square, add } from "./utils.js";
import { isAdult, canDrink } from "./person.js"

console.log("app js is running! hello!");
console.log(`This is squared ${square(5)}`);
console.log(`This is added ${add(5, 25)}`);

console.log(`Is Adult: ${isAdult(17)}`);
console.log(`Can Drink: ${canDrink(20)}`);