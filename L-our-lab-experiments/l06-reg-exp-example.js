// https://regex101.com/

const phrase = 'some text with abc00000 and again adc00100'

const matches = phrase.match(/a\wc\d+/g);


console.log(matches);

const phrase2 = 'some text with and again'

const matches2 = phrase2.match(/a\wc\d+/g);

console.log(matches2)


// Benefits of not need to put logical expressions here
// instead we put here null or Array object.
if (matches2) {
    console.log('we got something', matches2)
}

if (matches) {
    console.log('we got something', matches)
}
