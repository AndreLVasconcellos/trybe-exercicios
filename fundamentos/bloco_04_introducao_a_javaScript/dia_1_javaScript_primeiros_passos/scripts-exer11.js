let salarioBruto = 6000.00;
let aliInss
let aliIr

if (salarioBruto <= 1556.94) {
    aliInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    aliInss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    aliInss = salarioBruto * 0.11;
} else {
    aliInss = 570.88;
}

let salarioBase = salarioBruto - aliInss;

if (salarioBase <= 1903.98) {
    aliIr = 0;
} else if (salarioBase <= 2826.65) {
    aliIr = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
    aliIr = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
    aliIr = (salarioBase * 0.225) - 636.13;   
} else {
    aliIr = (salarioBase * 0.275) - 869.36;
}

console.log("Salário: " + (salarioBase - aliIr));