//Iterating over array

const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // cherry
console.log("lengh of the array", fruits.length); // lengh of the array 3

/*
for (condition){
        //code
}
           */

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  // apple
  // banana;
  // cherry;
}



// using forEach
fruits.forEach((fruit) => {
  console.log(fruit);
  // apple
  // banana
  // cherry
});



// using map

fruits.map((f) => {
  console.log(f);
  // apple
  //banana;
  // cherry;
});
