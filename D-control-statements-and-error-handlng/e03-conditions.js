/**
 * When it comes to conditional statements, we distinguish:
 *
 *   if ()
 *   else if ()
 *   else
 *
 *   switch
 *
 *   ternary operator
 *
 *   we can also use logical operators
 *
 *
 * Caution:
 * In JavaScript, we have to be careful with comparisons.
 * You must use the === comparison sign
 *
 * look
 * https://dorey.github.io/JavaScript-Equality-Table/
 * */


/*
		The condition if...else if
*/
let numericCondition = 0;

if (numericCondition === 1) {
	// let ex = 10;
	console.log('if !')

} else if (numericCondition) {


	console.log('else if !')

} else {

	//console.log(ex);
	console.log('else !?')

}

/*
		The ternary operator
*/
const x = 100;
const higherThen10 = x > 10;
console.log(higherThen10);

const hello = higherThen10 ? 'hello2' : 'goodbye';

console.log(hello);

/*
		Switch
*/
switch (hello) {
	case 'hello':
		console.log('logic for hello...');
		break;
	case 'goodbye':
		console.log('logic for goodbye...');
		break;
	default:
		console.log('logic for unknown value')
}


// #1 Task
// Find out what value hello will have if you change x to be less than 10
// Why is this happening?

// #2 Prepare your own console.log which will write "take a" and "coat" or "t-shirt"
// depending on the weather variable which can take the values "windy" and "sunny"
// use the ternary operator

let weather = 'windy';

console.log('take a', weather === 'windy' ? 'coat' : 't-shirt')

// under the hood:
console.log('take a', 'coat')