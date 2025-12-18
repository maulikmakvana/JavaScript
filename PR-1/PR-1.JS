// Q1: Celsius to Fahrenheit
alert("Q1");
let c = prompt("Enter temperature in Celsius");
c = Number(c);

let f = (c * 9/5) + 32;
console.log("Temperature in Fahrenheit =", f);


// Q2: Gross Salary
alert("Q2");
let base = Number(prompt("Enter Base Salary"));
let hraP = Number(prompt("Enter HRA %"));
let daP  = Number(prompt("Enter DA %"));
let taP  = Number(prompt("Enter TA %"));

let hra = base * hraP / 100;
let da  = base * daP / 100;
let ta  = base * taP / 100;

let gross = base + hra + da + ta;
console.log("Gross Salary =", gross);


// Q3: Third Angle of Triangle
alert("Q3");
let a = Number(prompt("Enter first angle"));
let b = Number(prompt("Enter second angle"));

let third = 180 - (a + b);
console.log("Third Angle =", third);


// Q4: Swap two numbers without third variable
alert("Q4");
let A = Number(prompt("Enter value of A"));
let B = Number(prompt("Enter value of B"));

A = A ^ B;
B = A ^ B;
A = A ^ B;

console.log("A =", A);
console.log("B =", B);


// Q5: Table without loop
alert("Q5");
let n = Number(prompt("Enter any number"));

console.log(n + " * 1 = " + n*1);
console.log(n + " * 2 = " + n*2);
console.log(n + " * 3 = " + n*3);
console.log(n + " * 4 = " + n*4);
console.log(n + " * 5 = " + n*5);
console.log(n + " * 6 = " + n*6);
console.log(n + " * 7 = " + n*7);
console.log(n + " * 8 = " + n*8);
console.log(n + " * 9 = " + n*9);
console.log(n + " * 10 = " + n*10);
