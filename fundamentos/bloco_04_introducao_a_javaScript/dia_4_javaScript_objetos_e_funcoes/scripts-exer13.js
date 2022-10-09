
function highestCount(numeros) {
    let contador = 0;
    numeros.sort((a, b) => b - a)
    let highest = numeros[0]
    for (let index = 0; index < numeros.length; index += 1) {
        if (highest === numeros[index]) {
        contador += 1;
        }   
    }
    return contador; 
}
  
  console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));






