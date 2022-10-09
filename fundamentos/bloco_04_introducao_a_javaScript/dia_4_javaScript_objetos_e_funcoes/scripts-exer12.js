function highestCount(numeros) {
    let indiceMaior = 0;
    let contador = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
    let maiorNumero = numeros[indiceMaior];
    for (let index = 0; index < numeros.length; index += 1) {
        if (maiorNumero === numeros[index]) {
        contador += 1;
        }   
    }
    return contador; 
}
  
  console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

  
