let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;
let mediaAritimetica;

for (let index = 0; index < numbers.length; index+=1) {
    console.log(numbers[index]);  
    somaNumbers = somaNumbers + numbers[index];
} 
mediaAritimetica = somaNumbers / numbers.length;
console.log(somaNumbers);
console.log(mediaAritimetica);

if (mediaAritimetica > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor que 20");
}

let maiorNumbers = numbers[0];

for (let i = 1; i < numbers.length; i+=1) {
     if (numbers[i] > maiorNumbers) {
        maiorNumbers = numbers[i]        
     }    
}
console.log(maiorNumbers);


let contador = 0

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 !== 0) {
        contador = contador + 1;
    }    
}
if (contador === 0) {
        console.log('nenhum valor ímpar encontrado');
} else {
    console.log(contador);
}

let menorNumbers = numbers[0]

for (let index = 1; index < numbers.length; index++) {
   if (numbers[index] < menorNumbers) {
        menorNumbers = numbers[index];
   }     
}
console.log(menorNumbers);


let newArray = [];

for (let index = 1; index <= 25; index+= 1) {
    newArray.push(index);    
}
console.log(newArray);

for (let index = 0; index < newArray.length; index++) {
    console.log(newArray[index] / 2);  
}