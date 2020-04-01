console.log('es6-arrow-function is running');

const square = function(x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

const firstName = (fullName) => {
    return fullName.split(' ')[0];
}

const getFirstName = (fullName) => fullName.split(' ')[0];


console.log(firstName('Vilson Lu'));