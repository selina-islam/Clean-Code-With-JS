// Creating Date Objects


// the current date & time

const timeOfNow = new Date();
console.log(timeOfNow) // 2025-04-09T08:01:09.885Z

// specific date & time

const specificDate = new Date('2023/03/19')
console.log(specificDate)  // 2023-03-18T18:00:00.000Z
const Specific=new Date('2022/03/02/10:30')
console.log(Specific) // 2022-03-02T04:30:00.000Z


// Using year, month,day,hour,minute etc

const customDate = new Date(2004, 0, 9, 5, 30);
console.log(customDate)  // 2004-01-08T23:30:00.000Z

const customDates = new Date(2023, 11, 25, 10, 30, 0);
//  Format: new Date(year, monthIndex, day, hours, minutes, seconds)

// In JavaScript, months start from 0: January = 0

console.log(customDates);





function getCustomDateTime() {
  // বর্তমান তারিখ ও সময় নেওয়া হচ্ছে
  const now = new Date();

  // যেকোনো এক অঙ্কের সংখ্যা হলে তার আগে 0 বসাবে (যেমন: 5 → 05)
  const pad = (num) => num.toString().padStart(2, "0");

  // return করবে: DD/MM/YYYY HH:MM:SS ফরম্যাটে তারিখ ও সময়
  return (
    `${pad(now.getDate())}/` + // দিন (ডাবল ডিজিটে)
    `${pad(now.getMonth() + 1)}/` + // মাস (0-based তাই +1)
    `${now.getFullYear()} ` + // সাল
    `${pad(now.getHours())}:` + // ঘণ্টা (24-ঘণ্টা ফরম্যাটে)
    `${pad(now.getMinutes())}:` + // মিনিট
    `${pad(now.getSeconds())}`
  ); // সেকেন্ড
}

// কনসোলে ফরম্যাট করা তারিখ ও সময় দেখাবে
console.log(getCustomDateTime());  //09/04/2025 14:46:18


// getting parts of a date

const date = new Date();
console.log(date) // 2025-04-09T08:47:09.783Z

console.log(date.getFullYear()) // 2025
console.log(date.getMonth())  // 3
console.log(date.getDate())  // 9
console.log(date.getDay()) // 3
console.log(date.getTimezoneOffset()) // -360
console.log(date.getTime())  // 1744188587499
console.log(date.getSeconds()) // 11
console.log(date.getMinutes())  // 50
console.log(date.getHours()) // 14
console.log(date.getMonth() + 1)  // 4

const myDate = new Date();
myDate.setFullYear(2022);
myDate.setMonth(2 + 1);
myDate.setDate(9)
myDate.setHours(11)
console.log(myDate)  // 2022-04-09T05:30:57.186Z
