

// let total = 0;
// for (let index of consumption) {
// if (objetoQualquer.food[index]) {
//     total += objetoQualquer.food[index]
//     } else {
//         total += objetoQualquer.drink[index]     
//     }
// }
// Math.round(total * 1.1);
// console.log(total);

// let consumption = ['coxinha', 'cerveja', 'sopa', 'agua'];
// let sum = 0;
// for (let index = 0; index < consumption.length; index += 1) { 
//     if (obj.food[consumption[index]]) { // Fernando's Annotation: this solution is a little bit more verbose, although more readable (for me, for the time being).
//       sum += obj.food[consumption[index]];
//     } else sum += obj.drink[consumption[index]];
//   }
//   //   sum += menu.food[item] || menu.drink[item]; // Fernando's Annotation: another solution using McCarthy (or short-circuit or minimal) evaluation - which seems more efficient, but it is only less verbose.
//   console.log(Math.round(sum * 1.1));


// total += objetoQualquer.food[order] || objetoQualquer.drink[order];


// const createMenu = (objeto) => { 
//     const restaurant = {
//       fetchMenu: () => objeto,
//       consumption: [],
//       order: (request) => restaurant.consumption.push(request),
//       pay: () => {
//         let total = 0;
//         restaurant.consumption.forEach((value) => {
//             total += objeto.food[value] || objeto.drink[value] });
//         return Math.round(total* 1.1);
//       },
//     };
//     return restaurant;
//   };


// const obj = { food: { coxinha: 3.9, sopa: 9.9 }, drink: { agua: 3.9, cerveja: 6.9 } };

// const createMenu = (objeto) => { 
//     const fetchMenu = () => objeto;
//     const consumption = [];
//     const restaurant = {
//       fetchMenu,
//       consumption,
//       order: (request) => consumption.push(request),
//       pay: () => {
//         let total = 0;
//         consumption.forEach((value) => {
//          total += objeto.food[value] || objeto.drink[value];
//         });
//         return Math.round(total * 1.1);
//       },
//     };
//     return restaurant;
//   };

const createMenu = (objeto) => { 
    const restaurant = {
      fetchMenu: () => objeto,
      consumption: [],
      order: (request) => restaurant.consumption.push(request),
      pay: () => {
        let total = 0;
        for (let value of restaurant.consumption) {
            objeto.food[value] ? total += objeto.food[value] : total += objeto.drink[value]
        }
        return Math.round(total* 1.1);
      },
    };
    return restaurant;
  };


  const objetoRetornado8 = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
  objetoRetornado8.order('coxinha');
  objetoRetornado8.order('agua');
  objetoRetornado8.order('coxinha');
  console.log(objetoRetornado8.fetchMenu());
  console.log(objetoRetornado8.consumption); 
  console.log(objetoRetornado8.pay()); 