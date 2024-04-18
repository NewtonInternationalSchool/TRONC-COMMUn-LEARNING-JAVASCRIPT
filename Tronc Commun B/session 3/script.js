document.getElementById("demo").innerHTML = 'Hello Everybody';

//Variables vs Constants
//To declare a variable:
let age = 34;
var date = 'September'
age = 16;
console.log(age);

//To declare a constant : 
const money = 10000;
console.log(money);

//
//The different types of Variables:
// I) Primitive Types of Variables
//1) Strings
let firstName = "Rim";
console.log(firstName)

//2) Number
let pairOfShoes = 10; 
console.log(typeof pairOfShoes);

//3) Booleans
let isItSunnyToday = true;
console.log(isItSunnyToday)
console.log(typeof isItSunnyToday)

//4) Undefined
let time
console.log(time)
console.log(typeof time)

//5) Null
let colors = null;
console.log(colors);
console.log(typeof colors)

// II) Reference Types of Variables

//1) Objects
let person = {
    firstName : 'Achraf',
    lastName : 'Sendid',
    age : 33,
    height : 178,
    weight : 76
}
console.log(`Hello my last name is ${person.lastName}, I am ${person.age} years old and I weight ${person.weight}kg.`);

console.log(person.lastName)
console.log(person['lastName']) //Another way to access a value in an object
//2) Arrays

//3) Functions