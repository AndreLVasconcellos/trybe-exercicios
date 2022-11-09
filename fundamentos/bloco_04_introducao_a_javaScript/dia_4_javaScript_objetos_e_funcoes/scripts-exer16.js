function fizzBuzz(array) {
    for (let index = 0; index < array.length; index+= 1) {
        if (array[index] % 3 === 0 && array[index] % 5 === 0) {
            array[index] = 'fizzBuzz';
        } else if (array[index] % 5 === 0) {
            array[index] = 'buzz';
        } else if (array[index] % 3 === 0) {
            array[index] = 'fizz';
        } else {
            array[index] = 'bug!';
        } 
    }
    return array;
}


console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));