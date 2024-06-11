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
})
