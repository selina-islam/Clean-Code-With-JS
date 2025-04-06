// string methods: length, toUppercase(), toLowercase(), slice(), substring() etc.


// 1. how to calculate a length of a string

const para = `Elon Reeve Musk (/ˈiːlɒn/ EE-lon; born June 28, 1971) is a businessman known for his leadership of Tesla, SpaceX, and X (formerly Twitter). Since 2025, he has been a senior advisor to United States President Donald Trump and the de facto head of the Department of Government Efficiency (DOGE). Musk is the wealthiest person in the world; as of March 2025, Forbes estimates his net worth to be US$345 billion. He was named Time magazine's Person of the Year in 2021.`;

console.log('The length of the paragraph is:', para.length)  //The length of the paragraph is: 465

// 2. Uppercase & Lowercase of text

let greeting = 'Hello, Developers!'
console.log(greeting.toUpperCase())  // HELLO, DEVELOPERS!

console.log(greeting.toLowerCase())  // hello, developers!


// 3.slice() method (extract a part of string)

let phrase = 'Welcome to JavaScript';
console.log(phrase.slice(11, -1))  // JavaScrip


// 4.substring() methods (extract a part of string and not accept negative)

const subText = phrase.substring(11, 21)
console.log('Substring:', subText) // Substring: JavaScript


// 5.trim() methods

let word = '      coding'
console.log(word.trim())  // coding

console.log(word.trim().toUpperCase());  // CODING
