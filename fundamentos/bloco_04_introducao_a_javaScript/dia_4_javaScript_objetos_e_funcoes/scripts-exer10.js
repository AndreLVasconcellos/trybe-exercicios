function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
  
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([9, 1, 2, 3, 5, 7]));

  function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
  
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([9, 3, 6, 7, 10, 1]));


  function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
  
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      
    }
  
    return contRepetido;
  }
  
  console.log(maisRepetido([9, 1, 2, 3, 9, 5, 7])); // 2