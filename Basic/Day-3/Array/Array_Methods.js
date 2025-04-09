// Array methods:
// 1. push()  : add new element to the end of the array
const Numbers = [1, 2, 3];
Numbers.push(4)
Numbers.push('A')
console.log(Numbers)  // [ 1, 2, 3, 4, 'A' ]


//2. pop() : remove element from thhe end of the array

const colors = ['red', 'green', 'blue', 'yellow']  // Before pop: [ 'red', 'green', 'blue', 'yellow' ]
console.log('Before pop:', colors)
colors.pop()
console.log(colors)  // [ 'red', 'green', 'blue' ]



// 3. shift() : remove first element of the array

const cities = ['Maldives', 'Bangladesh', 'Japan','Canada', 'London', 'Paris']
cities.shift()
console.log(cities)  // [ 'Bangladesh', 'Japan', 'Canada', 'London', 'Paris' ]



//4. unshift() : add element to the beginning of the array

const Animals = ['Dog', 'Cat'];
Animals.unshift('Elephant')
console.log(Animals)  // [ 'Elephant', 'Dog', 'Cat' ]