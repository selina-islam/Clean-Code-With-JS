// Logical Operators in JavaScript: &&, ||, !

// 1. Logical AND (&&) both side true
// condition1 && condition2

const math = 35;
const science = 90;
if (math >= 50 && science >= 50) {
        console.log("You Passed The Exam")
} else {
        console.log('Student failed')
}  //  Student failed


// logical or (||) partial true
// condition1 or condition2 => true

let isProMember = false;
const hasCoupon = true;

if (isProMember || hasCoupon) {
       console.log('You can enroll my course') 
} else {
        console.log("You can't enroll this course .Please buy membership or course")
}


// logical not (!)
// condition true  => false
// condition false => true

let isLoggedIn = true;
if (!isLoggedIn) {
        console.log('please log in!')
} else {
        console.log('welcome back!')
}  // welcome back!
