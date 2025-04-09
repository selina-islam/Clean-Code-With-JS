// Functional expression anf anonymous function

const difference = (a, b) => a - b 
const result = difference(5, 2); // functional expression
console.log('The result is:', result)  // The result is: 3

// Annonymous function in a callback ( no name)
const friends = ['Shorna', 'Papiya', 'Hasina', 'Johan']

friends.forEach((friend) => console.log(`Welcome, ${friend}!`))

/*
Welcome, Shorna!
Welcome, Papiya!
Welcome, Hasina!
Welcome, Johan!
*/