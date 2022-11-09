


let maiorNumeroPrimo = 0;

for (let numero = 2; numero <= 50; numero++) {
    let primo = true;
    for (let divisor = 2; divisor < numero; divisor++) {
       if (numero % divisor === 0) {
            primo = false;
       } 
    }
    if (primo) {
        maiorNumeroPrimo = numero;
    }
}

console.log(maiorNumeroPrimo);
