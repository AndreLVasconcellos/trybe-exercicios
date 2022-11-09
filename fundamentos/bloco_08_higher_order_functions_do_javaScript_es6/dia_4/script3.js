const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const expectedResult = 20;
  
//   function containsA() {
//     let resultado = 0
//     names.forEach((name) => {
//     const letraspalavras = name.split('');
//     resultado += letraspalavras.reduce((acc, letra) => {
//         if (letra === 'a' || letra === 'A') {
//             return acc + 1;
//         }
//         return acc;
//     }, 0)
// })
//    return resultado;
//   }

//   function containsA() {
//     let resultado = 0
//     names.forEach((name) => {
//         resultado += name.split('').reduce((acc, letra) => letra === 'a' || letra === 'A' ? acc + 1 : acc, 0)
// })
//    return resultado;
//   }



  function containsA() {
    let resultado = 0
    names.forEach((name) => resultado += name.split('').reduce((acc, letra) => letra === 'a' || letra === 'A' ? acc + 1 : acc, 0))
    return resultado;
  }


console.log(containsA());
