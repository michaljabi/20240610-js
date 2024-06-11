
function makeUser(name2 = 'Katie') { // factory function
    return
    {
        name: name2
    };
    // We did not start object with same line as return,
    // that is why object is in "unreachable code" zone!
    // under the hood JS did that:
    // return;
}

console.log(makeUser())
