function initials(name, number) {
    return (name || '').split(' ').filter(word => word.length >= 3).slice(0, number).map(word => word.charAt(0)).join('');
}

const initials_two = (name, number) => name.split(' ').reduce((acc, word) => word.length >= 3 && acc.length < number ? `${acc}${word.charAt(0)}` : acc, '')

const initials_three = (name, number) => name.split(' ').reduce((acc, word) => acc.length == number || word.length < 3 ? acc : acc + word[0], '')

console.log(initials('John Doe Cool', 3));
console.log(initials_two('John Doe Cool', 3));
console.log(initials_three('John Doe Cool', 3));

[
    ['John Doe Cool', 3, 'JDC'],
    ['John Doe Cool', 2, 'JD'],
    [ 'John Doe', 1, 'J' ],
    ['John Doe of Snow', 3, 'JDS'],
    ['John', 5, 'J'],
    ['John Doe of Snow Coll', undefined, 'JDSC'],
    ['John Doe of Snow Coll', 0, ''],
].forEach(args => {
    const signature = `initials(${args[0]}, ${args[1]})`;
    const result = initials(args[0], args[1]);
    const success = result === args[2];
    success ? console.log(`✅ SUCCESS! ${signature} => ${result}`) : console.log(`🔥 FAILED! ${signature} => Returned: ${result}, expected: ${args[2]}`);
})

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.push(10);
console.log(array);
array.pop();
console.log(array);
array.unshift(0);
console.log(array);
array.shift();
console.log(array);