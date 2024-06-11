// Checking NaN
// That wan't work:
console.log(NaN === NaN);

// That is error prone (it actually type-cast under the hood):
console.log(isNaN(NaN));
console.log(isNaN());
console.log(isNaN(undefined));

// That is 100% bulletproff:
console.log(Number.isNaN(NaN))
console.log(Number.isNaN())
console.log(Number.isNaN(undefined))
