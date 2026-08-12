// 9.2 Triangle Valid or Not
// Function With Return

function checkTriangle(a, b, c)
{
    if (a + b + c == 180)
        return "Triangle is Valid";
    else
        return "Triangle is Not Valid";
}

let a = Number(prompt("Q-9.2 Enter first angle:"));
let b = Number(prompt("Q-9.2 Enter second angle:"));
let c = Number(prompt("Q-9.2 Enter third angle:"));

console.log(checkTriangle(a, b, c));
