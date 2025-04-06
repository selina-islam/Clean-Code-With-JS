// Numbers method: toFixed(), parseInt(), parseFloat()

// 1. toFixed():

const price = 150.98753322;
console.log(price.toFixed(2)) // 150.99
console.log(price.toFixed(5)) // 150.98753


//parseInt(): convert a string to a number or decimal point to integer
// integer numbers: 0-9=> 99,670, 3227878

const strl = "43"
const strl2 = 'abcd42' // non digit number X (NaN or not a number)

const strl3 = "45px";
const srtel4= '32ajnmdb'
console.log(parseInt(strl))  // 43
console.log(parseInt(strl2))  // NaN
console.log(parseInt(strl3))  // 45
console.log(parseInt(srtel4)) // 32


// using the radix parameter
// binary (base 2) to decimal (base 10)
const binaryNumber = '1010'; // output: 10
console.log("The decimal number is:", parseInt(binaryNumber))  // The decimal number is: 1010
console.log('The decimal number is:', parseInt(binaryNumber, 2)); // The decimal number is: 10

// Hexadecimal  (base 16) to decimal (base 10)
// hexadecimal number: 0-9, A,B,C,D,E,F
const hexaDecimal = "F";
console.log('The decimal number is:', parseInt(hexaDecimal, 16));  // The decimal number is: 15

const hexaDecimal1 = "AE5";
console.log(parseInt(hexaDecimal1, 16))  // 2789

const hexaDecimal2 = "DC24";
console.log(parseInt(hexaDecimal2, 16))  // 56356

// parseFloat(), convert a string a decimal number

const str4 = "3.1415";
console.log(parseInt(str4)) // 3
console.log(parseFloat(str4)) // 3.1415


const productPrice = "5.99";
const productPrice1 = "4.58";
const totalPrice = productPrice + productPrice1;
console.log(totalPrice);  // 5.994.58
const totalPrices = parseFloat(productPrice) + parseFloat(productPrice1);
console.log(totalPrices);  // 10.57