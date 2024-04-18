console.log('Hello Everybody')

//Different Types of Variables:
//I) Primitive Types of Variables
//1) Strings
let firstName = 'Hello, this is Mehdi'; 
firstName = "Ismail";
console.log(firstName)
console.log(typeof firstName)

//2) Numbers
let age = 33;
console.log(age);
console.log(typeof age);

//3) Booleans
let isYasmineHappyToday = true;
isYasmineHappyToday = false;
console.log(isYasmineHappyToday);
console.log(typeof isYasmineHappyToday);

//4) Undefined
let money;
console.log(money);
console.log(typeof money);

//5) Null
let grade = null;
console.log(grade)
console.log(typeof grade)

//II) Reference Types of Variables

//1) Objects
let person = {
    firstName : 'Achraf',
    lastName : 'Sendid',
    age : 33,
    BloodType : 'O+',
    height: 1.78,
    weight: 76
}

console.log(person.firstName)
console.log(person.lastName)

let h2 = person.height * person.height;
console.log(h2)

let bmi = person.weight / h2
console.log(bmi)


//2) Arrays

//3) Functions
