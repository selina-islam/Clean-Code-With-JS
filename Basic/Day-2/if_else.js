//  conditional statements(if, else if & else)

// conditional statements syntax
/*if (condition) {
        // code block
} else if (condition) {
    // code block    
} else {
        // code block
}*/


// if statement

let age = 18;
if (age >= 18) {
        console.log('You can vote')
}  // You can vote

let ages = 16;
if (ages >= 18) {
        console.log('You can vote')
} 


// else statement
let ag = 6;
if (ag >= 18) {
        console.log("You are eligible to vote")
} else {
        console.log('You are not eligible to vote')
}  // You are not eligible to vote


// else if statement

let score = 85;
if (score >= 90) {
        console.log('Grade: A+')
} else if (score >= 80) {
        console.log("grade: B")
} else if (score >= 70) {
        console.log('grade: C')
} else {
        console.log("grade: F")
}  // grade: B