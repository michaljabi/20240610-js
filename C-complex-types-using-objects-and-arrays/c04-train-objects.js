/* # 1 Task:
Define and assign a shoppingCartItem object with the fields:
	name (type: string)
price (type: number)
tax (type: number)

come up with sample values yourself
*/
// "use strict";

// shared method with this:
function fullPrice() {
	// How to access internal fields of the object
	console.log(this);
	console.log(this === globalThis);
	return this.price * this.tax + this.price;
}

fullPrice();

const shoppingCartItem = {
	name: 'Sample product',
	price: 100,
	tax: 0.23,
	// fullPrice: 123
	fullPrice
}

shoppingCartItem.tax = 0.08
console.log(shoppingCartItem.fullPrice());

// fullPrice of one product calculated
const fullPrice1 = shoppingCartItem.price * shoppingCartItem.tax + shoppingCartItem.price;

/* # 2 Task:
Define and assign a shoppingCartItem2 object with the fields:
	name (type: string)
price (type: number)
tax (type: number)

come up with sample values yourself

Show in console.log the sums of prices (price) and taxes (tax) of both products as the value of the basket
*/
const shoppingCartItem2 = {
	name: 'Other product',
	price: 200,
	tax: 0.23,
	// fullPrice: 123
	fullPrice
}

const fullPrice2 = shoppingCartItem2.price * shoppingCartItem2.tax + shoppingCartItem2.price;

// console.log(shoppingCartItem2.fullPrice())

const basketValue = fullPrice1 + fullPrice2;
console.log(basketValue);

// to make it right and DO NOT Repeat the code:
// be DRY -> Dont Repeat Yourself
// you are WET -> Write Everything Twice

function makeShoppingCartItem(name, price = 0, tax = 0.23, currency = 'PLN') {
	return {
		name,
		price,
		tax,
		currency,
		getCurrency() {
			return currency;
		},
		fullPrice() {
			// this.currency;
			return this.price * this.tax + this.price;
		}
	}
}

const shoppingCartItem3 = makeShoppingCartItem('Sample', 300, 0.23, 'EUR') //=
const shoppingCartItem4 = makeShoppingCartItem('Sample 2', 100) //=

shoppingCartItem3.currency = 'TROLL'

console.log(shoppingCartItem3.fullPrice())
console.log(`${shoppingCartItem3.fullPrice()} ${shoppingCartItem3.getCurrency()}`)

// # 3 Show that initializing two new empty objects after comparing === will give us false.
// Even when they got the same properties and values (!!!)
// Explain why this is happening?

console.log(1 === 1)
console.log('?' === '?')

const obj1 = {};
const obj2 = obj1;

console.log(obj1 === obj2);
// console.log(({} === {}))

obj1.name = 'Michal';

// obj1 = {};

console.log(obj1);
console.log(obj2);

delete obj2.name;

console.log(obj1);





const user = { age: 23, name: 'Anna', address: {} }

function removeTheAge(exampleUser = { age: 0, name: '', address: {}} ) {
	// always use parameters as read only (when parameter expects Complex type)
	const userCopy = exampleUser
	// That will repair the code (Shallow copy of the object):
	// const userCopy = { ...exampleUser }
	delete userCopy.age;
	return userCopy;
}

console.log(user)

const user2 = removeTheAge(user);
console.log(user2)

console.log(user)

console.log(user === user2)
console.log(user.address === user2.address)