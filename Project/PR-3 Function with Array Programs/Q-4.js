// 4.Write a JavaScript program to find which number is greter in 4 numbers using ledder if else. (using no return with parameter function)

function Greatest(a, b, c, d)
{
    if (a > b && a > c && a > d)
    {
        console.log("A is greatest");
    }
    else if (b > a && b > c && b > d)
    {
        console.log("B is greatest");
    }
    else if (c > a && c > b && c > d)
    {
        console.log("C is greatest");
    }
    else
    {
        console.log("D is greatest");
    }
}

let n1 = Number(prompt("Q-4 Enter first number:"));
let n2 = Number(prompt("Q-4 Enter second number:"));
let n3 = Number(prompt("Q-4 Enter third number:"));
let n4 = Number(prompt("Q-4 Enter fourth number:"));

Greatest(n1, n2, n3, n4);
