
function verifica(num) {

if (num % 3 === 0 && num % 5 === 0) {
  num = 'fizzBuzz';
} else if (num % 5 === 0) {
  num = 'buzz';
} else if (num % 3 === 0) {
  num = 'fizz';
} else {
  num = 'bug!';
} 
return num
}

function fizzBuzz(array) {
  let arrayModificada = [];
  for (let index = 0; index < array.length; index+= 1) {
    let munero = array[index]
    arrayModificada.push(verifica(munero))   
  }
  return arrayModificada;
}


console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));