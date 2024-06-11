/**

   #1 Task
   Replace with proper comparisons along with type checking

   #Objective:
   Understanding that there is a problem with using double "==" comparisons in JavaScript,
   "Implicit Type Casting".
   Instead of double, we should use the triple equality operator everywhere.

   See: https://dorey.github.io/JavaScript-Equality-Table/

 */

const one = '1';
const otherOne = 1;
const on = true;
const off = false;

console.log(one != on);
console.log(one !== on); // NOT equal as !== (triple)

if (one === on) {
  console.log('Hello one is on !');
}

if ([] === off) {
  console.log('hello');
}

if (otherOne === one) {
  console.log('Hello World');
}

// This is why we do not want to MIX the types !!!
console.log(1 + '1')
console.log(1 + 1 + '1')
console.log('1' + 1 + 1)









