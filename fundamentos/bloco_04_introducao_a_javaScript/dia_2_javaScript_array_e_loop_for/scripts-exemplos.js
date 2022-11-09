let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

let tasksList1 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList1[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro


let tasksList2 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList2.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList2);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

let tasksList3 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList3.pop();  // remove a última tarefa
console.log(tasksList3);

// [ 'Tomar café', 'Reunião' ]

let tasksList4 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList4.indexOf('Reunião');
console.log(indexOfTask);

// 1

