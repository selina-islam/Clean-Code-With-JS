// Formatting dates & times (toLocalDateString & toLocalTimeString)

// formatting dates

const date = new Date();
// 11/21/2024
console.log(date.toDateString()) // Fri Apr 11 2025

console.log(date.toLocaleDateString())  // 4/11/2025
console.log(date.toLocaleString('fr-FR')); // frence format: 11/04/2025 12:01:02
console.log(date.toLocaleString("en-GB")); // 11/04/2025, 12:01:02 (british format)
console.log(date.toLocaleString()); // 4/11/2025, 12:01:02 PM


// formatting times

console.log(date.toLocaleTimeString())  // 12:03:03 PM
console.log(date.toLocaleTimeString('en-GB'))  // 12:04:01
console.log(date.toLocaleTimeString('fr-FR'))  // 12:04:42