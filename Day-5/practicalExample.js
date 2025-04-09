// Real world practical example
// Scenario : find the first even number in an array.

const numbers = [1, 3, 5, 8, 10];
for (let number of numbers) {
        if (number % 2 !== 0) {
                console.log(number) // 1,3,5
        }
        
}

// Scenario: skip processing invalid data in an array
const data = [10, 'selina', 30, 'shorna', 50];
for (let item of data){
        if (typeof item !== 'number') continue;
        console.log(item) // 10, 30, 50
}
console.log(typeof(data)) // object