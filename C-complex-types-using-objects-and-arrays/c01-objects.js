/**
* JavaScript has the so-called object literals.
* They allow you to create a given object -
* without the need to define plans of its structure like in other object-oriented languages - which use classes.
*/

// In other Langs YOU HAVE TO do like that:
const myUser = new Object();
// syntax with so called object literal
const myUser2 = {};

console.log(myUser);
console.log(myUser2);

// A simple example of an object:
const user = {
	name: 'Marek',
	// lastName: ''
};

function makeUser(name2 = 'Katie') { // factory function
	return {
		name: name2
	};
}
console.log(makeUser('Mark'))
console.log(makeUser('Jarek'))
console.log(makeUser('Michal'))
console.log(makeUser())

console.log(user);

// Access to property inside object:
console.log(user.name);
console.log(typeof user.name);

console.log(user.name);

// assign value of the object property to other variable / constant:

const theName = user.name;

console.log(theName);

// What will happen, when property does not exist:
console.log(user.age);
console.log(user.age === undefined);

// Soren question (CAN I LOCK the object to not be dynamically extendable?)
// Answer is yes:
Object.freeze(user);

// But, JavaScript is also dynamic in case of objects
// We can define NEW object fields (properties):
user.lastName = 'Kowalsky'

console.log(user);
console.log(user.lastName);

// You can also modify existing property values:
user.name = 'Katie';

console.log(user);
console.log(user.name);


// OOP Way:
class User {

	myName = 'Henry';
	#myPrivate = 'secret key';

	constructor() {
		console.log(this.#myPrivate)
	}

	showMeYourSecret() {
		return this.#myPrivate
	}
}

const classDoesNotChangeDynamic = new User();

classDoesNotChangeDynamic.lastName = 'Kowalsky'

console.log(classDoesNotChangeDynamic)

console.log(new User().myName);
// console.log(new User().myPrivate);
// console.log(new User().#myPrivate);

console.log(new User().showMeYourSecret());
