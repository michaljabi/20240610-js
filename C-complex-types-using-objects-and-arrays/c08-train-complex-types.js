
const fruits = ['cherry', 'apple', 'banana'];
const name = 'Fruit shop'

function greetings() {
	return 'welcome!'
}

/* #1 Task:
	Create a shop object
	which will have the fields: fruits name greetings
	they are to have the same values as the things declared above
*/
const shop = {
	name2: name,
	fruits: [...fruits], // [].concat(fruits) // Array.from(fruits),
	// greetings: greetings,
	// syntactic sugar:
	greetings
}

fruits.push('!')

console.log(fruits === shop.fruits);

console.log(shop)
// destructuring objects:
const { name2 } = shop;
console.log(name2);


// #2 Task:
// show "banana welcome!" on the console using data from the object
console.log(shop.fruits[2], shop.greetings())

// instead of:
const banana = shop.fruits[2];
console.log(banana, shop.greetings())

// some sugar with destructuring
const [, a, banana2] = shop.fruits;
console.log(a);
console.log(banana2, shop.greetings())

// #3 Task:
// create 2 concurrentShop object which will be a clone of the previous one (declare with the same values)
// additionally it will also have a banner method - which will return "here prices are the lowest!"
const concurrentShop = {
	...shop,
	showBanner() {
		return "here prices are the lowest!";
	}
}


// #4 Tasks:
// Show all field names of shop object on the console
console.log(Object.keys(shop))
console.log(Object.keys(concurrentShop))


// Use 
for (const field in shop) {
	console.log(field);
}

for (const field in fruits) {
	console.log(field);
}

// under the hood:
const arrayLike = {
	0: 'sth',
	1: 'hello',
	2: 'other...',
	length: 2
}

console.log(arrayLike);


for (const fruit of Array.from(arrayLike)) {
	console.log(fruit);
}

for (const fruit of fruits) {
	console.log(fruit);
}


// W want to have many insances of same object so:
function makeShop(name) {
	const privateScope = 10;


	return {
		name,
		fruits: ['cherry', 'apple', 'banana'],
		greetings() {
			return 'welcome!' + privateScope
		}
	}
}

const shop1 = makeShop('My shop');
console.log(shop1.greetings())

const shop2 = makeShop('My shop 2');
console.log(shop2.greetings())

console.log(shop1.fruits === shop2.fruits);