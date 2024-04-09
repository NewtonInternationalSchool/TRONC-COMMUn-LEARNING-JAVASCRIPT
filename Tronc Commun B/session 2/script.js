//Primitive Types

let firstName = 'Ibtihal'; //This is a string (chaine de caractères)
let age = 16 //This is a number
let isIbtihalfasting = true //This is a Boolean
let familyName = undefined; //This is undefined
let colors = null; //This is Null
console.log(typeof colors);

//Reference Types
//1) Object
let cin = {
    name : 'Achraf Sendid',
    age: 33,
    gender: 'Male',
    isMoroccan : true,
    Adresse : 'Lotissement Bagatelle',
    idNumber : 'AA56789387'
}
cin.age= 34;
let greet = `Bonjour ${cin.name}`

console.log(cin.age);
console.log(cin.isMoroccan);
console.log(cin);
console.log('Bonjour ' + cin.name);
console.log(cin.['age']);


