//Challenge Task: Calculator Object

/*
problem:
create a calculator object with methods:

=>add(a,b) that returns the sum of two numbers.
=>subtract (a,b) that returns the difference.
=>multiply(a,b) that returns the product.
=>divide(a,b) that returns the quotient (handle division by zero)
*/

const calculator = {
        add: function (a, b) {
                return a + b;
        },
        subtract: function (a, b) {
                return a - b;
        },
        multiply: function (a, b) {
                return a*b
        },
        division: function (a, b) {
                if (b === 0) {
                        return "Error: Cannot divide by zero"
                }
                return a / b;
        }
}

// test the calculator

console.log(calculator.add(4, 6))  // 10
console.log(calculator.add(200, 430))  // 630

console.log(calculator.subtract(48,5)) // 43
console.log(calculator.subtract(505, 3)) // 502

console.log(calculator.multiply(4,4))  // 16
console.log(calculator.multiply(40,9))  // 360

console.log(calculator.division(80,8))  // 10
console.log(calculator.division(129,0))  // Error: Cannot divide by zero