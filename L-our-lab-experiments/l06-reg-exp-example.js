// https://regex101.com/

const phrase = 'some text with abc00000 and again adc00100'

const matches = phrase.match(/a\wc\d+/g);


console.log(matches);
