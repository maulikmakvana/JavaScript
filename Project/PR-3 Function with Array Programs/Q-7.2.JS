// 7.2 Function With Return

function greatest(a, b, c)
{
    if (a > b) 
        
        {
        if (a > c)
            return "A is greatest";
        else
            return "C is greatest";
    } else {
        if (b > c)
            return "B is greatest";
        else
            return "C is greatest";
    }
}

let A = Number(prompt("Q-7.2  Enter first number:"));
let B = Number(prompt("Q-7.2 Enter second number:"));
let C = Number(prompt("Q-7.2 Enter third number:"));

let result = greatest(A, B, C);
console.log(result);
