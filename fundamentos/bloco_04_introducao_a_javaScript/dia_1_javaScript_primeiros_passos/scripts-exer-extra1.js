

// 1 - Desenvolva um algoritmo que calcula a soma dos números 1 até 50 usando a estrutura condicional "for". Retorne a resposta no seguinte formato:
// A soma total de 1 até 50 é: X




let soma = 0


for (let index = 1; index <= 50; index+=1) {
    soma = soma + index
}   


console.log("A soma total de 1 até 50 é: " + soma);




// 5 - Desenvolva um algoritmo que recebe a idade de 3 pessoas e imprime quem é a pessoa mais nova. Exiba o resultado no seguinte formato:
// "Pessoa" é a pessoa mais nova.



let a = 23;
let b = 18;
let c = 30;

if (a < b && a < c) {
    console.log("Pedro é a pessoa mais nova.");    
} else if (b < a && b < c) {
    console.log("joao é a pessoa mais nova.");
} else {
    console.log("carlos é a pessoa mais nova.");
}{
    
}