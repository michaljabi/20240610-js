// #1 Task
// Show numbers from 1 to 10 on the console, one below the other:
// 1
// 2
// 3
// 4
let numbersStr = '';
const numbers = [];

for (let x = 1; x <= 10; x++) {
    console.log(x);
    numbersStr += ' ' + x;
    numbers.push(x);
}

// #2 Task
// Show a sequence of numbers 1 to 10 next to each other on the console:
// 1 2 3 4 5 6 7 8 9 10



// for (let x = 1; x <= 10; x++) {
//     // numbersStr = numbersStr + ' ' + x;
//     numbersStr += ' ' + x;
//     numbers.push(x);
// }

console.log(numbersStr.trim())
console.log(numbers.join(' '))
