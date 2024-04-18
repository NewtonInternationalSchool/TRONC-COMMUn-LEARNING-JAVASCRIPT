//Different Types of Variables

//I) Primitive Types of Variables
//1) String
let firstName = 'Chahd';
console.log(firstName);
console.log(typeof firstName);

//2) Number
let age = 16;
console.log(age);
console.log(typeof age);

//3) Boolean
let isGhitaHappy = false;
console.log(isGhitaHappy);
console.log(typeof isGhitaHappy);

//4) Undefined
let weather;
console.log(weather);
console.log(typeof weather);

//5) Null
let color = null;
console.log(color);
console.log(typeof color);

//II) Reference Types of Variables

//1) Objects
let person = {
    firstName: 'Achraf',
    lastName : 'Sendid',
    age : 33,
    height : 178,
    weight : 76
}

person.firstName = 'Omar';

console.log(person.firstName)
console.log(person.lastName)
// Traditional way to concatenate
console.log('Hello ' + person.firstName +' '+ person.lastName);

//Advanced way to concatenate
console.log(`Hello ${person.firstName} ${person.lastName}. How are you doing today? I know that your age is ${person.age} years old`)

//2) Arrays
let selectedProducts = ['Nail Polish Pink', 'Nail Polish Black' , 'Madonna', 4 , 5]
console.log(selectedProducts);
console.log(selectedProducts.length);
console.log(selectedProducts[4]);

//3) Functions