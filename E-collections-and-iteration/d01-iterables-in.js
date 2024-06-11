/**
 * Iterable collections - these are constructions on which you can iterate with loops.
 *
 * For example, the simplest JavaScript iterable collection is just a string
 * */

const movie = 'Ender \' s Game ';

console.log(movie[0])
console.log(movie[100])
console.log(movie[-1])

for (let x = 0; x < movie.length; x ++) {
	console.log(x);
	console.log(movie[x])
}

/**
 * In ES6 we get a more convenient loop for computing any iterable collection
 * for...of
 * */

for (const letter of [1, 10, 100]) {
	console.log(letter * 2)
}

// # 1 Task:
// Prove that for...of loop can also be used for Arrays
