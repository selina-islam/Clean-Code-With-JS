// combining, slicing and joining arrays

// 1. concat(): combine array
const arr1 = [1, 2];
const arr2 = [3, 4];
// output create a new array: [1,2,3,4]
const combinedarr1 = arr1.concat(arr2);
console.log(combinedarr1) // [ 1, 2, 3, 4 ]
const combinedarr2 = arr2.concat(arr1);
console.log(combinedarr2) // [ 3, 4, 1, 2 ]



// slice(): 
const animal = ['Lion', 'Tiger', 'Bear', 'Elephant'];

const subset= animal.slice(1,3)
console.log(subset) // [ 'Tiger', 'Bear' ]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const subnubmers=numbers.slice(2,6)
console.log(subnubmers)  // [ 3, 4, 5, 6 ]



// join (): 
const world = ['Hello', 'Developer'];
const sentence= world.join(' ')
console.log(sentence)   // Hello Developer
