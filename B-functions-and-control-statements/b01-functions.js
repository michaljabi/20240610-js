/**
* Functions - these are some basic elements you can't skip when building an application.
*
* Fist: they allow to close the executed code in the form of procedures.
* Put simply: avoiding repetitions, because something we wrote can be triggered several times by using function
*
* Second: they are able to convert data in a way defined by us.
 * Having parameters (Input)
 * Generate output data and return it (Output).
 * more about it in /b03-functions-with-parameters.js example
*
* You can name function however you want, but by convention:
* Name of the function is a verb - and you separate words using theCamelCase
 */

let x = 10;


// Declaration:
function sayHello() {
	// let x = 20;
	console.log('Hello!')
	// console.log(x);
}

// Call:
sayHello()
sayHello()


// # 1 Task:
// How To Quickly Repeat These Entries 4 Times On The Screen:
// we want to see 4 boxes one below the other

function showBox() {
	console.log('  ____________')
	console.log('|  in the BOX  |')
	console.log('  ------------')
}

showBox()
showBox()
showBox()
showBox()


// using loop
// solution:
for (let x = 0; x < 4; x++) {
	console.log('  ____________')
	console.log('|  in the box  |')
	console.log('  ------------')
}

/*
console.log('  ____________')
console.log('|  in the box  |')
console.log('  ------------')

console.log('  ____________')
console.log('|  in the box  |')
console.log('  ------------')

console.log('  ____________')
console.log('|  in the box  |')
console.log('  ------------')
*/

