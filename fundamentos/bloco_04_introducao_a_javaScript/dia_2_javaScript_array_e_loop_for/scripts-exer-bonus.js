let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// console.log(numbers.sort());


for (let index = 1; index < numbers.length; index++) {
    for (let index2 = 0; index2 < numbers.length; index2++) {
        if (numbers[index] < numbers[index2]) {
            let posicao = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = posicao;
        }
        
    }
    
}

console.log(numbers);