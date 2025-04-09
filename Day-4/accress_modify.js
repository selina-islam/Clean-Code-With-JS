//Accessing and modifying object properties

//A.  dot notation(object.property)
//B. bracket notation (object["property"]); for dynamic or special characters accessing

const book = {
        tittle: "JavaScript Basics",
        author: "Mamun",
        pages: 250,
}
// access property
console.log(book.tittle)  // JavaScript Basics
console.log(book['author']) // Mamun
console.log(book.pages) // 250

// update or modified properties

book.pages = 300;
console.log(book.pages) // 300


book['tittle'] = "Advanced JavaScript";
console.log(book.tittle)  // Advanced JavaScript


// add new properties

book.publisher = 'ABC publisher'
console.log(book)
/*{
  tittle: 'Advanced JavaScript',
  author: 'Mamun',
  pages: 300,
  publisher: 'ABC publisher'
}*/