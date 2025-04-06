// Math Object for complex operations: Math.round(), Math.random(), Math.max()

// 1. Math.round() to make a floating number to a nearest integer

const number1 = 4.7; // convert to 5
let number2 = 4.4; // convert to 4

console.log(`Rounded value of ${number1} is: ${Math.round(number1)}`)  // Rounded value of 4.7 is: 5
console.log(`Rounded value of ${number2} is: ${Math.round(number2)}`)  // Rounded value of 4.4 is: 4
console.log("The amount is:", Math.ceil(number2))  // The amount is: 5

// NOTE: e-commerce applications

// Math.random( to generate a random number between 0 & 1
// NOTE: OTPs $ Random IDs
console.log("The Random Number is:", Math.random()) // The Random Number is: 0.368767401234418

// generate a random number between 1 - 10
const randomNumber = Math.ceil(Math.random() * 10) + 1
console.log(randomNumber)  // 8


// generate a random number between 1 - 100
const randomNumbers = Math.ceil(Math.random() * 100) + 1

console.log(randomNumbers)  // 76


// generate a random number between 1 - 1000
const randomNumberss = Math.ceil(Math.random() * 1000) + 1

console.log(randomNumberss)  // 743


// Math.max() returns the largest value from a set of number
const num1 = 5;
const num2 = 10;
const nam3 = 7;
const maxNumber = Math.max(num1, num2, nam3);
console.log("The largest number is:", maxNumber)  // The largest number is: 10


// finding the largest number of an array
const numbers = [23, 44, 55, 53, 98];
const largestNumber = Math.max(...numbers) // spread operator
console.log(largestNumber) // 98

// Noto: highest score of a game, quiz app or maximum temperature