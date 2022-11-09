

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger); // 85


const numbers = [50, 85, -30, 3, 15];
const bigfoot = () => numbers.reduce((acc, curr) => {
  console.log(acc, curr);
  return acc < curr ? curr : acc;  
});



// const bigfoot2 = () => {
//     let result = 0;
//     numbers.forEach((numbe) => {
//     console.log(numbe)
//     result += numbe
  
// })
// return result
// }  

     

// bigfoot2()
// console.log(bigfoot2());
console.log(bigfoot());