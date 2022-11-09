const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compara = (array, array2) => {
    let contador = 0
    array.forEach((element, index) => {        
        if (array2[index] === 'N.A') {
            contador += 0;
        } else if (element === array2[index]) {
            contador += 1;
        } else {
            contador -= 0.5;
        }      
    })
return contador
};

const hof = (arrayRp, arrayRp2, callback) => `Resultado final: ${callback(arrayRp, arrayRp2)} pontos`;
    

// const hof = (arrayRp, arrayRp2, callback) => {
// let pontos = callback(arrayRp, arrayRp2,);
// return `Resultado final: ${pontos} pontos`;
// };

console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, compara));



// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// const compareAnswers = (rightAnswer, studentAnswer) => {
//   if (rightAnswer === studentAnswer) {
//     return 1;
//   } if (studentAnswer === 'N.A') {
//     return 0;
//   }
//   return -0.5;
// };
// const countPoints = (rightAnswers, studentAnswers, action) => {
//   let counter = 0;
//   for (let index = 0; index < rightAnswers.length; index += 1) {
//     const actionReturn = action(rightAnswers[index], studentAnswers[index]);
//     counter += actionReturn;
//   }
//   return `Resultado final: ${counter} pontos`;
// };
// console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));