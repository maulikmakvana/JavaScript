// Data Types

// Data type tells us what type of value a variable stores.

// JavaScript has two main categories:
//
// 1. Primitive Data Types
// 2. Non-Primitive Data Types


// 1. Primitive Data Types

// Primitive data types are basic data types.

// JavaScript has 7 primitive data types:
//
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol


// String

// String is used to store text.

// String can be written using:
// " "
// ' '
// ` `

let name = "Maulik";
let city = 'Surat';

console.log(name);
console.log(city);

console.log(typeof name);

// Output:
// string



// Number

// Number is used to store numbers.

// JavaScript has only one Number type
// for both integer and decimal numbers.

let age = 20;
let price = 99.50;

console.log(age);
console.log(price);

console.log(typeof age);

// Output:
// number



// Boolean

// Boolean has only two values:
//
// true
// false

let isStudent = true;
let isLoggedIn = false;

console.log(isStudent);
console.log(isLoggedIn);

console.log(typeof isStudent);

// Output:
// boolean



// Undefined

// A variable that is declared but does not have
// a value is undefined.

let address;

console.log(address);

console.log(typeof address);

// Output:
// undefined



// Null

// Null represents an intentional empty value.

// Example:

let phoneNumber = null;

console.log(phoneNumber);

console.log(typeof phoneNumber);

// Output:
// null
//
// Note:
// typeof null returns "object".
// This is a historical behavior in JavaScript.



// BigInt

// BigInt is used to store very large integers.

// BigInt is created by adding n at the end of a number.

let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);

console.log(typeof bigNumber);

// Output:
// bigint



// Symbol

// Symbol creates a unique value.

// Example:

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2);

// Output:
// false

console.log(typeof id1);

// Output:
// symbol



// 2. Non-Primitive Data Types

// The main non-primitive/reference data type in JavaScript
// is Object.

// Objects can store multiple values.

// Example:

let person = {
    name: "Maulik",
    age: 20,
    city: "Surat"
};

console.log(person);

console.log(typeof person);

// Output:
// object



// Array

// Array is used to store multiple values in a single variable.

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);

console.log(typeof fruits);

// Output:
// object

// Note:
// In JavaScript, an array is technically an object.



// Function

// Function is also an object in JavaScript.

function greet() {
    console.log("Hello");
}

greet();

console.log(typeof greet);

// Output:
// function



// typeof Operator

// typeof is used to check the data type of a value.

console.log(typeof "Hello");
// string

console.log(typeof 100);
// number

console.log(typeof true);
// boolean

console.log(typeof undefined);
// undefined

console.log(typeof null);
// object

console.log(typeof 100n);
// bigint

console.log(typeof Symbol("id"));
// symbol

console.log(typeof {});
// object

console.log(typeof []);
// object

console.log(typeof function () {});
// function



// Important

// Primitive Data Types:
//
// String
// Number
// Boolean
// Undefined
// Null
// BigInt
// Symbol


// Non-Primitive:
//
// Object
// Array
// Function


// Examples:
//
// "Hello"       -> String
// 100           -> Number
// true          -> Boolean
// undefined     -> Undefined
// null          -> Null
// 100n          -> BigInt
// Symbol("id")  -> Symbol
// {}            -> Object
// []            -> Array
// function(){}  -> Function