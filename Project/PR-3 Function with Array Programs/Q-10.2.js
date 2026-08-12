// Q10. Voting Eligibility Program 
// Function With Return

function vote(age)
{
    if (age >= 18)
        console.log("You are Eligible for Voting");
    else
        console.log("You are Not Eligible for Voting");
}

let age = Number(prompt("Q-10.2 Enter your age:"));
vote(age);
