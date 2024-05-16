console.log('Hello Everybody')

//Types of Variables
//I) Primitive Types
//1) Strings (Chaine de caractères)
let firstName = 'Rayhana';
console.log(firstName);
console.log(typeof firstName);

//2) Numbers
let age = 16;
console.log(age * age)
console.log(typeof age)

//3) Booleans
let isItRamadanToday = false;
console.log(isItRamadanToday)
console.log(typeof isItRamadanToday)

//4) Undefined
let money;
console.log(money)
console.log(typeof money)

//5) Null
let colors = null ; 
console.log(colors)
console.log(typeof colors)

//II) Reference Types
//1) Objects
let person = {
    firstName : 'Achraf',
    lastName : 'Sendid',
    age : 33,
    weight : 76,
    height : 1.78,
    idNumber : AA86789,
}
console.log(person.firstName);
//Formula to calculate BMI = (height * height)/weight
let h2 = person.height * person.height;
let bmi = person.weight/h2;
console.log(bmi);

document.getElementById('firstName').innerHTML = person.firstName;
document.getElementById('bmi').innerHTML = bmi;

//alert('Warning you are about to DIE!!!!!!!');
let cash = prompt('How much money you have in you BA?');

document.getElementById('money').innerHTML = cash;

//2) Arrays



//3) Functions