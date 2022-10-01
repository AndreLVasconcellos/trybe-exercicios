let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1] ;

console.log(menuServices);

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf("Portfólio");

console.log(indexOfPortfolio);

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu3.push("Contato");

console.log(menu3);


let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index+=1) {
    console.log(groceryList[index]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    console.log(name);
}



let counter = 0;

while(counter !== 5) {
  counter += 1; 
  console.log(counter);
}

console.log(5 !== 5);



function dice () { 
    return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
    console.log(d1, d2);
    d2 = dice();
}
