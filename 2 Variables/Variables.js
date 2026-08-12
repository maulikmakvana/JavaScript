// Variables

// Variable is a container used to store data.

// JavaScript me variable banane ke liye:
// var
// let
// const


// let

let name = "Maulik";

console.log(name);


// Value change kar sakte hain

let age = 20;

age = 21;

console.log(age);


// const

// const ki value ko baad me change nahi kar sakte.

const country = "India";

console.log(country);


// var

// var is the old way of declaring variables.
// Modern JavaScript me let aur const ko prefer kiya jata hai.

var city = "Surat";

console.log(city);


// Ek variable me alag-alag type ki value store kar sakte hain.

let value = 100;

console.log(value);

value = "Hello";

console.log(value);

value = true;

console.log(value);


// Variable naming rules

// Variable name number se start nahi ho sakta.

// Wrong:
// let 1name = "Maulik";

// Correct:
let name1 = "Maulik";


// Variable name me space nahi de sakte.

// Wrong:
// let first name = "Maulik";

// Correct:
let firstName = "Maulik";


// Variable name case-sensitive hota hai.

let username = "Maulik";
let UserName = "Makvana";

console.log(username);
console.log(UserName);


// Variable names ke liye camelCase commonly use kiya jata hai.

let firstName = "Maulik";
let lastName = "Makvana";
let userAge = 20;


// Variable ko value diye bina bhi declare kar sakte hain.

let address;

console.log(address);

// Output:
// undefined


// Multiple variables

let firstName1 = "Maulik";
let age1 = 20;
let city1 = "Surat";

console.log(firstName1);
console.log(age1);
console.log(city1);


// Important

// let    -> value change kar sakte hain
// const  -> value change nahi kar sakte
// var    -> old way, modern JavaScript me generally avoid kiya jata hai