let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);


let word2 = 'tryber';
let reverseWord2 = '';

reverseWord2 = word2.split('').reverse().join('');

console.log(word2.split(''));
console.log(word2.split('').reverse());
console.log(word2.split('').reverse().join(''));
console.log(reverseWord2);