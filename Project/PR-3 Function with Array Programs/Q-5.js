// 5.Write Write a JavaScript program to add two number of addition, subtraction, multiplication, division (using simple function)

function hello (a, b)
{
    console.log("Addition = " + (a + b));
    console.log("Subtraction = " + (a - b));
    console.log("Multiplication = " + (a * b));
    console.log("Division = " + (a / b));
}

let n1 = Number(prompt("Q-5 Enter first number:"));
let n2 = Number(prompt("Q-5 Enter second number:"));

hello (n1, n2);
