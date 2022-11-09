const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = array => array.sort((a, b) => a - b);

// Seu código aqui.

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`);// será necessário alterar essa linha 😉


console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);

const sortOddsAndEvens2 = array => {

for (let i = 1; i < array.length; i += 1)  {
    for (let secondI = 0; secondI < i; secondI += 1) {
        if (array[i] < array[secondI]) {
            let position = array[i];
            array[i] = array[secondI];
            array[secondI] = position;
            }  
        }
    }
    return array; 
};

console.log(sortOddsAndEvens2(oddsAndEvens));