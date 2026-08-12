//  9 Triangle Valid or Not 
// Simple Function (No Return, With Parameter)



function checkTriangle(a, b, c)
{
    if (a + b + c == 180)
        console.log("Triangle is Valid");
    else
        console.log("Triangle is Not Valid");
}

let a = Number(prompt("Q-9.1 Enter first angle:"));
let b = Number(prompt("Q-9.1 Enter second angle:"));
let c = Number(prompt("Q-9.1 Enter third angle:"));

checkTriangle(a, b, c);

