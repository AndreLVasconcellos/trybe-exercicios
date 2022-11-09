function highestCount(numeros) {
    let indiceMaior = 0;
    let contador = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] <= numeros[indice]) {
        indiceMaior = indice;
        if (numeros)
        contador += 1
      }
    }
    return contador; 
}
  
  console.log(highestCount([9, 9, 10, 3]));

  
