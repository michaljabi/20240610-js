/**
* Because JavaScript does not have the so-called strong typing (programmer attach type signature with a value)
* allows us to do with variables "whatever we can think of"
*
* A bad idea (habit) will be:
*  "dynamic change of variable type"
*
* With the "typeof" keyword, you can easily see what a simple type variable is
*/

// first string:
const helloWorld = 'Hello World'
console.log(helloWorld, 'is:', typeof helloWorld)

// then number:
const myNumber = 12333
console.log(myNumber, 'is:', typeof myNumber)

// then boolean:
const myFlag = true
console.log(myFlag, 'is:', typeof myFlag)

// then undefined:
// const sample = undefined;
let sample;
console.log(sample, 'is:', typeof sample)

// # 1 Task:
// Refactor - change the above entries to the correct code
// Without changing the so-called "logic" (way of work) (that is, all console.logs stay and should show up as before)
