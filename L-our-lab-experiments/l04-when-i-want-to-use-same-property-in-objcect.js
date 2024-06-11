const user = {
    id: 1,
    name: 'Michal'
}

// const EMPTY_USER_ID = { id: undefined }

console.log(user);

console.log({ ...user, id: undefined })


// under the hood:
console.log({
    id: 1,
    name: 'Michal',
    id: undefined
});


// 
// -----
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// Mark ased about it :)

function addNumbers(n1, n2, n3) {
    return n1 + n2 + n3;
}

// [1, 2, 3];

addNumbers.apply(null, [1, 2, 3]); //=

addNumbers(...[1, 2, 3]); // addNumbers(1, 2, 3) 
addNumbers(...[1, 2, 3]); //=