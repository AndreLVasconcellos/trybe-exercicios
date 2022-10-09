function generatePhoneNumber(params) {
   let telefone;
   let contador = 0;
   if (params.length !== 11) {
      return 'Array com tamanho incorreto.'
} 

for (let index = 0; index < params.length; index += 1) {
    if (params[index] < 0 || params[index] > 9)
    return 'não é possível gerar um número de telefone com esses valores'
}

for (let index1 in params) {
    let verificaNumero = params[index1];
    for (let index3 in params) {
        if (verificaNumero === params[index3]) {
            contador += 1;
        } else if (contador > 3) {
            telefone = params.join('')
            return telefone.replace(/(\d{2})?(\d{5})?(\d{4})?/, "($1) $2-$3")
        }

    }
}
    
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([11, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 3]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, -9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 4, 25, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0])); 
console.log(generatePhoneNumber([0, 2, 4, 3, 5, 5, 6, 8, 9, 2, 1]));
console.log(generatePhoneNumber([0, 2, 3, 4, 5, 8, 7, 9, 1, 0, 7]));


