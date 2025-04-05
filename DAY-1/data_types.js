// JavaScript Data Types

/* 
1. string
2. number
3. boolean
4. undefined
5. null
*/

let greeting = 'Assalamu Alaikum' // single quoted string
let message = "We are a very nice person"  // double quoted string

let welcomeMessage = `Welcome, ${greeting}` // template literals
console.log(welcomeMessage)

// Number Data Type (represent integer and float values)

let num = 100; //integer
let number = 12.99; // floating number
let bigNumber = 1e6; // exponential notation (1 million decimal)

// boolean data types (true or false)

let isLogged = true;
let hasAccessOnAdminDashboard = false;
let LightOn = false;


// undefined data types (declared but not assigned)

let joinPicnic;
console.log(joinPicnic) // undefined

// Null Data Types (intentionally absence of any values or object (no value))

let emptyBox = null; // null
emptyBox = 5; // 5
console.log(emptyBox)

/*
Comparison and Use Case

=> string : text & messages
=> number : calculations, counters, prices
=> boolean : logical things or conditions
=> undefined : uninitialized variables
=> null : explicity clear or reset or reassign variables


*/