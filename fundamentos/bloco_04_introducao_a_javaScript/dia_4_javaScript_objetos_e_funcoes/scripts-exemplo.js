let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let value in names) {
    console.log(value);
    console.log("olá " + names[value]);
    console.log(names.person1);
  }


  let food = ['hamburguer', 'bife', 'acarajé'];
  for (let value of food) {
    console.log(value);
  };
  //resultado: hamburguer, bife, acarajé;

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (const position in car) {
    console.log(position);
    console.log(car.manufacturer);
    console.log(car);
    console.log(position + ': ' + car[position])
}