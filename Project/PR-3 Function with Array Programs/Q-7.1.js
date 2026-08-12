//7.1 simple function (no return, with parameter)

function greatest(a, b, c)
{
    if (a > b) {
        if (a > c)
             {
            console.log("A is greatest");
        } else
        
        
        {
            console.log("C is greatest");
        }
    } else {
        if (b > c) {
            console.log("B is greatest");
        } else
        
        
        {
            console.log("C is greatest");
        }
    }
}

let A = Number(prompt("Q-7.1 Enter first number:"));
let B = Number(prompt("Q-7.2 Enter second number:"));
let C = Number(prompt("Q-7.3 Enter third number:"));

greatest(A, B, C);
