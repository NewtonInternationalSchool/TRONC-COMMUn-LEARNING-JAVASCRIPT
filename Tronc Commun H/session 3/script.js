// Type of Variables
//I) Primitive Types
//1) Strings
let firstName = 'Adam'; //Strings
firstName = "Rabia";
console.log(firstName);
console.log(typeof firstName);

//2) Numbers
let x = 5.5;
let y = 10;
let z = x * y;
console.log(typeof z)
console.log(z)

//3) Booleans
let isGhinaFastingToday = false;
console.log(isGhinaFastingToday);
console.log(typeof isGhinaFastingToday);

//4) Undefined
let money;
console.log(money);
console.log(typeof money);

//5) Null
let weather = null;
console.log(weather);
console.log(typeof weather);

//II)Reference Types
//1) Objects
let person = {
    firstName : 'Achraf',
    lastName : 'Sendid',
    age: 33,
    weight : 106,
    height : 1.78
}

let h2 = person.height * person.height;
let bmi = person.weight / h2;


console.log(person.firstName);
console.log(bmi)

//2) Arrays


//3) Functions