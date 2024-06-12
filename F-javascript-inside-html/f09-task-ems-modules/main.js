import { fruits } from './fruits.js'

const u1 = document.querySelector('[data-list]');

for (const fruit of fruits) {
    u1.innerHTML += `<li>${fruit}</li>`
}

// fruits.forEach((fruit) => {
//     u1.innerHTML += `<li>${fruit}</li>`
// })