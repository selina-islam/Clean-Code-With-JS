// Declaring string and string literals
// what are string; (text & message)

let text = 'Hello, Selina!' // single quotation
let text1 = "Assalamu Alaikum"; // double quotation
let text2 = `Hi, Everyone!` // template literals || backticks

console.log(text) // Hello, Selina!
console.log(text1) // Assalamu Alaikum
console.log(text2)  // Hi, Everyone!


// greeting X

let person1 = 'Elon';
let person2 = "Mask";

let greetPeople= `${text1}, Mr. ${person1}`
console.log(greetPeople)  // Assalamu Alaikum, Mr. Elon


// Escape Characters (handling special character)

// she said, "JavaScript is fun"

let escapeText = "She said, 'JavaScript is fun'"
console.log(escapeText) // She said, 'JavaScript is fun'


let hello = "Shorna said, \"I Miss You My Friend\""
console.log(hello)   // Shorna said, "I Miss You My Friend"

// MultiLine string

let MultiLine = `This is a
multiLine paragraph`
console.log(MultiLine)  /*This is a
multiLine paragraph*/
