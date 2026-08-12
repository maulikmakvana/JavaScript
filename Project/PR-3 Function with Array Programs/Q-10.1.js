// Q10. Voting Eligibility Program 
// Simple Function (No Return)

function checkVote(age)
{
    if (age >= 18)
        console.log("You are Eligible for Voting");
    else
        console.log("You are Not Eligible for Voting");
}

let age = Number(prompt(" Q-10.1 Enter your age:"));
checkVote(age);
