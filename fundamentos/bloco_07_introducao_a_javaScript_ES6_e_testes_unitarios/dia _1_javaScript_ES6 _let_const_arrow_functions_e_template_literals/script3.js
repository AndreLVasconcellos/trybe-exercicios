


const factorial = num => {
    let result = 1;
    for (let index = 2; index <= num; index += 1) {
        result *= index;   
    }
    return result;
};
console.log(`Esse é o fatorial ${factorial(4)}`);


const facto = n => n > 1 ? facto(n -1)*n : n = 1;


console.log(facto(4));