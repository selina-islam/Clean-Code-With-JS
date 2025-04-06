// Data types in JavaScript (Primitive & Non Primitive)

// 1. primitive Data Type: basic data types & immutable (cannot be changed)
/*
1. string
let name= "Selina"
name= "Shorna"

2. Numbers: ex- 42, 3.14

3. Boolean: true, false

4. Null: null
let height: null      // no value assigned

5. Undefined: undefined(Not Assign value to variable)
let weight;

6. symbol: unique values as objects property key
let id = symbol('unique id');
*/

// 2. Non-Primitive data types: complex data types, mutable (changeable) & stored a references in memory

/*
1. Objects: collections of keys and value pairs
let person={
name: "Selina",
age:'age',
address: "Tangail"
}
2. Array: Ordered list of values
let numbers=[1,34,55,66,5];

3. Function: Reusable blocks of code & performs n actions
function great(){
console.log("Assalamu Alaikum")}
*/


//Practical Example:

// primitive data type example
let x = 10; // number (primitive)
let y = x;   // value is copied
console.log(x)  // 10
console.log(y) // 10

y = 20;
console.log('2nd time y is:', y)  // 2nd time y is: 20
console.log('2nd time x is:', x)  // 2nd time x is: 10  (original value unchanged)


// practical example of non-primitive data type

let obj = {
        a: 10
};

let obj1 = obj;
console.log("The obj1", obj1)  // The obj1 { a: 10 }

obj1.a = 20;
console.log("2nd time of obj1:", obj1)  // 2nd time of obj1: { a: 20 }
console.log("2nd time of obj:", obj)  // 2nd time of obj: { a: 20 }  // original object modified