function techList(array, string) {
      let result
      array.sort()
      if (array.length === 0){
        result = "Vazio!";
      } else {
       result = [{
      tech: array[0],
      name: string
    },
    {
      tech: array[1],
      name: string
    },
    {
      tech: array[2],
      name: string
    },
    {
      tech: array[3],
      name: string
    },
    {
      tech: array[4],
      name: string
    }]
  }
   return result    
        
}


    console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
    console.log(techList([ ], 'Lucas'));


//     for (let key in array) {
//       console.log(key + ': ' + );
//     }
//         result.nome = string;
//         result.tech = array;
  
        
//     }
   
//   return result



// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for (let key in car) {
//   console.log(key + ': ' + car[key]);
// }