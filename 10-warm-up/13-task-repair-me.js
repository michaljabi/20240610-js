/*
  TASK:
  Repair this file without changing the final, console.log() call.

  When you see:
	You reached the end! - BRAVO

	on the terminal, that means you solve the task right.

	RULES:
	You should and can change code, but try to do as little changes as possible.
	The aim of this task is to understand communication about errors between you and the interpreter.

	Good luck!
*/

console.log('Program starts...');


let MyHello = ''; // dood practice (convention)
console.log(MyHello, 'World')


console.log(MyHello.charAt(1));
MyHello = 'Hello';

console.log(MyHello.toString())
// console.log(MyHello * 90)
// console.log(MyHello + 90)
// console.log(MyHello / 0)

console.log(Infinity === Infinity);

console.log(MyHello.charAt(0));

console.log(globalThis.MyHello)
console.log(globalThis === global);

const help = "HelpMe out"
console.log(help + ' right now!'); // HelpMe out right now!

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words
let done = true;
const LARGE_NUMBER = 2048

// here, it supposes to be comment - that addNumber will return number
function addNumbers(a, b) {
	return a + b
}

let result;
result = addNumbers(10, 20);
console.log('Result is:', result);

console.log('You reached the end! - BRAVO')
