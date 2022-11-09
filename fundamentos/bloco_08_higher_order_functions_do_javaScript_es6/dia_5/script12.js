const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo


const carros = [
    ...palio,
    ...shelbyCobra,
    ...chiron
];
console.log(carros);

const toObject = ([name, brand, year]) => ({ name, brand, year });

console.log(toObject(['Palio', 'Fiat', 2019]));

console.log(toObject(palio));
console.log(toObject(chiron));
console.log(toObject(shelbyCobra));

 const obj1 = toObject(palio);  
 const obj2 = toObject(chiron); 
 const obj3 = toObject(shelbyCobra);
 const resultado2 = {obj1, obj2, obj3};   
const resultado = (carro1, carro2, carro3) => ({carro1, carro2, carro3});



console.log(resultado(obj1, obj2, obj3));
console.log(resultado2);