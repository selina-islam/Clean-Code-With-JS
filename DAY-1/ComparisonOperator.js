// Comparison Operator ( used for decisions making)

// 1. equal to ( pertial = = or === strictly)
let number1 = 10;
let number2 = 20;
const isEqual =(number1 == number2) // 10 == 20
console.log(isEqual)  // false

let number = '20'; // string
let numbers = 20; // number
const isEquals = number == numbers; // '20' == 20
console.log(isEquals); // true

// 2. Not equal to (!=)

let a = 5;
let b = 3;
console.log('Not equal to:', a != b) // Not equal to: true

// 3. Greater than (5 > 3)
console.log('Greater than :', a > b)  // Greater than : true


// 4. Less than (5 < 3)
console.log('Less than:', a < b)  // Less than: false


// 5. Greater than or equal to (5 >= 3)  5 >3 or 5 ==3
console.log('Greater or equal:', a >= b)  // Greater or equal: true

// 6. Less than or equal to ( <=)  5<3 or 5 ==3
console.log("Less or equal:", a <= b);  // Less or equal: false