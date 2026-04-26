// function isLeapYear(year) {
//     if (year % 400 === 0) {
//         return true;
//     }
//     else if (year % 100 === 0) {
//         return false;

//     }
//     else if (year % 4 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(isLeapYear(2024));
// console.log(isLeapYear(2023));
// console.log(isLeapYear(1900));
// console.log(isLeapYear(2000));

function isLeapYear(year)
{
    if (year % 400 === 0) {return true;}
    else if (year % 100 === 0) {return false;}
    else if (year % 4 === 0) {return true;}
    else {return false;}
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2023));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));