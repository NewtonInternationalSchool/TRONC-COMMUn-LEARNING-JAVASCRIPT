//Variables vs Constants
// How de we declare Variables? let & var
// How de we declare Constants? const

// Types of Variables
//1) Primitive Variables
//Strings
let firstName = "John";
var lastName = "Doe";
firstName = "Sami"
console.log(firstName);
//Numbers
let age = 33; 
console.log(age);

//Booleans
let isWijdaneFasting = false ; 
console.log(isWijdaneFasting);
console.log(isWijdaneFasting);

//Undefined
let bankMoney = undefined;
console.log(typeof bankMoney);

//Null
let absence = null;
console.log(typeof absence);

//2) Reference Types
//Objects consists of properties and values
let person = {
    firstName : "Fatima Zehra",
    lastName : "Sendid",
    age : 16,
    isHappy : true
};

person.firstName = "Rania";

console.log(person); //To display the entire object
console.log(person.firstName); //To access a specifi Value
console.log("Hello my name is " + person.firstName + ". I am " + person.age + " years old."); // + here serves as concatenation
console.log(`Hello my name is ${person.firstName}. I am ${person.age} years old.`)

console.log(person.isHappy);

//Arrays
let selectedProducts = ["Red Nail polish", "Black Nail Polish" , "Madonna" , "Dress", 3 , 5];
console.log(selectedProducts[2]);
console.log(selectedProducts.length);

//Functions
function greet(firstName){
    console.log('Hello ' + firstName)
}
greet('Nisrine');

function teacher(subject){
    console.log(`I will be teaching you ${subject}`)
}
teacher('Javascript');

function addition(a, b){
 return a + b
}
console.log(addition(3, 5));