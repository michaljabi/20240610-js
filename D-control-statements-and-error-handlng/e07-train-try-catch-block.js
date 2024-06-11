/**

 #Tasks:
  1. Make an error handler using a try - catch - finally block
  2. What would happen if we put e.g. 'string' under the throw - is it a good practice?

 #Objective:
  Understanding error handling methods. Knowing that in JS you can throw away
  as an error - whatever we want.
  But in practice - we should be using the Error object,
  wanting to develop it - e.g. inheriting from it or composing it.

 */

function divide(a, b) {

    // JSON.parse(';')
    if (b === 0) {
        throw new Error(`Cannot divide by ${b}!`)
    }
    return a / b;
}

// Solve here:
try {
    console.log(divide(20, 2))
    console.log(divide(20, 0))

    console.log('I will not work')
} catch (e) {
    console.log(e.message);
}



console.log('Code below will not work... :(')
console.log('But we want this to work fine!')
