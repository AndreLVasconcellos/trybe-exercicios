


// const longestWord = text => {
//     const wordArray = text.split(' ');
//     let maxlength = 0;
//     let result = '';
//     for (let index = 1; index < wordArray.length; index += 1) {
//         for (let index2 = 0; index2 < wordArray.length; index2 += 1) {
//             if (wordArray[index].length < wordArray[index2].length) {
//                 result = wordArray[index2]

//             }
//         }
      
//     }
//    return result;  
// }




const longestWord = text => {
    const wordArray = text.split(' ');
    let maxlength = 0;
    let result = '';
    for (let index = 0; index < wordArray.length; index += 1) {
        
            if (wordArray[index].length > maxlength) {
                maxlength = wordArray[index].length; 
                result = wordArray[index]
            }
        
      
    }
   return result;  
}
console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));

let text2 = 'Antônio foi ao banheiro e não sabemos o que aconteceu';


console.log(text2.split(' ').sort());


const longestWord2 = text => text.split(' ').sort((wordA, WordB) => WordB.length - wordA.length)[0];


console.log(text2.split(' ').sort((wordA, WordB) => WordB.length - wordA.length));
console.log(longestWord2(text2));
