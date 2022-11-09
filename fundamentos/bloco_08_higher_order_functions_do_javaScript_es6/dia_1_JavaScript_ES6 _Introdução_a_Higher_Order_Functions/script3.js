
// const numberChecker = (myNumber, number) => myNumber === number;
// const lotteryResult = (myNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) + 1);
//   return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
// };
// console.log(lotteryResult(2, numberChecker));




const sorteio = () => Math.floor(Math.random() * 5 ) + 1;
const verifica = (callback, number) => number === callback() ? 'Parabéns você ganhou' : 'Tente novamente';

console.log(Math.floor(Math.random() * 5 ) + 1);

console.log(Math.floor(Math.random() * 11)); 


console.log(verifica(sorteio, 4));