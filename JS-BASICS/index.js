let name = 'Vuel';
console.log(name);

// Cannot be a reserve keyword
// Should be meaningful
// Cannot start with number
// Cannot contain a space or hyphen (-)

let firstName = 'Vuel';
let lastName = 'Guevara';


//Constant
const interestRate = 0.3;
//interestRate = 1;
//console.log(interestRate);

// let name = 'Vuel'; //string literal
// let age = 30; //number literal
let isApproved = true; //Boolean Literal
let first; //undefined
let last = null; //null (to clear value of a variable) 


//object

let person = {
    name: 'Vuel',
    age: 30
};

//Dot Notation
person.name = 'John';

//Bracket Notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

//Arrays

let selectedColors = ['red', 'blue'];
selectedColors[2] =1;
console.log(selectedColors.length);

//Functions

//Performing a task
function greet(name, lastName) /* parameter */ {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith'/*Argument*/);
greet('Mary');

//Calculates a value
function square(number) {
    return number * number;
}

console.log(square(2));