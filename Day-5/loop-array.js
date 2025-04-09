// Looping through arrays using for and for...of

const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]) // apple
console.log(fruits[1]) // banana
console.log(fruits[2]) // cherry


for (let index = 0; index < fruits.length; index++) {
        console.log(fruits[index])  // apple
        // banana
        // cherry
}


// using for...of

console.log('bellow is for...of')
for (let fruit of fruits) {
  console.log(fruit);
  // apple
  // banana
  // cherry
}