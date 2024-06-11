// #1 Task:
// Declare a new array with the numbers 1 up to 8
// Remove the first and last value out of it


const numbers2 = [];
for (let x = 1; x <= 8; x++) {
    numbers2.push(x);
}

numbers2 //=

// 

console.log('Hello World'.split(' '))
console.log('12 345 67'.split(' '))

const numbers3 = Array.from('12345678a').map(s => Number(s)) // .filter(Boolean);
// const numbers3 = [...'12345678'].map(Number);
console.log(numbers3);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);
numbers.pop(); //=
console.log(numbers);
numbers.shift(); //=
console.log(numbers);

// #2 Task:
// Show on the console "one above the other" the result of multiplying the fields of this array by 3
for (const num of numbers) {
    console.log(num * 3)
}

numbers.forEach(el => {
    console.log(el * 3)
})

numbers.map((el) => el * 3) //=


// #3 Task:
// Check the documentation for the "indexOf" method for arrays. How to use it? Show an example of use

numbers.indexOf(6) //=
numbers.indexOf(63) //=

// #4 Task:
// Show the 1st and last element of the array on the console (one below the other)
console.log(numbers[0])
console.log(numbers[numbers.length - 1])

console.log(numbers.at(0))
console.log(numbers.at(-1))